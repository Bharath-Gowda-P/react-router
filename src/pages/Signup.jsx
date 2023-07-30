import React from "react";
import Template from "../components/Template";
import student from "../assets/signup.png";

function Signup(props) {
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
      <Template
        formtype={"signup"}
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={student}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Signup;
