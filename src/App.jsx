import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Section from "./Components/Section"
import { ProductProvider } from "./context/ProductContext"
import Product from "./Components/Product"

const App = () => {
  return (
    <>
      <ProductProvider>
        
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
        </Routes>
        <Section/>
        <Product/>
      </BrowserRouter>
      </ProductProvider>
      
      
    </>
  )
}

export default App