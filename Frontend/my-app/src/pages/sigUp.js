import { useNavigate } from "react-router-dom";
import BackBtn from "../components/backBtn";
import BackInp from "../components/backInp";

export default function SignUp () {
  const navigate = useNavigate()
  const [sendSignUp, setSendSignUp] = ({

  })

  const GoToLogin = () => {
    navigate("/login")
  }

  // const SignUp = () => {
  //   axios.
  // }
    return (
        <>
        <div className="h-screen bg-sky-500 flex justify-center items-center">
            <div className="w-[400px] bg-[rgba(255,255,255,0.19)] p-10 rounded-lg text-center">

            <div className="text-5xl text-white font-bold">
            <h1>SignUp</h1>
          </div>
 
           <div className="my-2">
            <div className="my-1">
            <BackInp 
            label="Name"/>
            </div>

            <div className="my-1">
            <BackInp 
            label="Email"/>
            </div>

            <div className="my-1">
            <BackInp 
            label="Password"/>
            </div>

            <div className="my-1">
              <BackBtn 
              label="SignUp"/>
            </div>

            <div className="my-1">
              <BackBtn 
              onClick={GoToLogin}
              label="Go To Login"/>
            </div>
           </div>
            </div>
        </div>
        </>
    )
}