import { useParams } from "react-router-dom";

const Persona = () => {
 const { personaId } = useParams();
 
 return (
   <div>
     ACA MOSTRAMOS LOS DATOS DE LA PERSONA CORRESPONDIENTE A ESA PERSONAID: {`ID: ${personaId}`}
   </div>
 );
};
export default Persona;