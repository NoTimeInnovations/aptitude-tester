import React from "react";
import CopyRight from "../components/CopyRight";
import ModuleList from "../components/TrainingPage/ModuleList";
import { useClassesContext, useUserContext } from "../../app/dashboard/page";

export default function TrainingPage() {
  const classes = useClassesContext();
  const user = useUserContext();
  // use Sate
  var finished = 0;
  for (var i in user.classes) {
    finished += user.classes[i].length;
  }
  var total = 0;
  for (var i in classes) {
    if (i == "_id") {
      continue;
    }
    total += classes[i].length;
  }
  const percent =
    Math.round(((finished / total) * 100 + Number.EPSILON) * 100) / 100;
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 min-h-screen font-['Poppins']">
      <div className="flex flex-row justify-between">
        <span className="text-[#040269] font-bold  text-3xl md:text-5xl ">
          Your Course
        </span>
      </div>
      <br />
      <br />
      <span className="font-bold" id="name">
        How to Succeed in Aptitude Test:
      </span>
      This Course Line provides Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
      <br />
      <br />
      <br />
      <br />
      <div className="bg-[#040269E5] py-5 px-5 rounded-lg grid gapx-12 gap-5 grid-cols-2 w-fit md:w-4/12 text-white">
        <div className="text-left">
          Your Progress <span>{finished}</span>/{total}
        </div>
        <div className="text-right">
          <span>{percent}</span>% Complete
        </div>
        <div className="col-span-2 h-2 bg-white w-full">
          <div
            style={{ width: `${percent}%` }}
            className="h-full bg-yellow-300"
          />
        </div>
      </div>
      <br />
      <br />
      {classes.error ? (
        <div>{classes.error}</div>
      ) : (
        [
          Object.keys(classes)
            .slice(1, 4)
            .map((item) => [
              <ModuleList>
                {{
                  module: item,
                  topics: classes[item],
                  finished: user.classes[item],
                }}
              </ModuleList>,
              <br />,
            ]),
        ]
      )}
      {/* 
      <ModuleList>
        {{
          module: "Reasoning",
          topics: [
            {
              heading: "Python",
              link: "",
              review: "",
            },
            {
              heading: "Python",
              link: "",
              review: "",
            },
          ],
        }}
      </ModuleList> */}
      <CopyRight />
    </div>
  );
}
