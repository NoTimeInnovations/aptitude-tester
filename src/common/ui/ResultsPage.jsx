import React from "react";
import RecentPieResults from "../components/RecentPieResults";
import CopyRight from "../components/CopyRight";
import StatsItem from "../components/StatsItem";

export default function ResultsPage() {
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 font-['Poppins']">
      <span className="text-[#040269] font-bold  text-4xl ">Results</span>

      <br />
      <br />
      {/*toChanage*/}
      <RecentPieResults />
      <br />
      <br />
      <div className=" rounded-xl bg-[#E6E6E638] w-full p-6">
        <div className="text-2xl font-bold grid gap-5  grid-cols-2 ">
          Overall Perfomance<span>To Improve</span>
          <div className="bg-white rounded-xl w-full text-xl font-light rounded-xlg p-3 grid grid-cols-1 gap-5">
            <StatsItem text="Avg Speed" value="80%" />
            <StatsItem text="Accuracay" value="80%" />
            <StatsItem text="Pass Percentage" value="80%" />
            <StatsItem text="Questions Attempted" value="80%" />
          </div>
          <div className="bg-white rounded-xl w-full text-xl font-light rounded-xlg p-3 grid grid-cols-1 gap-5">
            <StatsItem text="Avg Speed" value="80%" />
            <StatsItem text="Accuracay" value="80%" />
            <StatsItem text="Pass Percentage" value="80%" />
            <StatsItem text="Questions Attempted" value="80%" />
          </div>
        </div>
      </div>

      <CopyRight />
    </div>
  );
}
