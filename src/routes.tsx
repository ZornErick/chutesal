import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Campeonatos } from "./pages/Campeonatos/Campeonatos";
import { Unidades } from "./pages/Unidades/Unidades";
import { Footer } from "./components/Footer/Footer";

export function AppRouter() {
    return (
        <main className={"flex flex-col h-screen justify-between"}>
            <Router>
                <Menu />
                <Routes>
                    <Route path={"/campeonatos"} element={<Campeonatos />} />
                    <Route path={"/unidades"} element={<Unidades />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
