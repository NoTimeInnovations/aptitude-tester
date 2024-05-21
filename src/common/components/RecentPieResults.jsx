import { useUserContext } from "../../app/dashboard/page";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";
function listItems(text, color) {
  return (
    <li>
      <div className="flex flex-row items-center">
        <div
          className={
            " h-4 w-4 border border-black " +
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

const sizing = {
  margin: { right: 5 },
  legend: { hidden: true },
};

export default function RecentPieResults() {
  let user = useUserContext();
  let recentTest = user.test.length != 0 ? user.test[0] : null;
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className=" rounded-xl bg-[#E6E6E638] w-full md:w-full md:p-6 flex justify-start">
          <div className="text-1xl md:text-4xl font-bold mt-4 ml-3 w-full">
            Recent Test Result
            <br />
            {recentTest == null ? (
              <div className="text-lg pl-5">
                You have not attempted any tests yet
              </div>
            ) : (
              <div className="px-5 grid md:grid-cols-2 items-center w=">
                <div className="w-full flex justify-center md: flex justify-start p-4">
                  <PieChart
                    className="w-10 h-10 md:w-screen md:h-screen"
                    colors={["#FF0000", "#0075a4", "#00af82"]}
                    series={[
                      {
                        data: [
                          { id: 1, value: recentTest.wrong, label: "wrong" },
                          {
                            id: 2,
                            value: 30 - (recentTest.correct + recentTest.wrong),
                            label: "unaswered",
                          },
                          {
                            id: 0,
                            value: recentTest.correct,
                            label: "correct",
                          },
                        ],
                        highlightScope: {
                          faded: "global",
                          highlighted: "item",
                        },
                        faded: {
                          innerRadius: 30,
                          additionalRadius: -30,
                          color: "gray",
                        },
                      },
                    ]}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fill: "white",
                        fontSize: 14,
                      },
                    }}
                    width={window.innerWidth < 720 ? 120 : 200}
                    height={window.innerWidth < 720 ? 120 : 200}
                    {...sizing}
                  />
                </div>
                <div className="bg-white text-sm md:text-lg font-[600] h-full py-6 px-4 w-full md:w-3/4 md:justify-self-end rounded-xl">
                  <ul className="flex flex-col  justify-around h-full">
                    {listItems("Correct", 0)}
                    {listItems("Wrong", 1)}
                    {listItems("Unanswered", 2)}
                  </ul>
                </div>

                <div className="flex flex-col md:flex-row mt-5 gap-y-3 gap-x-20 ">
                  <div className="flex flex-col justify-center">
                    <span className="text-[#040269] text-.5xl md:text-2xl font-bond">
                      30
                    </span>

                    <div className="text-black font-bond text-.5xl md:text-xl">
                      Total Questions
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#040269] text-.5xl md:text-2xl font-bond">
                      {recentTest.duration}
                    </span>
                    <span className="text-black text-.5xl md:text-2xl font-bond">
                      Time Taken
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
