import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Section from "./Components/Section"
import { ProductProvider } from "./context/ProductContext"
import Product from "./Components/Product"
import Footer from "./Components/Footer"
import './App.css'
import { useRef } from "react"
const App = () => {
  const productRef = useRef(null);
  const footerRef = useRef(null);
  const scrollToMenu = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <ProductProvider>
        
        <BrowserRouter>
        <Header onMenuClick={scrollToMenu}/>
        <Routes>
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
        </Routes>
        <Section/>
        <Product ref={productRef}/>
        <Footer ref={footerRef}  onAboutClick={scrollToAbout}/>
      </BrowserRouter>
      </ProductProvider>
      
      
    </>
  )
}

export default App