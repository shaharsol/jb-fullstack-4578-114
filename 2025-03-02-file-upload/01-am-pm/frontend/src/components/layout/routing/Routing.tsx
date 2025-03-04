import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../products/list/List";
import Add from "../../products/add/Add";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products/list"/>} />
            <Route path="/products/list" element={<List />} />
            <Route path="/products/add" element={<Add />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
