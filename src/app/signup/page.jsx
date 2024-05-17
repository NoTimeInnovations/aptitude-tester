"use client";

import NonLoginNavBar from "../../common/components/NonLoginNavBar";
import NonLoginFooter from "../../common/components/NonLoginFooter";
import Image from "next/image";
import React, { useState } from "react";

async function userExist(username) {
  const res = await fetch("/api/checkUser", {
    method: "POST",
    body: JSON.stringify({ username }),
  });
  return (await res.json()).exists;
}
export default function page() {
  var [pswdVisibility, setPwdVisibility] = useState(false);
  var [userNameError, setUserNameError] = useState("");
  var [firstNameError, setFirstNameError] = useState("");
  var [mobileNumError, setMobileNumError] = useState("");
  var [passwordError, setPasswordError] = useState("");
  var [confirmPasswordError, setConfirmPasswordError] = useState("");
  return (
    <>
      <div className=" bg-[rgba(185,203,239,255)] w-screen pt-10 text-black">
        <NonLoginNavBar />
        <div className="flex flex-row justify-center w-screen">
          <div className="bg-white rounded-xl shadow-2xl flex flex-row w-9/12 place-self-center mt-48 justify-between p-3 px-8 -mb-[25%]">
            <div className="w-2/5 text font-['Poppins'] pt-4 flex flex-col   text-4xl mt-4 w-6/12 mb-6">
              <div className="place-self-center font-bold">SignUp</div>
              <span className="text-[16px] font-light mt-10 text-[rgba(76,76,77,100)] place-self-center">
                Welcome back! Please log in to access your account.
              </span>
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  var proceed = true;
                  setConfirmPasswordError("");
                  setPasswordError("");
                  setUserNameError("");
                  setFirstNameError("");
                  setMobileNumError("");
                  if (event.target.username.value == "") {
                    setUserNameError("Username can't be empty");
                    proceed = false;
                  }
                  if (await userExist(event.target.username.value)) {
                    setUserNameError("Username not available");
                    proceed = false;
                  }
                  if (event.target.firstname.value == "") {
                    setFirstNameError("Firstname Required");
                    proceed = false;
                  }
                  if (event.target.mobile.value == "") {
                    setMobileNumError("Mobile Number Required");
                    proceed = false;
                  }
                  if (event.target.pswd.value == "") {
                    setPasswordError("Password Required Required");
                    proceed = false;
                  }
                  if (
                    event.target.pswd.value != event.target.confirmpswd.value
                  ) {
                    setConfirmPasswordError("Password not equal");
                    proceed = false;
                  }
                  if (!proceed) {
                    return;
                  }
                  const res = await fetch("/api/createAccount", {
                    method: "POST",
                    body: JSON.stringify({
                      username: event.target.username.value,
                      firstname: event.target.firstname.value,
                      lastname: event.target.lastname.value,
                      mobile: event.target.mobile.value,
                      email: event.target.email.value,
                      password: event.target.pswd.value,
                    }),
                  });
                  const x = await res.json();
                  console.log(x);
                  localStorage.setItem("token", x);
                }}
              >
                <div className="mt-[48px] font-light text-[16px]">UserName</div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="UserName"
                  name="username"
                />
                {userNameError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{userNameError}
                  </div>
                )}
                <div className="mt-[12px] font-light text-[16px]">
                  FirstName
                </div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="FirstName"
                  name="firstname"
                />
                {firstNameError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{firstNameError}
                  </div>
                )}
                <div className="mt-[16px] font-light text-[16px]">LastName</div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="LastName"
                  name="lastname"
                />
                <div className="mt-[16px] font-light text-[16px]">
                  Mobile Number
                </div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="Mobile Number"
                  name="mobile"
                />
                {mobileNumError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{mobileNumError}
                  </div>
                )}
                <div className="mt-[16px] font-light text-[16px]">Email</div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] text-sm w-full p-4 rounded-[4px]"
                  placeholder="Email"
                  name="email"
                />

                <div className="mt-[16px] font-light text-[16px]">Password</div>
                <div className=" relative flex flex-row justify-between">
                  <input
                    type={pswdVisibility ? "text" : "password"}
                    className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                    placeholder="Password"
                    name="pswd"
                  ></input>
                  <span
                    className="absolute mt-4 mr-4 right-0"
                    onClick={() => setPwdVisibility(!pswdVisibility)}
                  >
                    <Image
                      src={`/media/img/${
                        pswdVisibility ? `Union.svg` : `hide.svg`
                      }`}
                      width={20}
                      height={10}
                    />
                  </span>
                </div>
                {passwordError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{passwordError}
                  </div>
                )}
                <div className="mt-[16px] font-light text-[16px]">
                  Confirm Password
                </div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="Confirm Password"
                  name="confirmpswd"
                ></input>

                {confirmPasswordError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{confirmPasswordError}
                  </div>
                )}
                <div className="pt-14 pb-6 flex flex-row justify-center">
                  <input
                    type="submit"
                    className="bg-[rgba(4,2,105,100)] rounded-[5px] text-white text-[18px] px-24 font-regular"
                    value="SignUp"
                  />
                </div>
              </form>
            </div>
            <div className="bg-gray-400 w-[1px] h-15 mt-9 ml-3"></div>
            <div className="w-3/5 text font-['Be Vietnam Pro'] px-2  pt-4 pl-6 mt-4">
              <p className="font-semibold text-[30px]">Student Testimonials</p>
              <div className="text-[16px] text font-['Poppins'] text-[rgba(89,89,90,100)] mt-10 mb-8">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </div>
              <div
                className="border-[1px] shadow-xl border-[rgba(241,241,243,20)] font-['Be Vietnam Pro'] p-12 pl-16
              rounded-xl"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
                <div className="bg-[rgba(241,241,243,20)] w-[400px] h-[1px] mt-9"></div>
                <div className="bg-[rgba(252,252,253,100)] p-4 w-[400px] flex flex-row items-center">
                  <Image
                    src="/media/img/LoginPage/profile.svg"
                    height={50}
                    width={50}
                  ></Image>
                  <span className=" flex flex-row justify-end ml-36">
                    Goutham Rajesh
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-2 mt-3">
                <button className="bg-[#E6E6E638] p-3 ">
                  <Image src="/media/img/arrow1.png" width={25} height={10} />
                </button>
                <button className="bg-[#E6E6E638] p-3 rotate-90">
                  <Image src="/media/img/arrow.png" width={25} height={10} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-max pt-[40%]"></div>
        <NonLoginFooter />
      </div>
    </>
  );
}
