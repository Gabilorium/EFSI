import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import StyledCard from "../components/StyledCard";
import { FavoritosContext } from "../Context/FavoritosContext";

export default function Favorites() {
    const {favoritos:listFav, ExisteFavorito} = useContext(FavoritosContext);
    return(
        <>
            <Container className="d-flex">
                <Title>
                <h2>Favorites</h2>
                <div className="underline"></div>
                </Title>
            </Container>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {listFav.length >0  ?(
                listFav.map((proy) =>
                <Col key={proy.id}>
                    <StyledCard proyect={proy} esFavorito={ExisteFavorito(proy.id)}/>
                </Col>      
            )):(
                <>
                    <h2 className="text-center">Oops, you do not have any Favorite projects yet...</h2>
                </>
            )
            }
        </Row>
        </>
    )
}