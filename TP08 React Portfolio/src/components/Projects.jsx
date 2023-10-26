import { useEffect, useState } from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import { selectData, selectError, selectIsLoading} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";
export default function Projects() {

  const [mainProjects, setMainProjects] = useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  console.log(data)
  

  useEffect(
    ()=>{
      if(data.length >0){
        setMainProjects(data.slice(0,3))
       }
    },[data]
  );
  //console.log(data.image)
  

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          {mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainProjects.map((proy) =>{
                  return (
                    <Col key={proy.id}>
                      <StyledCard proyect={proy} />
                    </Col>
                  );
                })}
              </Row>
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <Icon icon="icomoon-free:github" /> Projects
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )}
        </Container>
      </section>
    </Element>
  );
}
