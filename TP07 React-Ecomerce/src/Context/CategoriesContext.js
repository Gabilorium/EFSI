import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react';
export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios
          .get("https://dummyjson.com/products/categories")
          .then((result) => {
            setCategorias(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    

    if(categorias.length !== 0){
        return (
            <>
                <CategoriesContext.Provider value={{ categorias }}>
                    {props.children}
                </CategoriesContext.Provider>
            </>
        );
    }
    
    };
    
export default CategoriesProvider;