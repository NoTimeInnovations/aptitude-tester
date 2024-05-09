import Image from "next/image";
import React from "react";

export default function NonLoginFooter() {
  return (
    <div className="bg-[rgba(185,203,239,255)] w-screen text-black py-20 px-[10%] font-['Poppins']">
      <span className="font-bold text-3xl">EasyLearn</span>
      <div className="flex flex-row justify-between">
        <div>
          <br />
          <div className="flex flex-row">
            <Image
              src="/media/img/IndexPage/gmail.png"
              width={32}
              height={10}
            />
            &nbsp;:&nbsp; <a>easylearn@gmail.com</a>
          </div>
          <br />
          <div className="flex flex-row">
            <Image
              src="/media/img/IndexPage/phone.png"
              width={32}
              height={10}
            />
            <div className="flex flex-col justify-center ">
              <div>
                &nbsp;:&nbsp; <a>9852641730</a>
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-row">
            <Image
              src="/media/img/IndexPage/location.png"
              width={32}
              height={10}
            />
            <div className="flex flex-col justify-center ">
              <div>
                &nbsp;:&nbsp; <a>Ernakulam, Kerala</a>
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold">
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
  );
}
