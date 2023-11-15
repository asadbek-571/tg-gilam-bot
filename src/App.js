import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./companent/Header/Header";
import ProductList from "./companent/ProductList/ProductList";
import Form from "./companent/Form/Form";
import {Route, Routes} from "react-router-dom";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    })

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'from'} element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
