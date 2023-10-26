import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
    const initialCarrito = localStorage.getItem("proyectos") ? JSON.parse(localStorage.getItem("productos")) : [];

    const [proyectos, setProyectos] = useState([]);

    console.log(proyectos)
    function manejarFavorito(proyecto) {
        
        console.log("proyecto",proyecto)

        console.log("idProducto: " + proyecto.id)
        
        const index = proyectos.findIndex((p) => p.id === proyecto.id); 
        //console.log(index)

        if (index < 0) {
            let newproyectos = JSON.parse(JSON.stringify(proyecto))
            console.log(newproyectos)
            //creas uno nuevo
            newproyectos.favorio = true;
            setProyectos([
                ...proyectos,
                newproyectos,
            ])
            console.log(proyectos.favorio)
        }else
        {
            let newproyectos = [...proyectos];
            newproyectos[index].favorio = false;
            setProyectos(newproyectos);
        }
        
    }
    
    
    useEffect(() => {
        localStorage.setItem("proyectos", JSON.stringify(proyectos))      
    }, [proyectos])

    return (
        <FavoritosContext.Provider
            value={{
                proyectos,
                manejarFavorito
            }}
        >
            {props.children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosProvider;