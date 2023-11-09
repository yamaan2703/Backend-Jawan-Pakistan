import { useNavigate } from "react-router-dom";
import BackBtn from "../components/backBtn";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Data() {
  const [note, setNote] = useState([]);
  const navigate = useNavigate();
  const GoToForm = () => {
    navigate("/form");
  };

  const fetchData = async () => {
    const  mydata  = await axios.get("http://localhost:5000/course");
    console.log(mydata.data.data);
    setNote(mydata.data.data);
  };
  // console.log(note);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="h-screen bg-sky-500 flex justify-center items-center">
        <div className="w-[600px] bg-[rgba(255,255,255,0.19)] p-10 rounded-lg text-center">
          <div className="text-5xl text-white font-bold">
            <h1>Data</h1>
          </div>

          <div className="backendData">
            <table border="1" className="my-5 p-5 border w-[500px]">
              <tr className="text-white py-1 border bg-sky-600">
                <th>Name</th>
                <th>Short Name</th>
                <th>Fee</th>
              </tr>

              <tbody className="text-white p-2 bg-sky-500">
                {note.map((x, i) => {
                  return (
                    <tr key={i}>
                      <td className="border">{x.name}</td>
                      <td className="border">{x.shortName}</td>
                      <td className="border">{x.fee}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div>
              <BackBtn onClick={GoToForm} label="Go To Form" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
