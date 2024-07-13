import React, { useState } from "react";
import { Datepicker } from "flowbite-react";
import { useSetUserContext, useUserContext } from "../../../app/dashboard/page";

export default function TestScheduler({ questionSet, show, setShow }) {
  const [user, setUser] = [useUserContext(), useSetUserContext()];
  const [topic, setTopic] = useState(undefined);
  const handleTopicChange = (e) => {
    e.preventDefault();
    setTopic(e.target.value);
  };
  const [test, setTest] = useState(undefined);
  const handleTestChange = (e) => {
    e.preventDefault();
    setTest(e.target.value);
  };

  const [date, setDate] = useState(undefined);
  const handleDatePickerChange = (date) => {
    setDate(new Date(date));
  };

  const [errors, setErrors] = useState("");

  const maxDate = getTwoMonthsInFuture();
  return (
    show && (
      <div className=" backdrop-blur-md p-5 h-full flex justify-center flex-col text-black fixed z-50">
        <div className="w-fit border rounded-lg h-fit p-4 bg-white">
          <div className="font-['Poppins'] font-bold text-black text-4xl flex justify-between">
            <div>Edit Schedule</div>
            <div className="text-xl text-red-600">
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
          <div className=" mt-3 w-3/4">
            This page allows you to conveniently schedule your tests for any
            preferred date and time. Simply set your desired test schedule, and
            you will receive a notification via Gmail, ensuring you never miss
            your appointment
          </div>
          <div className="text-2xl font-['Poppins'] font-semibold mt-4">
            Select Your Test
          </div>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              let proceed = true;
              setErrors("");
              let err = "Chose a";
              if (!topic) {
                err = `${err} topic,`;
                proceed = false;
              }
              if (!test) {
                proceed = false;
                err = `${err} test,`;
              }
              if (!date) {
                proceed = false;
                err = `${err} date,`;
              }
              if (!proceed) {
                err = err.substring(0, err.length - 1) + ".";
                setErrors(err);
                return;
              }
              let res;
              try {
                let [hours, minutes] = event.target.timePicker.value
                  .split(":")
                  .map(Number);

                date.setHours(hours);
                date.setMinutes(minutes);
                date.setSeconds(0);
                const fields = {
                  topic,
                  id: Number(test),
                  date,
                };
                res = await (
                  await fetch("/api/updateSchedule", {
                    method: "POST",
                    body: JSON.stringify({
                      token: localStorage.getItem("token"),
                      fields,
                    }),
                  })
                ).json();
                console.log({ ...user, scheduled: fields });
                setUser({ ...user, scheduled: fields });
              } catch (error) {
                console.log(error);
                if (error.message.includes("end", "json", "unexpected")) {
                  setErrors(
                    "Connection issue, something preventing us from connecting"
                  );
                  return;
                }
                setErrors("Something went wrong with connection");
              }
              if (res.error) {
                return setErrors(res.error);
              }
            }}
          >
            <div className="grid grid-cols-2 gap-3">
              <label
                for="small"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subjects
              </label>
              <label
                for="small"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Date
              </label>
              <select
                id="small"
                onInput={handleTopicChange}
                class="block w-full max-w-sm p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 fll:bg-gray-700 fll:border-gray-600 fll:placeholder-gray-400 fll:text-white fll:focus:ring-blue-500 fll:focus:border-blue-500"
              >
                {!topic && <option selected>Choose The Subject</option>}
                <option value="Reasoning">Reasoning</option>
                <option value="English">English</option>
                <option value="Numerical">Numericals</option>
              </select>
              <Datepicker
                name="datePicker"
                className="max-w-sm mb-6"
                onSelectedDateChanged={handleDatePickerChange}
                minDate={new Date()}
                maxDate={maxDate}
              />
              <label
                for="default"
                class="block mb-2 text-sm font-medium text-gray-900 fll:text-white"
              >
                Test
              </label>
              <label
                for="default"
                class="block mb-2 text-sm font-medium text-gray-900 fll:text-white"
              >
                Time
              </label>
              <select
                id="default"
                onInput={handleTestChange}
                class="bg-gray-50 border max-w-sm border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 fll:bg-gray-700 fll:border-gray-600 fll:placeholder-gray-400 fll:text-white fll:focus:ring-blue-500 fll:focus:border-blue-500"
              >
                {!test && <option selected>Choose Test</option>}
                {topic &&
                  questionSet &&
                  questionSet[topic.toLowerCase()].map((item, index) => {
                    return <option value={index}>Test {index + 1}</option>;
                  })}
              </select>
              <div class="max-w-sm">
                <input
                  name="timePicker"
                  type="time"
                  id="time"
                  class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  min="00:00"
                  max="23:59"
                  required
                />
              </div>
            </div>
            {errors && (
              <div className="text-sm ml-4 text-red-300 mt-4">*{errors}</div>
            )}
            <div className="flex ">
              <div>
                <button
                  type="submit"
                  class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                >
                  <svg
                    class="w4 h-4 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Schedule Test
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

// Function to get a date object for two months in the future
function getTwoMonthsInFuture() {
  let futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 2);
  return futureDate;
}
