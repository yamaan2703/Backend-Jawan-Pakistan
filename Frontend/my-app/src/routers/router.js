import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/form";
import Data from "../pages/tableData";
import Login from "../pages/login";
import SignUp from "../pages/sigUp";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Data />} />
            <Route path="form" element={<Form />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
           

        </Routes>
        </BrowserRouter>
        </>
    )
}