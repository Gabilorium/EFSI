import React, { useContext, useEffect } from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/GH.svg";
// Components
import { Button, Card } from "react-bootstrap";
import { FavoritosContext } from "../Context/FavoritosContext";
import "../Button.css"
import { propTypes } from "react-bootstrap/esm/Image";
//import { useEffect } from "react";


const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;


export default function StyledCard({ proyect, esFavorito }) {
  const {manejarFavorito} = useContext(FavoritosContext);
  console.log(proyect.favorito)

  /*useEffect(() => {
    console.log("useEffect");
    // creamos una función para actualizar el estado con el clientWidth
    const updateLike = () => {
      const width = document.body.clientWidth;
      console.log(`updateWidth con ${width}`);
      setWidth(width);
    };

    // actualizaremos el width al montar el componente
    updateWidth();

    // nos suscribimos al evento resize de window
    window.addEventListener("resize", updateWidth);
  }, []);*/

  return (
    <StyledCardComponent>
      <Card>
          <div className="costado-der">
            {/*<Button className="button" onClick={()=> manejarFavorito(proyect)}>*/}
            <label className="ui-like">
              
              {   esFavorito ?
                <input type="checkbox" defaultChecked onClick={()=> manejarFavorito(proyect)}/>
              :
              <input type="checkbox" onClick={()=> manejarFavorito(proyect)}/>
              }
              <div className="like">
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g className="svg" id="SVGRepo_iconCarrier">
                    {/*M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z"*/}
                    <path  d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z" ></path>
                  </g>
                </svg>
              </div>
            </label>
            {/*</Button>*/}
          </div>
          <Card.Img
            variant="top"
            src={proyect.image ? proyect.image : GH}
            alt={proyect.name}
            className="mx-auto "
          />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{proyect.name}</Card.Title>
          
          <Card.Text>{proyect.description}</Card.Text>
          {/*demo !== "" ? (
            <Card.Link href={demo}>
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null*/}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={proyect.url}>
            {"View on GitHub "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}