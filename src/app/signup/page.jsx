"use client";

import NonLoginNavBar from "../../common/components/NonLoginNavBar";
import NonLoginFooter from "../../common/components/NonLoginFooter";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

async function userExist(username) {
  const res = await fetch(`${BASE_URL}api/checkUser`, {
    method: "POST",
    body: JSON.stringify({ username }),
  });
  return (await res.json()).exists;
}

export default function SignUpPage() {
  const [pswdVisibility, setPwdVisibility] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [mobileNumError, setMobileNumError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="bg-[rgba(185,203,239,255)] w-full min-h-screen pt-10 text-black">
        <NonLoginNavBar />
        <div className="flex flex-col items-center w-full">
          <div className="bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row w-11/12 lg:w-9/12 mt-24 lg:mt-48 p-3 lg:px-8">
            <div className="lg:w-2/5 text font-['Poppins'] pt-4 flex flex-col text-4xl mt-4 mb-6">
              <div className="text-center font-bold">Sign Up</div>
              <span className="text-[16px] font-light mt-10 text-[rgba(76,76,77,100)] text-center">
                Welcome back! Please log in to access your account.
              </span>
              <form
                onSubmit={async (event) => {
                  event.preventDefault();
                  let proceed = true;
                  setConfirmPasswordError("");
                  setPasswordError("");
                  setUserNameError("");
                  setFirstNameError("");
                  setMobileNumError("");

                  if (event.target.username.value.trim() === "") {
                    setUserNameError("Username can't be empty");
                    proceed = false;
                  }
                  if (await userExist(event.target.username.value)) {
                    setUserNameError("Username not available");
                    proceed = false;
                  }
                  if (event.target.firstname.value.trim() === "") {
                    setFirstNameError("Firstname Required");
                    proceed = false;
                  }
                  if (event.target.mobile.value.trim() === "") {
                    setMobileNumError("Mobile Number Required");
                    proceed = false;
                  }
                  if (event.target.pswd.value.trim() === "") {
                    setPasswordError("Password Required");
                    proceed = false;
                  }
                  if (
                    event.target.pswd.value !== event.target.confirmpswd.value
                  ) {
                    setConfirmPasswordError("Passwords do not match");
                    proceed = false;
                  }
                  if (!proceed) return;

                  const res = await fetch(`${BASE_URL}api/createAccount`, {
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
                  const response = await res.json();
                  if (response.error) {
                    console.error(response.error);
                    return alert("Something went wrong, please try again.");
                  }
                  const token = response.token;
                  localStorage.setItem("token", token);

                  const authResponse = await fetch(`${BASE_URL}api/auth`, {
                    method: "POST",
                    body: JSON.stringify({
                      token: localStorage.getItem("token"),
                    }),
                  });
                  const authResult = await authResponse.json();
                  if (authResult.auth) {
                    router.push("/dashboard");
                  } else {
                    alert(authResult.message);
                  }
                }}
              >
                <div className="mt-12 font-light text-[16px]">Username</div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="Username"
                  name="username"
                />
                {userNameError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{userNameError}
                  </div>
                )}
                <div className="mt-4 font-light text-[16px]">First Name</div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="First Name"
                  name="firstname"
                />
                {firstNameError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{firstNameError}
                  </div>
                )}
                <div className="mt-4 font-light text-[16px]">Last Name</div>
                <input
                  type="text"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="Last Name"
                  name="lastname"
                />
                <div className="mt-4 font-light text-[16px]">Mobile Number</div>
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
                <div className="mt-4 font-light text-[16px]">Email</div>
                <input
                  type="email"
                  className="bg-[rgba(241,241,241,50)] text-sm w-full p-4 rounded-[4px]"
                  placeholder="Email"
                  name="email"
                />
                <div className="mt-4 font-light text-[16px]">Password</div>
                <div className="relative flex flex-row justify-between">
                  <input
                    type={pswdVisibility ? "text" : "password"}
                    className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                    placeholder="Password"
                    name="pswd"
                  />
                  <span
                    className="absolute mt-4 mr-4 right-0 cursor-pointer"
                    onClick={() => setPwdVisibility(!pswdVisibility)}
                  >
                    <Image
                      src={`/media/img/${
                        pswdVisibility ? `Union.svg` : `hide.svg`
                      }`}
                      width={20}
                      height={10}
                      alt="Toggle Password Visibility"
                    />
                  </span>
                </div>
                {passwordError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{passwordError}
                  </div>
                )}
                <div className="mt-4 font-light text-[16px]">
                  Confirm Password
                </div>
                <input
                  type="password"
                  className="bg-[rgba(241,241,241,50)] w-full text-sm p-4 rounded-[4px]"
                  placeholder="Confirm Password"
                  name="confirmpswd"
                />
                {confirmPasswordError && (
                  <div className="text-black text-sm ml-4 text-red-300 mt-4">
                    *{confirmPasswordError}
                  </div>
                )}
                <div className="pt-14 pb-6 flex flex-row justify-center">
                  <input
                    type="submit"
                    className="bg-[rgba(4,2,105,100)] rounded-[5px] text-white text-[18px] px-24 font-regular"
                    value="Sign Up"
                  />
                </div>
              </form>
            </div>
            <div className="hidden lg:block bg-gray-400 w-[1px] h-full ml-3"></div>
            <div className="w-full lg:w-3/5 text font-['Be Vietnam Pro'] px-2 pt-4 pl-6 mt-4">
              <p className="font-semibold text-[30px]">Student Testimonials</p>
              <div className="text-[16px] font-['Poppins'] text-[rgba(89,89,90,100)] mt-10 mb-8">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </div>
              <div className="border-[1px] shadow-xl border-[rgba(241,241,243,20)] font-['Be Vietnam Pro'] p-12 pl-16 rounded-xl">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
                <div className="bg-[rgba(241,241,243,20)] w-full lg:w-[400px] h-[1px] mt-9"></div>
                <div className="bg-[rgba(252,252,253,100)] p-4 w-full lg:w-[400px] flex flex-row items-center">
                  <Image
                    src="/media/img/LoginPage/profile.svg"
                    height={50}
                    width={50}
                    alt="Profile"
                  />
                  <span className="ml-4 lg:ml-36">Goutham Rajesh</span>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-2 mt-3">
                <button className="bg-[#E6E6E638] p-3">
                  <Image
                    src="/media/img/arrow1.png"
                    width={25}
                    height={10}
                    alt="Previous"
                  />
                </button>
                <button className="bg-[#E6E6E638] p-3 rotate-90">
                  <Image
                    src="/media/img/arrow.png"
                    width={25}
                    height={10}
                    alt="Next"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <NonLoginFooter />
      </div>
    </>
  );
}
