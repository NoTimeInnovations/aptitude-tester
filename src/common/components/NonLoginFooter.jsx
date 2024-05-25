"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CopyRight from "./CopyRight";
import { md, setMdWindow } from "../../util/common";

export default function NonLoginFooter() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div className="bg-[rgba(185,203,239,255)] w-screen text-black py-14 px-[10%] font-['Poppins']">
        <span className="font-bold text-[12px] md:text-3xl">EasyLearn</span>
        <div className="flex flex-row justify-between">
          <div>
            <br />
            <div className="flex flex-row w-">
              <Image
                src="/media/img/IndexPage/gmail.png"
                width={window.length < 720 ? 40 : 40}
                height={window.length < 720 ? 40 : 40}
              />
              <div className="text-xs md:text-xl">
                &nbsp;:&nbsp;easylearn@gmail.com
              </div>
            </div>
            <br />
            <div className="flex flex-row h-6 w-fit md:h-12 md:w-12">
              <Image
                src="/media/img/IndexPage/phone.png"
                width={window.length < 720 ? 30 : 40}
                height={window.length < 720 ? 30 : 40}
              />
              <div className="flex flex-col justify-center text-xs md:text-xl">
                <div className="">&nbsp;:&nbsp;9852641730</div>
              </div>
            </div>
            <br />
            <div className="flex flex-row w-fit">
              <Image
                src="/media/img/IndexPage/location.png"
                width={window.length < 720 ? 30 : 40}
                height={window.length < 720 ? 30 : 40}
              />
              <div className="flex flex-col justify-center text-xs md:text-xl w-fit">
                <div className="">
                  &nbsp;:&nbsp; <span>Ernakulam, Kerala</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="font-bold w-fit ml-8">
              Social Profile
              <div className="flex flex-row gap-2">
                <Image
                  src="/media/img/IndexPage/facebook.svg"
                  width={md(30, 40)}
                  height={md(30, 40)}
                />
                <Image
                  src="/media/img/IndexPage/linkedIn.svg"
                  width={md(30, 40)}
                  height={md(30, 40)}
                />
                <Image
                  src="/media/img/IndexPage/instagram.svg"
                  width={md(30, 40)}
                  height={md(30, 40)}
                />
              </div>
            </div>
          </div>
        </div>
        <CopyRight />
      </div>
    )
  );
}
