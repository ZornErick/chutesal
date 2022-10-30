import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Campeonatos } from "./pages/Campeonatos/Campeonatos";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Inscricao} from "./pages/Inscricao/Inscricao";
import CampeonatoCreateForm from "./components/Campeonato/CampeonatoCreateForm/CampeonatoCreateForm";
import { GerenciarCampeonato } from "./pages/GerenciarCampeonato/GerenciarCampeonato";
import { Unidades } from "./pages/Unidades/Unidades";

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
                        <Route path={"/campeonatos/create"} element={<CampeonatoCreateForm />} />
                        <Route path={"/campeonatos/:id"} element={<GerenciarCampeonato />}/>
                        <Route path={"/campeonatos/:id/inscricao"} element={<Inscricao />}/>

                        <Route path={"/unidades"} element={<Unidades />} />

                        <Route path={"/inscricao"} element={<Inscricao />} />
                    </Routes>
                    <Footer />
                </Router>
            </main>
        </>
    );
}
