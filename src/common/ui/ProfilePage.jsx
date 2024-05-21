import React from "react";
import Image from "next/image";
import { useUserContext } from "../../app/dashboard/page";

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
  const user = useUserContext();
  return (
    <>
      <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 font-['Poppins'] min-h-screen">
        <div className="text-[36px] text-[rgba(4,2,105,100)] font-bold ml-4">
          Profile
        </div>
        <div className="text-[24px] border-[1px] font-semibold rounded-xl mt-16 relative mb-36 ">
          <div className="mt-10 ml-10">Personal Details</div>
          <div className="flex flex-col md:flex-row justify-between mr-3">
            <div className="bg-white text-lg font-[700] py-6 px-4 md:w-96">
              <ul className="flex flex-col justify-around h-full mt-2">
                {listItems(`Name: ${user.firstname} ${user.lastname}`)}

                {listItems("Email: " + user.email)}

                {listItems("Phone: " + user.mobile)}

                {listItems(`Subscription Plan: ${user.plan} Rs`)}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 h-48 w-48 top-[30%] md:top-[50%] md:right-[5%]">
                <Image
                  src="/media/img/testAccount.svg"
                  width={120}
                  height={120}
                  className="mr-12 mb-7"
                />
              </div>
              <div className="absolute inset-y-0 right-0 h-12 w-24 top-[50%] md:top-[70%] md:right-[5%]">
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
