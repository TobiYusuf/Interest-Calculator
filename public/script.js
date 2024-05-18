// alert("Hello world");

const downPayment = [
  0.1, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85,
  0.9,
];

const countryRates = {
  Nigeria: {
    "24 hours": 0.04,
    "48 hours": 0.04,
    "72 hours": 0.04,
    "4 days": 0.05,
    "5 days": 0.06,
    "6 days": 0.07,
    "7 days": 0.09,
    "14 days": 0.1,
    "21 days": 0.11,
    "30 days": 0.12,
    "60 days": 0.13,
    "90 days": 0.16,
    "120 days": 0.18,
    "150 days": 0.2,
    "180 days": 0.22,
  },
  Ghana: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.07,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.15,
    "180 days": 0.17,
  },

  "Sierra Leone": {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },

  Gambia: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },

  Liberia: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },

  Togo: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },

  Cameroon: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },

  "Cote D'ivoire": {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },

  Kenya: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },
  // Not Active ****************************
  UAE: {
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
  },

  Benin: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },
  // Rates have not been concluded yet *****************************
  Rwanda: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },
  // Rates have not been concluded yet *****************************
  Tanzania: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },
  // Rates have not been concluded yet *****************************
  Uganda: {
    "24 hours": 0.03,
    "48 hours": 0.03,
    "72 hours": 0.03,
    "4 days": 0.04,
    "5 days": 0.04,
    "6 days": 0.04,
    "7 days": 0.05,
    "14 days": 0.05,
    "21 days": 0.06,
    "30 days": 0.06,
    "60 days": 0.08,
    "90 days": 0.1,
    "120 days": 0.12,
    "150 days": 0.13,
    "180 days": 0.14,
  },
};

// Get a reference to the dropdown element
const dropDowns = document.querySelectorAll(".dropdown-item");
const mainCountryFlag = document.querySelector(".main-country");
let tenorDurationAndRates;
let initialServiceCharge;

// Selecte Default rates until country is clicked
tenorDurationAndRates = {
  "24 hours": 0.04,
  "48 hours": 0.04,
  "72 hours": 0.04,
  "4 days": 0.05,
  "5 days": 0.06,
  "6 days": 0.07,
  "7 days": 0.09,
  "14 days": 0.1,
  "21 days": 0.11,
  "30 days": 0.12,
  "60 days": 0.13,
  "90 days": 0.16,
  "120 days": 0.18,
  "150 days": 0.2,
  "180 days": 0.22,
};

initialServiceCharge = tenorDurationAndRates["24 hours"];

for (let dropDown of dropDowns) {
  // Add event listener to the dropdown

  dropDown.addEventListener("click", () => {
    // console.log("Selected value:", dropDown.innerText);
    // change flag of current country

    mainCountryFlag.setAttribute(
      "src",
      `assets/Flag-${dropDown.innerText}.png`
    );
    tenorDurationAndRates = countryRates[dropDown.innerText];
    initialServiceCharge = countryRates[dropDown.innerText]["24 hours"];
  });
}

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
const secondDuedate = document.querySelector(".second-duedate");

const dropDownItems = document.querySelectorAll(".dropdown-item");
const dropDownMenu = document.querySelectorAll(".dropdown-menu");

const arrowDropdown = document.querySelector("#arrow-dropdown");

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
let dueDates = [];

clearBreakdown.addEventListener("click", () => {
  showAndHideBreakdown();
  // Initial variables after
  sRatePlusDp = [];
  gbfList = [];
  tenorDaysList = [];
  const parent = document.querySelector(".payment__breakdown");
  // let tenorDaySelected = e.split(" ")[0];

  const numberOfChildElement = parent.childElementCount;
  if (numberOfChildElement > 3) {
    // Select the fourth element
    const fourthElement = parent.children[2];

    // Remove the fourth element and all subsequent elements
    while (fourthElement.nextSibling) {
      parent.removeChild(fourthElement.nextSibling);
    }
  }

  // Add dropdown items
  for (let item of dropDownItems) {
    item.classList.remove("hide");
  }

  arrowDropdown.classList.add("dropdown-toggle");

  amount.value = "";
  bookingDate.value = "";
  product.value = "";
  serviceDate.value = "";

  // clear tenor selection to avoid duplicate
  downPaymentOption.innerHTML = "";
  tenorSelection.innerHTML = "";
});

