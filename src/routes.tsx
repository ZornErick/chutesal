import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Menu} from "./components/Menu/Menu";
import {Campeonatos} from "./pages/Campeonatos/Campeonatos";
import {Unidades} from "./pages/Unidades/Unidades";

export function AppRouter() {
    return (
        <main className={"bg-gray-900"}>
            <Router>
                <Menu />
                <Routes>
                    <Route path={"/campeonatos"} element={<Campeonatos />} />
                    <Route path={"/unidades"} element={<Unidades />} />
                </Routes>
            </Router>
        </main>
    );
}
