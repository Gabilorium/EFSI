import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
    const initialFavoritos = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : [];
    console.log(initialFavoritos)

    const [proyectos, setProyectos] = useState()
    const [favoritos, setFavoritos] = useState(initialFavoritos);

    console.log(favoritos)
    function agregarFavorito(proyecto) {
        
        console.log("proyecto",proyecto)

        //console.log("idProducto: " + proyecto.id)
        
        const index = favoritos.findIndex((p) => p.id === proyecto.id); 
        //console.log(index)

        if (index < 0) {
            let newproyectos = JSON.parse(JSON.stringify(proyecto))
            //console.log(newproyectos)
            //creas uno nuevo
            newproyectos.favorito = true;
            setFavoritos([
                ...favoritos,
                newproyectos,
            ])
            //console.log(favoritos.favorio)
        }        
    }


    function eliminarFavorito(proyecto) {
        let newproyectos = JSON.parse(JSON.stringify(proyecto))
        newproyectos.favorito = true;
        console.log("idProducto: " + proyecto.id)
        //console.log("Productos: " + JSON.stringify(productos, null, 2))
        //  console.log("idProducto: "+ newproductos.id)
        const index = favoritos.findIndex((p) => p.if === proyecto.id);
        console.log("index: " + index)
        if (index < 0) {
            console.log("El proyecto no se encontró en el carrito.")
        }
        else{
            const newList = favoritos.filter((p) => p.id !== proyecto.id)
            //newproyectos = favoritos.filter((p) => p.id !== favoritos.id)
            //newList[index].favorio = false;
            setFavoritos(newList);
            /*console.log(newList)
            setProyectos(newList)*/ 
        }
    }
    
    
    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos))      
    }, [favoritos])

    return (
        <FavoritosContext.Provider
            value={{
                favoritos,
                agregarFavorito,
                eliminarFavorito
            }}
        >
            {props.children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosProvider;