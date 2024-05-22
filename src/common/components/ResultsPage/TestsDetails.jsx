import React, { useState } from "react";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var tempDate = new Date();
function dateAssign(date) {
  tempDate = new Date(date);
}
function getTimeRange(duration) {
  var hours = tempDate.getHours();
  var minutes = tempDate.getMinutes();
  var meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Construct the time string
  const ret = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${meridiem}`;
  tempDate.setMinutes(tempDate.getMinutes() - duration);

  hours = tempDate.getHours();
  minutes = tempDate.getMinutes();

  meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  return (
    `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${meridiem}` + "-" + ret
  );
}

export default function TestsDetails({ children }) {
  const tests = children;
  var [isOpen, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#E6E6E638] w-full p-4 sm:p-6">
      <div className="text-xl sm:text-2xl h-auto font-base text-[#757575]">
        Test Details
        <div className="px-4 sm:px-8 py-4 sm:py-6 mt-3 mr-2 bg-white rounded-xl">
          <div className="grid grid-cols-5 sm:grid-cols-11 gap-y-6 place-items-center text-base font-normal text-black">
            <div className="place-self-start text-[#757575] text-sm font-base pb-12">
              Test
            </div>
            <div className="col-start-4 sm:col-start-6 text-[#757575] text-sm font-base pb-12">
              Marks
            </div>
            <div className="col-span-2 text-center text-[#757575] text-sm font-base pb-12">
              Questions Attempted
            </div>
            <div className="text-[#757575] text-sm font-base pb-12">
              Correct
            </div>
            <div className="text-[#757575] text-sm font-base pb-12">Wrong</div>
            <div className="text-[#757575] text-sm font-base pb-12">Result</div>
            {tests.slice(0, 4).map((test) => [
              <div className="place-self-start" key={test.id}>
                {dateAssign(test.date)}
                {test.topic}, Test - {test.id + 1}
                <div className="mt-2 flex min-w-max flex-row gap-2 justify-between text-[#757575] text-sm">
                  {`${daysOfWeek[tempDate.getDay()]}, ${tempDate.getDate()} ${
                    monthsOfYear[tempDate.getMonth()]
                  } ${tempDate.getFullYear()}`}
                  <span>{getTimeRange(test.duration)}</span>
                </div>
              </div>,
              <div
                className="col-start-4 sm:col-start-6"
                key={test.id + "marks"}
              >
                {test.correct - test.wrong}
              </div>,
              <div className="col-span-2" key={test.id + "attempted"}>
                {test.correct + test.wrong}
              </div>,
              <div key={test.id + "correct"}>{test.correct}</div>,
              <div key={test.id + "wrong"}>{test.wrong}</div>,
              <button
                key={test.id + "result"}
                className={`py-1 px-3 h-fit min-w-[70%] border-[1px] text-sm rounded-lg ${
                  test.pass
                    ? `text-[#2FD74A] bg-[#2FD74A4D] border-[#2FD74A] `
                    : `text-[#F14747] bg-[#F147474D] border-[#F14747] `
                }`}
              >
                {test.pass ? "Pass" : "Fail"}
              </button>,
              <div
                className="bg-gray-100 col-span-5 sm:col-span-11 w-full h-[1px]"
                key={test.id + "divider"}
              />,
            ])}
            {isOpen &&
              tests.slice(4, tests.length).map((test) => [
                <div className="place-self-start" key={test.id}>
                  {dateAssign(test.date)}
                  {test.topic}-{test.id + 1}
                  <br />
                  <div className="flex min-w-max flex-row gap-2 justify-between text-[#757575] text-sm">
                    {`${daysOfWeek[tempDate.getDay()]}, ${tempDate.getDate()} ${
                      monthsOfYear[tempDate.getMonth()]
                    } ${tempDate.getFullYear()}`}
                    <span>{getTimeRange(test.duration)}</span>
                  </div>
                </div>,
                <div
                  className="col-start-4 sm:col-start-6"
                  key={test.id + "marks"}
                >
                  {test.correct - test.wrong}
                </div>,
                <div className="col-span-2" key={test.id + "attempted"}>
                  {test.correct + test.wrong}
                </div>,
                <div key={test.id + "correct"}>{test.correct}</div>,
                <div key={test.id + "wrong"}>{test.wrong}</div>,
                <button
                  key={test.id + "result"}
                  className={`py-1 px-3 h-fit min-w-[70%] border-[1px] text-sm rounded-lg ${
                    test.pass
                      ? `text-[#2FD74A] bg-[#2FD74A4D] border-[#2FD74A] `
                      : `text-[#F14747] bg-[#F147474D] border-[#F14747] `
                  }`}
                >
                  {test.pass ? "Pass" : "Fail"}
                </button>,
                <div
                  className="bg-gray-100 col-span-5 sm:col-span-11 w-full h-[1px]"
                  key={test.id + "divider"}
                />,
              ])}
          </div>
          <div className="flex flex-row mt-2 w-full justify-end">
            <button
              onClick={() => {
                setOpen(!isOpen);
              }}
              className="text-sm py-3 px-3 rounded-lg bg-[#F7F7F8] font-light"
            >
              View {isOpen ? "Less" : "More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
