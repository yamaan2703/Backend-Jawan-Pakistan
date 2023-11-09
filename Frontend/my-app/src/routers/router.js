import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/form";
import Data from "../pages/tableData";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Data />} />
            <Route path="form" element={<Form />} />
           

        </Routes>
        </BrowserRouter>
        </>
    )
}