import React, { useState } from "react";

const Customform = () => {
  const [name, SetName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmit,setIsSubmit] = useState(false)

  const handleNameChange = (e) => {
    console.log(e);
    SetName(e.target.value);
  };
  const handleMailChange = (e) => {
    console.log(e);
    let value = e.target.value;
    setMail(value);
  };

  const handleMobileChange = (e) => {
    console.log("testttt");
    setMobile(e.target.value);
  };

   const handleSubmit =() =>{

    if(name !== "" && mail !== ""){
        setIsSubmit(true)
    }else {
        alert("Name and Email shout not be Empty")
    }

    console.log("testt")
      setIsSubmit(true)
   }

   console.log(isSubmit)

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div className="card bg-secondary">
            <div className="card-body">
              <input
                className="form-control my-3"
                placeholder="Enter your Name"
                onChange={(e) => handleNameChange(e)}
              ></input>
              <input
                className="form-control my-3"
                placeholder="Enter your Mail Id"
                onChange={(e) => handleMailChange(e)}
              ></input>
              <input
                className="form-control my-3"
                placeholder="Enter Mobile Number"
                onChange={(e) => handleMobileChange(e)}
              ></input>
              <div className="App">
              <button className="submitnBtn" onClick={handleSubmit}>Submit</button>
              </div>
              
              {isSubmit && <div className="bg-white details">
                <div >Name:{name}</div>
                <div >Mail:{mail}</div>
                <div>Moible number:{mobile}</div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customform;
