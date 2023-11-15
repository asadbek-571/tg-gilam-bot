import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Router, Routes} from 'react-router-dom'
import Header from "./companent/Header/Header";
import ProductList from "./companent/ProductList/ProductList";
import Form from "./companent/Form/Form";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Router location={'/'} navigator={'/'}>
                <Routes>
                    <Route index path="/" element={<ProductList />} />
                    <Route index path="/form" element={<Form />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App;