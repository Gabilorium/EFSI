import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
    const initialFavoritos = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : [];
    //console.log(initialFavoritos)

    const [proyectos, setProyectos] = useState()
    const [favoritos, setFavoritos] = useState(initialFavoritos);

    console.log("Favoritos: " ,favoritos)
    function manejarFavorito(proyecto) {
        
        console.log("proyecto",proyecto)

        //console.log("idProducto: " + proyecto.id)
        
        const index = favoritos.findIndex((p) => p.id === proyecto.id); 
        console.log(index)
        if (index < 0) {
            let newProyecto = JSON.parse(JSON.stringify(proyecto))
            //let proyecto = JSON.parse(JSON.stringify(proyecto))
            //console.log(newproyectos)
            //creas uno nuevo
            newProyecto.favorito = true;
            setFavoritos([
                ...favoritos,
                newProyecto,
            ])

            //console.log(favoritos.favorio)
        }else{
            let newProyecto = JSON.parse(JSON.stringify(proyecto))
            newProyecto.favorito = false;
            console.log("NewProyecto: ",newProyecto)
            const newList = favoritos.filter((p) => p.id !== proyecto.id)
            setFavoritos(newList)

            //console.log(favoritos)
            //const newList = favoritos.filter((p) => p.id !== proyecto.id)
            //newproyectos = favoritos.filter((p) => p.id !== favoritos.id)
            //newList[index].favorio = false;
            //setFavoritos(newList);
        }  
    }
    
    const ExisteFavorito= (id)=>{

        const index = favoritos.findIndex((p) => p.id === id); 
        if(index<0){
            console.log("no existe")
            return false;
        }else{
            console.log("existe")
            return true;
        }
        
    }
    
    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos))      
    }, [favoritos])

    return (
        <FavoritosContext.Provider
            value={{
                favoritos,
                manejarFavorito,
                ExisteFavorito
            }}
        >
            {props.children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosProvider;