import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../products/list/List";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/products/list"/>} />
            <Route path="/products/list" element={<List />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
