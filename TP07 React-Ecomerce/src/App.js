//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Header from './Pages/Header';
import Persona from "./Pages/Persona";
import Nosotros from "./Pages/Nosotros";
import Productos from "./Pages/Productos";
import Cart from "./Pages/Cart";
import Error404 from "./Pages/404";
import CarritoProvider from "./Context/CarritoContext";
import ProductoProvider from "./Context/ProductoContext";
//import Producto from "./Components/Producto";
import CategoriesProvider from "./Context/CategoriesContext";
import DetalleProducto from "./Pages/DetalleProducto";

const App = () => {
 return (
   <>
   <ProductoProvider>
    <CarritoProvider>
      <CategoriesProvider>
          <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Header />}>
                      <Route index element={<Home />}></Route>
                      <Route path="/productos" element={<Productos/>}></Route>
                      <Route path="/productos/:productoId" element={<DetalleProducto/>}></Route>
                      <Route path="/quienes-somos" element={<Nosotros/>}></Route>
                      <Route path="/quienes-somos/:personaId" element={<Persona/>}></Route>
                      <Route path="/contacto" element={<Contacto />}></Route>
                      <Route path="/cart" element={<Cart />}></Route>
                      <Route path="*" element={<Error404 />}></Route>
                  </Route>
            </Routes>
          </BrowserRouter>
        </CategoriesProvider>
      </CarritoProvider>
    </ProductoProvider>
   </>
 );
};

export default App;