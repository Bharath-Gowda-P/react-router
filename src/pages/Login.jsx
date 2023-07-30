import React from "react";
import Template from "../components/Template";
import student from "../assets/login.png";

function Login(props) {
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
      <Template
        formtype={"login"}
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={student}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Login;
