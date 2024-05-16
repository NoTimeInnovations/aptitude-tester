import React from "react";
import Image from "next/image";
function listItems(text) {
  return (
    <li>
      <div className="flex flex-row items-center opacity-50 font-['Be Vietnam Pro'] m-5 mb-10">
        &nbsp;
        {text}
      </div>
    </li>
  );
}

export default function ProfilePage() {
  return (
    <>
      <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 font-['Poppins'] h-screen">
        <div className="text-[36px] text-[rgba(4,2,105,100)] font-bold ml-4">
          Profile
        </div>
        <div className="text-[24px] border-[1px] font-semibold rounded-xl mt-16 relative mb-36 ">
          <div className="mt-10 ml-10">Personal Details</div>
          <div className="flex flex-row justify-between mr-3">
            <div className="bg-white text-lg font-[700] py-6 px-4 w-fit">
              <ul className="flex flex-col justify-around h-full mt-2 w-fit">
                {listItems("Name:Goutham Rajesh")}

                {listItems("Email:gouthamrajeshr10@gmail.com")}

                {listItems("Phone:7012093754")}

                {listItems("Subscription Plan:100Rs")}
              </ul>
            </div>
            <div className>
              <div className="flex flex-row justify-end absolute h-100 w-100 top-[30%] start-[80%]">
                <Image
                  src="/media/img/testAccount.svg"
                  width={120}
                  height={120}
                  className="mr-12 mb-7"
                />
              </div>
              <div className="flex flex-row justify-end absolute h-40 w-50 top-[45%] start-[81%] ">
                <button className="text-[12px]">
                  <div className="flex flex-row">
                    Change Profile
                    <Image
                      src="/media/img/edit.svg"
                      width={15}
                      height={15}
                      className="ml-2"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
