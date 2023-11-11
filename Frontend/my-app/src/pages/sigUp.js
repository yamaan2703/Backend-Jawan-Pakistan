// import { useNavigate } from "react-router-dom";
// import BackBtn from "../components/backBtn";
// import BackInp from "../components/backInp";
// import axios from "axios";
// import { useState } from "react";

// export default function SignUp() {
//   const navigate = useNavigate();
//   const [sendSignUp, setSendSignUp] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const GoToLogin = () => {
//     navigate("/login");
//   };

//   const SignUp = () => {
//     console.log(sendSignUp);
//     axios
//       .post("http://localhost:5000/auth/signup", sendSignUp)
//       .then((res) => {
//         console.log(res.data);
//         setSendSignUp({
//           name: "",
//           email: "",
//           password: "",
//         });
//         console.log(setSendSignUp);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleInputChange = (key, val) => {
//     setSendSignUp({ ...sendSignUp, [key]: val });
//   };
//   return (
//     <>
//       <div className="h-screen bg-sky-500 flex justify-center items-center">
//         <div className="w-[400px] bg-[rgba(255,255,255,0.19)] p-10 rounded-lg text-center">
//           <div className="text-5xl text-white font-bold">
//             <h1>SignUp</h1>
//           </div>

//           <div className="my-2">
//             <div className="my-1">
//               <BackInp
//                 // name="name"
//                 // onChange={(e) => handleInputChange("name", e.target.value)}
//                 value={sendSignUp.name}
//                 onChange={(e) =>
//                   setSendSignUp({ ...sendSignUp, name: e.target.value })
//                 }
//                 label="Name"
//               />
//             </div>

//             <div className="my-1">
//               <BackInp
//                 // name="email"
//                 // onChange={(e) => handleInputChange("email", e.target.value)}
//                 value={sendSignUp.email}
//                 onChange={(e) =>
//                   setSendSignUp({ ...sendSignUp, email: e.target.value })
//                 }
//                 label="Email"
//               />
//             </div>

//             <div className="my-1">
//               <BackInp
//                 // name="password"
//                 // onChange={(e) => handleInputChange("password", e.target.value)}
//                 value={sendSignUp.password}
//                 onChange={(e) =>
//                   setSendSignUp({ ...sendSignUp, password: e.target.value })
//                 }
//                 label="Password"
//               />
//             </div>

//             <div className="my-1">
//               <BackBtn onClick={SignUp} label="SignUp" />
//             </div>

//             <div className="my-1">
//               <BackBtn onClick={GoToLogin} label="Go To Login" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useNavigate } from "react-router-dom";
import BackBtn from "../components/backBtn";
import BackInp from "../components/backInp";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [sendSignUp, setSendSignUp] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const GoToLogin = () => {
    navigate("/login");
  };

  const handleInputChange = (key, val) => {
    setSendSignUp({ ...sendSignUp, [key]: val });
  };

  const SignUp = () => {
    console.log(sendSignUp);
    axios
      .post("http://localhost:5000/auth/signup", sendSignUp)
      .then((res) => {
        console.log(res.data);
        setSendSignUp({
          userName: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen bg-sky-500 flex justify-center items-center">
      <div className="w-[400px] bg-[rgba(255,255,255,0.19)] p-10 rounded-lg text-center">
        <div className="text-5xl text-white font-bold">
          <h1>SignUp</h1>
        </div>

        <div className="my-2">
          <div className="my-1">
            <BackInp
              value={sendSignUp.userName}
              onChange={(e) => handleInputChange("userName", e.target.value)}
              label="Name"
            />
          </div>

          <div className="my-1">
            <BackInp
              value={sendSignUp.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              label="Email"
            />
          </div>

          <div className="my-1">
            <BackInp
              value={sendSignUp.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              label="Password"
            />
          </div>

          <div className="my-1">
            <BackBtn onClick={SignUp} label="SignUp" />
          </div>

          <div className="my-1">
            <BackBtn onClick={GoToLogin} label="Go To Login" />
          </div>
        </div>
      </div>
    </div>
  );
}

