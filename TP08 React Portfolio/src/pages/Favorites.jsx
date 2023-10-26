import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import StyledCard from "../components/StyledCard";
import { FavoritosContext } from "../Context/FavoritosContext";

export default function Favorites() {
    const {favoritos:listFav} = useContext(FavoritosContext);
    return(
        <>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {
           
            listFav.length >0  ?(
                listFav.map((proy) =>
                <Col key={proy.id}>
                    <StyledCard proyect={proy} />
                </Col>      
            )
            ):(
                <>  </>
            )
        }
        </Row>
        </>
    )
}