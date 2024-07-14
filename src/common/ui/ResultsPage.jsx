import React from "react";
import RecentPieResults from "../components/RecentPieResults";
import CopyRight from "../components/CopyRight";
import StatsItem from "../components/StatsItem";
import TestsDetails from "../components/ResultsPage/TestsDetails";
import getCalculation from "../../util/perfomanceCalculator";
import { useUserContext } from "../../util/contexts";

export default function ResultsPage() {
  const user = useUserContext();
  const [speed, accuracy, passPercent, questionAttempt] = getCalculation(
    user.test
  );
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 sm:px-8 md:px-12 font-['Poppins']">
      <span className="text-[#040269] font-bold text-3xl md:text-5xl">
        Results
      </span>

      <br />
      <br />
      {/*toChange*/}
      <RecentPieResults />
      <br />
      <br />
      <div className="rounded-xl bg-[#E6E6E638] w-full p-4 sm:p-6">
        <div className="text-xl md:text-2xl font-bold">
          <span>Overall Performance</span>

          <div className="bg-white rounded-xl w-full text-lg sm:text-xl font-light p-3 grid grid-cols-1 my-3 gap-5 text-center">
            {user.test.length < 1 ? (
              <div className="text-lg mt-7">
                You have not attempted any test yet
              </div>
            ) : (
              [
                <StatsItem
                  key="speed"
                  text="Avg Speed"
                  value={`${speed} Qn/Min`}
                />,
                <StatsItem
                  key="accuracy"
                  text="Accuracy"
                  value={`${accuracy}%`}
                />,
                <StatsItem
                  key="passPercent"
                  text="Pass Percentage"
                  value={`${passPercent}%`}
                />,
                <StatsItem
                  key="questionAttempt"
                  text="Questions Attempted"
                  value={`${questionAttempt} Qns`}
                />,
              ]
            )}
          </div>
          <span>To Improve</span>
          <div className="bg-white rounded-xl w-full text-lg sm:text-xl font-light p-3 grid grid-cols-1 gap-5 h-fit text-center">
            {user.test.length < 1 ? (
              <div className="text-lg mt-7">
                You have not attempted any test yet
              </div>
            ) : (
              [
                speed >= 0.8 &&
                  accuracy >= 80 &&
                  passPercent >= 80 &&
                  "You are on the right track",
                speed < 0.8 && (
                  <StatsItem
                    key="improveSpeed"
                    text="Avg Speed"
                    value="0.8 Qn/Min"
                  />
                ),
                accuracy < 80 && (
                  <StatsItem
                    key="improveAccuracy"
                    text="Accuracy"
                    value="80%"
                  />
                ),
                passPercent < 80 && (
                  <StatsItem
                    key="improvePassPercent"
                    text="Pass Percentage"
                    value="80%"
                  />
                ),
              ]
            )}
          </div>
        </div>
      </div>
      <br />
      <TestsDetails>{user.test}</TestsDetails>
      <CopyRight />
    </div>
  );
}
