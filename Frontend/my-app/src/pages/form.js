import { useNavigate } from "react-router-dom";
import BackBtn from "../components/backBtn";
import BackInp from "../components/backInp";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Form() {
  const navigate = useNavigate();
  const [sendData, setSendData] = useState({
    name: "",
    shortName: "",
    fee: ""
  });// bhai mene neeche input wale tag pe kaam kia hai wo dekh lou field ke liye 
  const GoToData = () => {
    navigate("/");
  };

  const handleInputChange = (key, val) => {
    setSendData({ ...sendData , [key]:val });
  };

  const AddCourse = () => {
    console.log(sendData);

    axios
      .post("http://localhost:5000/course", { ...sendData })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setSendData({
      name: "",
      shortName: "",
      fee: "",
    });
  };

  return (
    <>
      <div className="h-screen bg-sky-500 flex justify-center items-center">
        <div className="w-[400px] bg-[rgba(255,255,255,0.19)] p-10 rounded-lg text-center">
          <div className="text-5xl text-white font-bold">
            <h1>Form</h1>
          </div>

          <div className="formData">
            <div>
              <BackInp
                name="name"
                onChange={(e) => handleInputChange("name", e.target.value)}
                label="Enter Yor Name"
              />
            </div>
            <div>
              <BackInp
                name="shortName"
                onChange={(e) => handleInputChange("shortName", e.target.value)}
                label="Enter Yor Short Name"
              />
            </div>
            <div>
              <BackInp
                name="fee"
                onChange={(e) => handleInputChange("fee", e.target.value)}
                label="Enter Fee"
              />
            </div>
            <div>
              <BackBtn onClick={AddCourse} label="Submit" />
            </div>
            <div>
              <BackBtn onClick={GoToData} label="Show Data" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