// show or hide PSS calculator and payment breakdown
function showAndHideBreakdown() {
  pssBrkdwn.classList.toggle("hide");
  pssCalc.classList.toggle("hide");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arrowDropdown.classList.remove("dropdown-toggle");
  const daysToTravelCheck = differenceInDays(
    bookingDate.value,
    serviceDate.value
  );
  let inputTicketPrice = parseFloat(amount.value.replace(/,/g, ""));
  if (daysToTravelCheck <= 3) {
    const errorMsg = document.querySelector(".input-error");
    errorMsg.innerText =
      "The booking date should be more than 3 days before departure date";

    let myModal = new bootstrap.Modal(document.getElementById("popup-alert"));
    myModal.show();
  } else if (inputTicketPrice < 500 || inputTicketPrice > 100000000) {
    const errorMsg = document.querySelector(".input-error");
    errorMsg.innerText = "The Minimum amount is 500 and maximum is 100,000,000";

    let myModal = new bootstrap.Modal(document.getElementById("popup-alert"));
    myModal.show();
  } else {
    // Function to show the modal when the page loads
    // remove dropdown menu
    for (let item of dropDownItems) {
      item.classList.add("hide");
    }

    // change innertext of initial deposit number
    for (dpRate of downPayment) {
      ticketPrice = parseFloat(amount.value.replace(/,/g, ""));
      gbf = (1 - dpRate) * ticketPrice;
      gbfList.push(Math.round(gbf));

      initialDesposit = initialServiceCharge * gbf + dpRate * ticketPrice;
      sRatePlusDp.push(Math.round(initialDesposit));
    }

    // console.log(`N${convertNumStr(sRatePlusDp[0])}`);
    ideposit.innerText = `${convertNumStr(sRatePlusDp[0])}`;
    secondPayment.innerText = `${convertNumStr(gbfList[0])}`;

    const currentDate = addTenorToDuedate(24, bookingDate.value);

    // format dates and add to payment breakdown
    const dueDate = formatDateToDayMonthYear(currentDate);
    secondDuedate.innerText = dueDate;
    const installmentDesc = document.querySelector(".installment-desc");
    installmentDesc.innerText = "Final Payment";

    for (let i = 0; i < sRatePlusDp.length; i++) {
      newOption = document.createElement("option");
      newOption.innerText = `${convertNumStr(sRatePlusDp[i])} (${(
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
      daysToTravel = differenceInDays(serviceDate.value, bookingDate.value, 2);
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
    calculateTotal();

    showAndHideBreakdown();
  }
});

function convertNumStr(num) {
  return num.toLocaleString("en-US");
}

// Function to calculate the difference in days between two dates
function differenceInDays(startDate, endDate, gracePeriod = 0) {
  // Convert both dates to milliseconds since Unix epoch
  date1 = new Date(startDate);
  date2 = new Date(endDate);

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
  return differenceDays - gracePeriod;
}

downPaymentOption.addEventListener("change", () => {
  let selectedDeposit = downPaymentOption.value.split(" ")[0];
  ideposit.innerText = selectedDeposit;
  // console.log(selectedDeposit);

  // Select all the installment payment
  const installmentBrkdwn = document.querySelectorAll(".amount");
  // console.log(document.querySelectorAll(".amount"));

  let tenor = tenorSelection;
  tenor = tenor.options[tenor.selectedIndex].text;
  tenor = parseInt(tenor.split(" ")[0]);

  let gbfNumericPercentage = 1 - downPaymentRate();
  // console.log(gbfNumericPercentage.toFixed(2));
  gbf = parseFloat(ticketPrice) * gbfNumericPercentage.toFixed(2);
  // console.log(gbf);
  gbf = Math.round(gbf);

  // split gbf into installments
  if (tenor !== 72 && tenor / 30 >= 2) {
    console.log(tenor / 30 >= 2);
    for (let i = 0; i < installmentBrkdwn.length; i++) {
      installmentBrkdwn[i].innerText = convertNumStr(
        parseInt(gbf / (tenor / 30))
      );
    }
  } else if (tenor === 72 || tenor / 30 < 2) {
    for (let i = 0; i < installmentBrkdwn.length; i++) {
      installmentBrkdwn[i].innerText = convertNumStr(parseInt(gbf));
    }
  }
  // Check if the element is present
  const element = document.querySelector(".sumtotal");

  if (element) {
    // If the element is present, remove it
    element.remove();
  } else {
    // console.log("Element not found");
  }

  calculateTotal();

  // Append installments to payment breakdown
});

function downPaymentRate() {
  return downPaymentOption.value.split(" ")[1].replace(/[()%]/g, "") / 100;
}

// ********************* TENOR SELECTION ****************************
tenorSelection.addEventListener("change", () => {
  let e = tenorSelection;
  e = e.options[e.selectedIndex].text;
  let scRate = e in tenorDurationAndRates ? tenorDurationAndRates[e] : null;
  let dpRate = downPaymentRate();

  gbf = ticketPrice - dpRate * ticketPrice;
  let deposit = parseFloat(scRate * gbf + dpRate * ticketPrice);

  ideposit.innerText = convertNumStr(Math.round(deposit));

  sRatePlusDp = [];
  for (let i = 0; i < downPayment.length; i++) {
    ticketPrice = parseFloat(amount.value.replace(/,/g, ""));
    gbf1 = ticketPrice - downPayment[i] * ticketPrice;
    gbfList.push(Math.round(gbf1));

    initialDesposit =
      tenorDurationAndRates[e] * gbf1 + downPayment[i] * ticketPrice;
    sRatePlusDp.push(Math.round(initialDesposit));
  }
  downPaymentOption.innerHTML = "";

  for (i = 0; i < sRatePlusDp.length; i++) {
    newOption = document.createElement("option");
    newOption.innerText = `${convertNumStr(sRatePlusDp[i])} (${(
      downPayment[i] * 100
    ).toFixed(0)}%)`;
    downPaymentOption.appendChild(newOption);
    if (newOption.innerText.split(" ")[0] === ideposit.innerText) {
      newOption.selected = true;
    }
  }
  // console.log(sRatePlusDp);

  // change second payment date accoring to tenor selected
  // second payment date will booking date + tenor

  // change breakdown according to tenor selection

  const parent = document.querySelector(".payment__breakdown");
  let tenorDaySelected = e.split(" ")[0];

  // check if there is more than three elements then remove all elements beside first three
  const numberOfChildElement = parent.childElementCount;
  if (numberOfChildElement > 3) {
    // Select the fourth element
    const fourthElement = parent.children[2];

    // Remove the fourth element and all subsequent elements
    while (fourthElement.nextSibling) {
      parent.removeChild(fourthElement.nextSibling);
    }
  }

  // console.log(tenorDaySelected);
  if (tenorDaySelected === "72") {
    installments = Math.round(gbf);
  } else {
    installments = Math.round(gbf / (tenorDaySelected / 30));
  }

  if (
    tenorDaySelected === "24" ||
    tenorDaySelected === "48" ||
    tenorDaySelected === "72"
  ) {
    secondPayment.innerText = convertNumStr(Math.round(gbf));

    calculateTotal();
    secondDuedate.innerText = changeSecondDueDate(tenorDaySelected / 24);
    const installmentDesc = document.querySelector(".installment-desc");
    installmentDesc.innerText = "Final Payment";
  }

  if (
    tenorDaySelected !== "24" &&
    tenorDaySelected !== "48" &&
    tenorDaySelected !== "72" &&
    tenorDaySelected / 30 < 2
  ) {
    secondPayment.innerText = convertNumStr(Math.round(gbf));

    calculateTotal();
    // console.log(changeSecondDueDate(tenorDaySelected));
    secondDuedate.innerText = changeSecondDueDate(tenorDaySelected);
    const installmentDesc = document.querySelector(".installment-desc");
    installmentDesc.innerText = "Final Payment";
  }

  let dateDate = [60, 90, 120, 150, 180];
  const installmentLvl = [
    "Second Installment",
    "Third Installment",
    "Fourth Installment",
    "Fifth Installment",
  ];

  if (tenorDaySelected !== "72" && tenorDaySelected / 30 >= 2) {
    const dateForBookingDate = changeSecondDueDate(30);
    // change second installment payment
    secondDuedate.innerText = dateForBookingDate;
    const installmentDesc = document.querySelector(".installment-desc");
    installmentDesc.innerText = "First Installment";

    // then go on to create the additional elements
    let numPayment = Math.floor(tenorDaySelected / 30 - 1);
    for (let i = 0; i < numPayment; i++) {
      const divContainer = document.createElement("div");
      divContainer.classList.add("flexxi");
      const paymentDesc = document.createElement("p");
      const paymentAmt = document.createElement("p");
      paymentAmt.classList.add("amount");
      const paymentDate = document.createElement("p");
      if (i !== numPayment - 1) {
        paymentDesc.textContent = installmentLvl[i];
      } else {
        paymentDesc.textContent = "Final Payment"; //installments
      }

      secondPayment.innerText = paymentAmt.textContent =
        convertNumStr(installments); // gbf

      paymentDate.textContent = changeSecondDueDate(dateDate[i]);
      //second payment + 30days

      divContainer.appendChild(paymentDesc);
      divContainer.appendChild(paymentAmt);
      divContainer.appendChild(paymentDate);

      // Get a reference to the parent element
      parent.appendChild(divContainer);

      // Get a reference to the element after which you want to insert the new element
      // Second child element

      // append element
    }

    // create total amount
    calculateTotal();
  }
});

function calculateTotal() {
  const parent = document.querySelector(".payment__breakdown");
  let receivables = document.querySelectorAll(".amount");
  let firstPayment = document.querySelector(".initial-Deposit");

  const divContainer = document.createElement("div");
  divContainer.classList.add("sumtotal", "flexxi");
  const paymentDesc = document.createElement("p");
  const paymentAmt = document.createElement("p");
  paymentAmt.classList.add("total");
  paymentDesc.innerText = "Total";
  divContainer.appendChild(paymentDesc);
  divContainer.appendChild(paymentAmt);
  parent.appendChild(divContainer);

  let sum = 0;
  for (let i of receivables) {
    sum += parseInt(i.innerText.replace(/,/g, ""));
  }
  sum += parseInt(firstPayment.innerText.replace(/,/g, ""));
  paymentAmt.innerText = convertNumStr(sum);
}

// Function to format date to "day month year"
function formatDateToDayMonthYear(date) {
  // Get day, month, and year components from the date object
  date = new Date(date);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format the date string as "day month year"
  const formattedDate = `${monthNames[monthIndex]} ${day} ${year}`;

  return formattedDate;
}

//  Add tenor to get due dates
function addTenorToDuedate(tenor, date) {
  const currentDate = new Date(date);
  return currentDate.setHours(currentDate.getHours() + tenor);
}

function changeSecondDueDate(tenorSelected) {
  let modifiedTenor = tenorSelected * 24;
  const dateModifiedWithTenor = addTenorToDuedate(
    modifiedTenor,
    bookingDate.value
  );
  let bookingDateLessThan30days = formatDateToDayMonthYear(
    dateModifiedWithTenor
  );
  return bookingDateLessThan30days;
}

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
