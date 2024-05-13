import React from "react";
import CopyRight from "../components/CopyRight";
import ModuleList from "../components/TrainingPage/ModuleList";

export default function TrainingPage() {
  return (
    <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 min-h-screen">
      <div className="flex flex-row justify-between">
        <span className="text-[#040269] font-bold  text-5xl ">Your Course</span>
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
      {/*toChanage*/}
      <br />
      <br />
      <div className="bg-[#040269E5] py-5 px-5 rounded-lg grid gapx-12 gap-5 grid-cols-2 w-4/12 text-white">
        <div className="text-left">
          Your Progress <span>0</span>/100
        </div>
        <div className="text-right">
          <span>0</span>% Complete
        </div>
        <div className="col-span-2 h-2 bg-white w-full" />
      </div>
      <br />
      <br />
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
      </ModuleList>
      <CopyRight />
    </div>
  );
}
