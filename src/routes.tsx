import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Campeonatos } from "./pages/Campeonatos/Campeonatos";
import { Unidades } from "./pages/Unidades/Unidades";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {GerenciarCampeonato} from "./pages/GerenciarCampeonato/GerenciarCampeonato";

export function AppRouter() {
    return (
        <>
            <ToastContainer 
            theme="dark"
            position="top-center"
            progressStyle={{backgroundColor: "#7C7C8A"}}
            />
            <main className={"flex flex-col h-screen justify-between"}>
                <Router>
                    <Menu />
                    <Routes>
                        <Route path={"/campeonatos"} element={<Campeonatos />} />
                        <Route path={"/campeonatos/:id"} element={<GerenciarCampeonato />}/>

                        <Route path={"/unidades"} element={<Unidades />} />

                    </Routes>
                    <Footer />
                </Router>
            </main>
        </>
        
    );
}
