import React from "react";
import Image from "next/image";
import { useUserContext } from "../../app/dashboard/page";

function listItems(text) {
  return (
    <li className="flex flex-row items-center opacity-50 font-['Be Vietnam Pro'] m-5 mb-10">
      &nbsp; {text}
    </li>
  );
}

export default function ProfilePage() {
  const user = useUserContext();
  return (
    <>
      <div className="flex-1 bg-white text-black pt-24 pb-10 px-6 font-['Poppins'] min-h-screen">
        <div className="text-3xl text-[rgba(4,2,105,100)] font-bold ml-4">
          Profile
        </div>
        <div className="text-[24px] border-[1px] font-semibold rounded-xl mt-16 relative mb-36 md:w-3/4 ">
          <div className="mt-10 text-center md:text-start md:ml-8 ">
            Personal Details
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center mr-3 md:gap-16">
            <div className="relative mb-10 md:mb-0 md:mr-10 items-center">
              <div className="h-48 w-48">
                <Image
                  src="/media/img/testAccount.svg"
                  width={180}
                  height={180}
                  className="rounded-full"
                  alt="Profile Picture"
                />
              </div>
              <div className="mt-4 ml-12">
                <button className="flex flex-row items-center text-[12px]">
                  Change Profile
                  <Image
                    src="/media/img/edit.svg"
                    width={15}
                    height={15}
                    className="ml-2"
                    alt="Edit Icon"
                  />
                </button>
              </div>
            </div>
            <div className="text-lg font-[700] py-6 px-4 w-fit md:w-96">
              <ul className="flex flex-col justify-around h-full mt-2">
                {listItems(`Name: ${user.firstname} ${user.lastname}`)}
                {listItems("Email: " + user.email)}
                {listItems("Phone: " + user.mobile)}
                {listItems(`Subscription Plan: ${user.plan} Rs`)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
