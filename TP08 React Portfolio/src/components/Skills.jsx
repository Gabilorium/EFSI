import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import axios from 'axios';
import "../App.css"
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { useEffect, useState } from "react";  

export default function Skills() {
  //const initialSkills = localStorage.getItem("skills") ? JSON.parse(localStorage.getItem("skills")) : [];
  const [skillsList, setSkillList] = useState([/*initialSkills*/])
  const { theme } = useAppContext();

  useEffect(() => {    
    const getSkills = async () => {
      axios
        .get("Icons.json")
        .then((result) => {
          setSkillList(result.data);
          /*console.log(skillsList)*/
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getSkills();      
  }, []);

  /*useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skillsList))      
  }, [skillsList])*/
  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillsList.map((skills, id) => {
              console.log(skills.length)
              return(
               <Col xs={3} key={id} className="my-md-5">
                    <img className="skill-icon" src={skills.icon} alt={skills.name}/>
                    <p>{skills.name}</p>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}