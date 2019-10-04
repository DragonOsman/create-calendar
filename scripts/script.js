"use strict";
function createCalendar(elem, year, month) {
  const date = new Date(year, month - 1),
    numCalendarCells = 35,
    daysArray = getDaysArray(),
    daysInWeek = daysArray.length,
    numRows = numCalendarCells / daysInWeek;

  // For the <thead> element
  const tableHeader = createTableHeader(daysArray);

  const tableBody = createTableBody(numRows, daysArray, date);
  const calendarTable = document.createElement("table");
  calendarTable.append(tableHeader);
  calendarTable.append(tableBody);

  let dateCount = date.getDate();
  const calendarCells = calendarTable.getElementsByTagName("td");
  calendarCells[0].textContent = "30";
  for (let td = 6; td < numCalendarCells; ++td) {
    calendarCells[td].textContent = `${dateCount}`;
    ++dateCount;
  }

  elem.append(calendarTable);
}

function getDaysArray() {
  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  return daysArray;
}

// For the <thead> element
function createTableHeader(daysArray) {
  // Creating an array of <th> elements to be added to <thead> element
  const tableHeadingArray = [];
  for (let headingIndex = 0; headingIndex < daysArray.length; ++headingIndex) {
    const tableHeadingElem = document.createElement("th");
    tableHeadingElem.textContent = daysArray[headingIndex];
    tableHeadingArray.push(tableHeadingElem);
  }

  // Creating the <thead> element
  const tableHeader = document.createElement("thead");
  for (const tableHeading of tableHeadingArray) {
    tableHeader.append(tableHeading);
  }

  return tableHeader;
}

function createTableBody(numRows, daysArray, date) {
  const tableRowArray = [];

  for (let week = 0; week < numRows; ++week) {
    const tableRow = document.createElement("tr");

    for (let day = 0; day < daysArray.length; ++day) {
      const tableData = document.createElement("td");
      
      tableRow.append(tableData);
      tableRowArray.push(tableRow);
    }
  }

  const tableBody = document.createElement("tbody");
  for (const row of tableRowArray) {
    tableBody.append(row);
  }

  return tableBody;
}

const heading = document.createElement("h2");
heading.textContent = "September 2012 Calendar";
document.body.prepend(heading);

const calendar = document.getElementById("calendar");
createCalendar(calendar, 2012, 9);
