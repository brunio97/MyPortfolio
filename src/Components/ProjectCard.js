import { Col, } from "react-bootstrap";

function ProjectCard ({title,description,imgUrl,link}){

    return (
   
            <div className="proj-imgbx">
                <a href={link}target="_blank"  ><img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div></a>
                
            </div>
            
    
    );
}
export default ProjectCard;