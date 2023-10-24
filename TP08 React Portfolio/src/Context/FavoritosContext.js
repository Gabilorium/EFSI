import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
    const initialCarrito = localStorage.getItem("proyectos") ? JSON.parse(localStorage.getItem("productos")) : [];

    const [proyectos, setProyectos] = useState(initialCarrito);


    function manejarFavorito(proyecto) {
        console.log("proyecto",proyecto)

        console.log("idProducto: " + proyecto.id)
        
        const index = proyectos.findIndex((p) => p.id === proyecto.id);
        //console.log(index)

        if (index < 0) {
            //creas uno nuevo
            proyecto.favorio = true;
            setProyectos([
                ...proyectos,
                proyecto,
            ])
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