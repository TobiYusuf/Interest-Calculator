// alert("Hello world");
const downPayment = [
  0.1, 0.25, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9,
];

const tenorDurationAndRates = {
  "24 hours": 0.02,
  "48 hours": 0.02,
  "72 hours": 0.02,
  "4 days": 0.03,
  "5 days": 0.04,
  "6 days": 0.05,
  "7 days": 0.07,
  "14 days": 0.08,
  "21 days": 0.09,
  "30 days": 0.1,
  "60 days": 0.11,
  "90 days": 0.14,
  "120 days": 0.16,
  "150 days": 0.18,
  "180 days": 0.2,
};

const form = document.querySelector(".PSS-calculator");
const form2 = document.querySelector(".PSS_breakdown");
const clearBreakdown = document.querySelector(".clear");
const pssCalc = document.querySelector(".PSS_calculator");
const pssBrkdwn = document.querySelector(".PSS_breakdown");

const amount = document.getElementById("product-amount");
const bookingDate = document.getElementById("booking-date");
const product = document.getElementById("product");
let option = product.options[product.selectedIndex].text;
const serviceDate = document.getElementById("service-date");

const downPaymentOption = document.querySelector("#down-payment");
const tenorSelection = document.querySelector("#tenor-selection");

const ideposit = document.querySelector(".initial-Deposit");
const secondPayment = document.querySelector(".second-payment");

let sRatePlusDp = [];
let newOption;
let ticketPrice;
let gbf;
let gbfList = [];
let initialDesposit;

let daysToTravel;
let tenorDaysList = [];
let tenorDays;
let installments;

clearBreakdown.addEventListener("click", () => {
  showAndHideBreakdown();
  sRatePlusDp = [];
  gbfList = [];
  tenorDaysList = [];

  // clear tenor selection to avoid duplicate
  tenorSelection.innerHTML = "";
});

function showAndHideBreakdown() {
  pssBrkdwn.classList.toggle("hide");
  pssCalc.classList.toggle("hide");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (dpRate of downPayment) {
    ticketPrice = parseFloat(amount.value.replace(/,/g, ""));
    gbf = ticketPrice - dpRate * ticketPrice;
    gbfList.push(gbf);

    initialDesposit = 0.02 * gbf + dpRate * ticketPrice;
    sRatePlusDp.push(initialDesposit);
  }

  // change innertext of initial deposit number
  ideposit.innerText = `N${sRatePlusDp[0].toLocaleString("en-US")}`;
  secondPayment.innerText = `N${gbfList[0].toLocaleString("en-US")}`;

  // console.log(sRatePlusDp);
  // console.log(initialDesposit);

  for (i = 0; i < sRatePlusDp.length; i++) {
    newOption = document.createElement("option");
    newOption.innerText = `N${sRatePlusDp[i].toLocaleString("en-US")} (${(
      downPayment[i] * 100
    ).toFixed(0)}%)`;
    downPaymentOption.appendChild(newOption);
  }

  // Populate the available tenor based on the dates
  // Calculate all installments after downpayment
  // how many installments is need
  // installments needed is gotten from the difference between Booking and service date - travel date

  for (let key of Object.keys(tenorDurationAndRates)) {
    // console.log(key);
    daysToTravel = differenceInDays(serviceDate.value, bookingDate.value);
    daysToTravel = daysToTravel - 5;
    let newOption = document.createElement("option");
    tenorDays = key.split(" ")[0];
    // convert the hours into days
    if (tenorDays === "24" || tenorDays === "48" || tenorDays === "72") {
      tenorDays = tenorDays / 24;
    }

    if (daysToTravel > tenorDays) {
      newOption.innerText = key;
      tenorSelection.appendChild(newOption);
    }
    // console.log(tenorDays);
  }

  pssCalc.classList.toggle("hide");
  pssBrkdwn.classList.toggle("hide");
});

downPaymentOption.addEventListener("change", () => {
  let selectedDeposit = downPaymentOption.value.split(" ")[0];
  ideposit.innerText = selectedDeposit;
  const installmentBrkdwn = document.querySelector(".amount");
  let tenor = tenorSelection;
  tenor = tenor.options[tenor.selectedIndex].text;

  // let deposit = scRate * gbf + dpRate * ticketPrice

  gbf =
    parseInt(ticketPrice) -
    parseInt(selectedDeposit.replace(/[N,]/g, "").toLocaleString("en-US"));
  // console.log(ticketPrice);
  console.log(gbf);
  // split gbf into installments
  if (tenor / 30 >= 2) {
    console.log(tenor);
    installmentBrkdwn.innerText = parseInt(gbf / (tenor / 30));
    console.log(parseInt(gbf / (tenor / 30)));
  } else {
    installmentBrkdwn.innerText = parseInt(gbf);
    console.log(parseInt(gbf));
  }
  console.log(gbf);
  // Append installments to payment breakdown
});

tenorSelection.addEventListener("change", () => {
  let e = tenorSelection;
  e = e.options[e.selectedIndex].text;
  let scRate = e in tenorDurationAndRates ? tenorDurationAndRates[e] : null;
  let dpRate =
    downPaymentOption.value.split(" ")[1].replace(/[()%]/g, "") / 100;
  gbf = ticketPrice - dpRate * ticketPrice;
  let deposit = scRate * gbf + dpRate * ticketPrice;

  ideposit.innerText = `N${deposit.toLocaleString("en-US")}`;

  // change second payment date accoring to tenor selected
  // second payment date will booking date + tenor

  // change breakdown according to tenor selection
  const parent = document.querySelector(".payment__breakdown");
  let tenorDaySelected = e.split(" ")[0];

  const numberOfChildElement = parent.childElementCount;
  if (numberOfChildElement > 3) {
    // Select the fourth element
    console.log("working");
    const fourthElement = parent.children[2];

    // Remove the fourth element and all subsequent elements
    while (fourthElement.nextSibling) {
      parent.removeChild(fourthElement.nextSibling);
    }
  }

  installments = gbf / (tenorDaySelected / 30);
  console.log(gbf);
  console.log(installments);

  const installmentLvl = [
    "Third Payment",
    "Fourth Payment",
    "Fifth Payment",
    "Sixth Payment",
    "Final Payment",
  ];
  const dueDates = [];

  if (tenorDaySelected / 30 >= 2) {
    // check if there is more than three elements then remove all elements beside first three

    // then go on to create the additional elements
    let result = Math.floor(tenorDaySelected / 30 - 1);
    for (let i = 0; i < result; i++) {
      const divContainer = document.createElement("div");
      divContainer.classList.add("flexxi");
      const paymentDesc = document.createElement("p");
      const paymentAmt = document.createElement("p");
      const paymentDate = document.createElement("p");
      paymentDesc.textContent = installmentLvl[i]; //installments
      secondPayment.innerText = paymentAmt.textContent = installments; // gbf
      paymentDate.textContent = "20 May 2024"; // payment date

      divContainer.appendChild(paymentDesc);
      divContainer.appendChild(paymentAmt);
      divContainer.appendChild(paymentDate);
      console.log(divContainer);

      // Get a reference to the parent element
      parent.appendChild(divContainer);

      // Get a reference to the element after which you want to insert the new element
      // Second child element

      // append element
    }
  }
});

// Get references to the start and end date input fields
const startDateInput = document.getElementById("booking-date");
const endDateInput = document.getElementById("service-date");

// Set the booking date to today and beyond
startDateInput.min = new Date().toISOString().split("T")[0];
endDateInput.min = startDateInput.min;

startDateInput.addEventListener("input", () => {
  // Get the selected start date
  const startDate = new Date(startDateInput.value);
  // Disable dates before the selected start date in the end date input
  endDateInput.min = startDateInput.value;
});

endDateInput.addEventListener("input", () => {
  const endDate = new Date(endDateInput.value);
});

function getNumber(_str) {
  var arr = _str.split("");
  var out = new Array();
  for (var cnt = 0; cnt < arr.length; cnt++) {
    if (isNaN(arr[cnt]) == false) {
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(""));
}

let inputField = document.querySelector("#product-amount");

inputField.oninput = function () {
  let num = getNumber(this.value);
  if (num == 0) {
    num = "";
  } else {
    let re = /\b(\d+)(\d{2})\b/;
    // var str = '300000';
    let subst = "$1.$2";
    let result = num.toString().replace(re, subst);
    let output = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // console.log(output)
    this.value = output;
  }
};

// Function to calculate the difference in days between two dates
function differenceInDays(date1, date2) {
  // Convert both dates to milliseconds since Unix epoch
  date1 = new Date(date1);
  date2 = new Date(date2);

  const date1Milliseconds = date1.getTime();
  const date2Milliseconds = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceMilliseconds = Math.abs(
    date2Milliseconds - date1Milliseconds
  );

  // Convert milliseconds to days (1 day = 24 hours = 24 * 60 * 60 * 1000 milliseconds)
  const differenceDays = Math.ceil(
    differenceMilliseconds / (1000 * 60 * 60 * 24)
  );
  return differenceDays;
}
