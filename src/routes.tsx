import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Campeonatos } from "./pages/Manager/Campeonatos/Campeonatos";
import { Unidades } from "./pages/Manager/Unidades/Unidades";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {GerenciarCampeonato} from "./pages/Manager/GerenciarCampeonato/GerenciarCampeonato";
import {UserCampeonatos} from "./pages/User/Campeonatos/Campeonatos";
import {Inscricao} from "./pages/User/Inscricao/Inscricao";

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
                        <Route path={"/user/campeonatos"} element={<UserCampeonatos />}/>

                        <Route path={"/unidades"} element={<Unidades />} />

                        <Route path={"/inscricao"} element={<Inscricao />} />
                    </Routes>
                    <Footer />
                </Router>
            </main>
        </>
    );
}
