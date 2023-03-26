import Body from "./components/Body"
import Header from "./components/Header"
import CartPage from "./components/CartPage"
import {BrowserRouter, Routes, Route}  from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={[<Header/>, <Body/>]} />
                <Route path="/cart" element={[<Header/>, <CartPage/>]} />
            </Routes>
        </BrowserRouter>
    )
}

export default App