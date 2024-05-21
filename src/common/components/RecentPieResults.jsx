import React from "react";
import { useUserContext } from "../../app/dashboard/page";
import { PieChart } from "@mui/x-charts/PieChart";

function listItems(text, color) {
  return (
    <li>
      <div className="flex flex-row items-center">
        <div
          className={
            "h-4 w-4 border border-black " +
            (color == 0
              ? "bg-[#00af82]"
              : color == 1
              ? "bg-[#FF0000]"
              : "bg-[#0075a4]")
          }
        />
        &nbsp;
        {text}
      </div>
    </li>
  );
}

export default function RecentPieResults() {
  let user = useUserContext();
  let recentTest = user.test.length != 0 ? user.test[0] : null;
  return (
    <div className=" rounded-xl bg-[#E6E6E638] w-full p-6">
      <div className="text-2xl font-bold">
        Recent Test Result
        <br />
        {recentTest == null ? (
          <div className="text-lg pl-5">
            You have not attempted any tests yet
          </div>
        ) : (
          <div className="px-5 grid md:grid-cols-2 items-center">
            <PieChart
              colors={["#FF0000", "#0075a4", "#00af82"]}
              series={[
                {
                  data: [
                    { id: 1, value: recentTest.wrong },
                    {
                      id: 2,
                      value: 30 - (recentTest.correct + recentTest.wrong),
                    },
                    { id: 0, value: recentTest.correct },
                  ],
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                },
              ]}
              width={300}
              height={300}
            />

            <div className="bg-white text-lg font-[700] h-full py-6 px-4 w-fit justify-self-end">
              <ul className="flex flex-col justify-around h-full">
                {listItems("Correct", 0)}
                {listItems("Wrong", 1)}
                {listItems("Unanswered", 2)}
              </ul>
            </div>
            <div className="grid grid-cols-2 mt-5 gap-y-3 gap-x-10">
              <span className="text-[#040269] text-2xl font-bond">30</span>
              <span className="text-[#040269] text-2xl font-bond">
                {recentTest.duration}
              </span>

              <span className="text-black text-lg font-bond">
                Total Questions
              </span>
              <span className="text-black text-lg font-bond">Time Taken</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
