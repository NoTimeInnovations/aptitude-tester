import Image from "next/image";
import React from "react";
import CopyRight from "./CopyRight";

export default function NonLoginFooter() {
  return (
    <div className="bg-[rgba(185,203,239,255)] w-screen text-black py-14 px-[10%] font-['Poppins']">
      <span className="font-bold text-[12px] md:text-3xl">EasyLearn</span>
      <div className="flex flex-row justify-between">
        <div>
          <br />
          <div className="flex flex-row">
            <Image
              src="/media/img/IndexPage/gmail.png"
              width={32}
              height={10}
            />
            &nbsp;:&nbsp;{" "}
            <a className="text-[12px] md:text-[20px]">easylearn@gmail.com</a>
          </div>
          <br />
          <div className="flex flex-row h-6 w-6 md:h-12 md:w-12">
            <Image
              src="/media/img/IndexPage/phone.png"
              width={32}
              height={10}
            />
            <div className="flex flex-col justify-center text-[12px] md:text-[20px]">
              <div className="">&nbsp;:&nbsp;9852641730</div>
            </div>
          </div>
          <br />
          <div className="flex flex-row">
            <Image
              src="/media/img/IndexPage/location.png"
              width={32}
              height={10}
            />
            <div className="flex flex-col justify-center text-[12px] md:text-[20px] ">
              <div className="">
                &nbsp;:&nbsp; <a>Ernakulam, Kerala</a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="font-bold w-32">
            Social Profile
            <div className="flex flex-row gap-2">
              <Image
                src="/media/img/IndexPage/facebook.svg"
                width={32}
                height={10}
              />
              <Image
                src="/media/img/IndexPage/linkedIn.svg"
                width={32}
                height={10}
              />
              <Image
                src="/media/img/IndexPage/instagram.svg"
                width={32}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}
