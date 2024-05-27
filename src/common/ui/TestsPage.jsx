"use client";
import React, { useState, useEffect } from "react";
import TestList from "../components/TestsPage/TestList";
import CopyRight from "../components/CopyRight";
import Image from "next/image";
import ElevatedShadowDiv from "../components/ElevatedShadowDiv";
import Datepicker from "flowbite-datepicker/Datepicker";
import {
  useQuestionSetContext,
  useUserContext,
} from "../../app/dashboard/page";
import timer from "../../util/timer";

export default function TestsPage() {
  const [user, setUser] = useState(useUserContext());
  const [testDetails, setTestDetails] = useState(
    user.test.reduce((acc, obj) => {
      return {
        ...acc,
        [obj.topic]: [
          ...(acc[obj.topic] || []),
          { id: obj["id"], index: obj["index"] },
        ],
      };
    }, {})
  );

  useEffect(() => {
    setQuestionSet(
      user.test.reduce((acc, obj) => {
        return {
          ...acc,
          [obj.topic]: [
            ...(acc[obj.topic] || []),
            { id: obj["id"], index: obj["index"] },
          ],
        };
      }, {})
    );
  }, [user]);

  const [setDetails, setSetDetails] = useState(useQuestionSetContext());

  const [questionSet, setQuestionSet] = useState(
    setDetails.reduce((acc, obj) => {
      return { ...acc, [obj.topic]: [...(acc[obj.topic] || []), obj["id"]] };
    }, {})
  );

  useEffect(() => {
    setQuestionSet(
      setDetails.reduce((acc, obj) => {
        return { ...acc, [obj.topic]: [...(acc[obj.topic] || []), obj["id"]] };
      }, {})
    );
  }, [setDetails]);

  const scheduledTest = user.scheduled ? user.scheduled : null;
  const scheduledDate =
    scheduledTest != null ? new Date(scheduledTest.date) : null;
  const [seconds, minutes, hours, days] =
    scheduledDate != null ? timer(scheduledDate) : [null, null, null, null];

  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 sm:px-8 md:px-12 min-h-screen font-['Poppins']">
      <div className="flex flex-col md:flex-row justify-between">
        <span className="text-[#040269] font-bold text-3xl sm:text-4xl md:text-5xl">
          Mock Tests
        </span>
      </div>
      <br />
      <br />
      <div
        className="bg-white py-5 rounded-lg px-4 sm:px-6 md:px-[3.5rem]"
        style={{ filter: "drop-shadow(0 0.5px 0.5px rgb(0 0 0 / 0.25))" }}
      >
        <div className="flex flex-col md:flex-row justify-between font-semibold text-xl md:text-2xl">
          Pre Scheduled Test
          <div className="font-semibold text-lg md:text-xl flex flex-row items-center mt-2 md:mt-0">
            Edit Schedule
            <Image
              className="ml-1"
              src="/media/img/TestsPage/editPen.svg"
              width={22}
              height={10}
            />
          </div>
        </div>
        {/*toChange*/}
        {scheduledTest == null ? (
          <div className="mt-7 text-lg">No Test Scheduled Yet</div>
        ) : (
          <div className="flex flex-col md:flex-row mt-8 justify-between">
            <div>
              <div className="flex flex-row gap-2 items-center place-items-center text-xl md:text-2xl font-medium">
                <ElevatedShadowDiv large>{seconds}</ElevatedShadowDiv>:
                <ElevatedShadowDiv large>{minutes}</ElevatedShadowDiv>:
                <ElevatedShadowDiv large>{hours}</ElevatedShadowDiv>:
                <ElevatedShadowDiv large>{days}</ElevatedShadowDiv>
              </div>
              <div className="grid grid-cols-4 gap-4 md:gap-[1.7rem] place-items-center">
                <span>Days</span>
                <span>Hr</span>
                <span>Min</span>
                <span>Sec</span>
              </div>
            </div>
            <div className="grid gap-6 md:gap-8 gap-y-8 md:gap-y-12 grid-cols-1 md:grid-cols-2 mt-8 md:mt-0">
              <div>
                <div className="text-[#757575]">Title</div>
                {scheduledTest.topic}&nbsp;Test
              </div>
              <div>
                <div className="text-[#757575]">Scheduled On</div>
                {`${scheduledDate.getDate().toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}/${(scheduledDate.getMonth() + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}/${scheduledDate.getFullYear().toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}`}
              </div>
              <div>
                <div className="text-[#757575]">Duration</div>1 Hr, 30 min
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <div className="px-4 md:px-5 rounded-xl py-10 md:py-20 bg-[#E6E6E638]">
        {Object.keys(questionSet).map((item) => [
          <TestList>
            {{
              module: item,
              testDetails: testDetails[item],
              tests: questionSet[item],
            }}
          </TestList>,
          <br />,
        ])}
        <div className="w-full h-fit p-4 bg-white">
          <div className="font-['Poppins'] font-bold text-black text-4xl flex justify-between">
            <div>Edit Schedule</div>
            <div className="text-xl text-red-600">
              <button>Close</button>
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
          <div className="mt-3">
            <form class="max-w-sm">
              <label
                for="small"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subjects
              </label>
              <select
                id="small"
                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose The Subject</option>
                <option value="RE">Reasoning</option>
                <option value="EN">English</option>
                <option value="NM">Numericals</option>
              </select>
              <label
                for="default"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Test
              </label>
              <select
                id="default"
                class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose Test</option>
                <option value="1">Test 1</option>
                <option value="2">Test 2</option>
                <option value="3">Test 3</option>
                <option value="4">Test 4</option>
              </select>
            </form>
          </div>
          <div className="flex ">
            <div>
              <button
                type="button"
                data-modal-target="timepicker-modal"
                data-modal-toggle="timepicker-modal"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
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
                Schedule appointment
              </button>

              <div
                id="timepicker-modal"
                tabindex="-1"
                aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div class="relative p-4 w-full max-w-[23rem] max-h-full">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                    <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Schedule an appointment
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="timepicker-modal"
                      >
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div class="p-4 pt-0">
                      <div
                        inline-datepicker
                        datepicker-autoselect-today
                        class="mx-auto sm:mx-0 flex justify-center my-5 [&>div>div]:shadow-none [&>div>div]:bg-gray-50 [&_div>button]:bg-gray-50"
                      ></div>
                      <label class="text-sm font-medium text-gray-900 dark:text-white mb-2 block"></label>
                      <ul
                        id="timetable"
                        class="grid w-full grid-cols-3 gap-2 mb-5"
                      >
                        <li>
                          <input
                            type="radio"
                            id="10-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="10-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            10:00 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="10-30-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="10-30-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            10:30 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="11-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="11-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            11:00 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="11-30-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="11-30-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            11:30 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="12-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                            checked
                          />
                          <label
                            for="12-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            12:00 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="12-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="12-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            12:30 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="1-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="1-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            01:00 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="1-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="1-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            01:30 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="2-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="2-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            02:00 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="2-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="2-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            02:30 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="3-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="3-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            03:00 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="3-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="3-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            03:30 PM
                          </label>
                        </li>
                      </ul>
                      <div class="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          data-modal-hide="timepicker-modal"
                          class="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CopyRight />
      </div>
    </div>
  );
}
