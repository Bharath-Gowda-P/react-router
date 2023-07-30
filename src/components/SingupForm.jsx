import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SignupForm(props) {
  let setIsLoggedIn = props.setIsLoggedIn;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();

  function changeHandler(event) {
    return setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    toast.success("Account Created");
    setIsLoggedIn(true);
    navigate("/dashboard");
    const accData = {
      ...formData,
    };
    console.log("Printing Account Data");
    console.log(accData);
  }

  return (
    <div>
      {" "}
      {/* student-instructor-tab */}
      <div className="loginBoxShadow flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col w-full mt-6">
        {/* first and last name */}
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter first Name"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="loginBoxShadow bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              placeholder="Enter last Name"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className="loginBoxShadow bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        <div className="mt-[20px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              value={formData.email}
              placeholder="Enter Email ID"
              name="email"
              onChange={changeHandler}
              className="loginBoxShadow bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        {/* password n comfirm password */}
        <div className="w-full flex gap-x-4 mt-[20px] mb-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              onChange={changeHandler}
              value={formData.password}
              className="loginBoxShadow bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}{" "}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="loginBoxShadow bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}{" "}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-[8px] px-[12px] py-[8px] mt-6 font-medium text-richblack-900">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
