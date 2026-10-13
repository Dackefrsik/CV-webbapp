import { useEffect, useState} from "react"

import "../../style/style.css"

import weatherappp from "../assets/Mockups/weateherapp.png"
import tennisbooking from "../assets/Mockups/tennnisbooking.png"
import snakegame from "../assets/Mockups/snakegame.png"
import ponggame from "../assets/Mockups/ponggame.png"
import chattapplication from "../assets/Mockups/chattapplication.png"
import pokemonmobileapplication from "../assets/Mockups/pokemonmobileapplication.png"
import todoapp from "../assets/Mockups/todoapp.png"
import tournamentwebbapp from "../assets/Mockups/tournamentwebbapp.png"
import Cuppsatts from "../assets/Mockups/Omslag examensarbete.png"
import artistino from "../assets/Mockups/artistino.jpg"
import sudoku from "../assets/Mockups/sudoku.png"
import objectdetectionmodel from "../assets/Mockups/Objectdetectionmodel.png"

//Komponent som visar projekt
function Projects({ observer }) {

    const techniques = [
        {name : "Web Development"},
        {name : "App Development"},
        {name : "JavaScript"},
        {name : "React.js"},
        {name : "Tailwind css"},
        {name : "Bootstrap"},
        {name : "Api"},
        {name : "Java"},
        {name : "Python"},
        {name : "Thesis"},
        {name : "Machine Learning"},
        {name : "Object detection"}
    ]

    const Projects = [
        {name : "Weather application", link : "https://github.com/Dackefrsik/Weatherapp", img : weatherappp, techniques : ["Web Development", "HTML & CSS", "JavaScript", "Node.js", "Api", "Bootstrap"]},
        {name : "Tennis booking", link : "https://github.com/Dackefrsik/Tennis-booking", img : tennisbooking, techniques : ["Web Development", "HTML & CSS", "JavaScript", "Bootstrap"]},
        {name : "Snake game", link : "https://github.com/Dackefrsik/Snake_game", img : snakegame, techniques : ["Java"]},
        {name : "Pong game", link : "https://github.com/Dackefrsik/PongGame", img : ponggame, techniques : ["Java"]},
        {name : "Chat application", link : "https://github.com/Dackefrsik/Chatapplication-", img : chattapplication, techniques : ["Web Development", "HTML & CSS", "JavaScript", "React.js", "Node.js", "Bootstrap"]},
        {name : "Mobile Pokemon app", link : "https://github.com/Dackefrsik/Mobile-Pokemon-app", img : pokemonmobileapplication, techniques : ["App Development", "TypeScript", "React-native", "Api"]},
        {name : "To-Do app", link : "https://github.com/Dackefrsik/To-do-app", img : todoapp, techniques : ["App Development", "TypeScript", "React-native"]},
        {name : "Tournament webbapp", link : "https://github.com/Dackefrsik/Tournament-webbapp", img : tournamentwebbapp, techniques : ["Web Development", "HTML & CSS", "JavaScript", "React.js", "Bootstrap"]},
        {name : "Bachelor's thesis", link : "https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1966488&dswid=9917", img: Cuppsatts, techniques : ["Thesis"]},
        {name : "Artistino discord bot", link : "https://github.com/Dackefrsik/Artistino-discord-bot", img : artistino, techniques : ["Python", "Api"]},
        {name: "Sudoku", link : "https://github.com/Dackefrsik/Suduko", img : sudoku, techniques : ["Web Development", "HTML & CSS", "JavaScript", "React.js", "Tailwind css"]},
        {name: "Object detection model for Rock paper scissor", link : "https://github.com/Dackefrsik/Object-Detection-Model", img : objectdetectionmodel, techniques : ["Python", "Machine Learning", "Object detection"]}
    ]

    const [filteredProjects, setFilteredProjects] = useState(Projects);
    const [selectedTechnique, setSelectedTechnique] = useState(null);
    const [isSelecte, setIsSelected] = useState(false)

    /*#region useefect som kör animationer*/
    useEffect(() => {

        //Hämtar ut alla bilder i komponenten
        let imgRef = document.querySelectorAll(".opacityBefore");
        //IntersectObserver som visar bilderna genom att sätta opaciteten till 1

        //Lopar igenom alla bilder och observerar dem
        imgRef.forEach(img => {
            observer.observe(img);
        })
    })

    function createButtons() {
        
        return techniques.map((technique, index) => (
                <div className="col-md-auto col-6 d-flex justify-content-evenly justify-content-md-center flex-wrap" key={index}>
                    <button className={selectedTechnique === technique.name ? "btn btn-success m-2 w-100" : "btn btn-light m-2 w-100"}  onClick={() => filterProjects(technique.name)}>{technique.name}</button>
                </div>
            )
        )        
    }

    function showProjects(){
        return filteredProjects.map((project, index) => (
            <div key={index} className="m-1 mt-3 mb-3 col-12 col-md-3 lightBackground rounded-2 p-2 project-card d-flex flex-column opacityBefore">
                <div className="d-flex justify-content-center">
                    <a href={project.link} target="_blank" className="mb-2">
                        <img alt={project.name} className="img-fluid mb-2 mb-md-0" src={project.img}></img>
                    </a>
                </div>
                <div className="mt-auto">
                    <h5>{project.name}</h5>
                    <div className="d-flex flex-wrap mt-2">
                        
                        {project.techniques.map((technique, i) => (
                            <>
                                {technique !== "Thesis" ?  
                                <p key={i} className="me-1 techniqueButtons rounded-2 text-light p-1">
                                    {technique }
                                </p> : <></>}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        ))
    }

    function filterProjects(technique) {
        if (selectedTechnique === technique) {
            // Om samma knapp trycks igen → visa alla
            setFilteredProjects(Projects);
            setSelectedTechnique(null);
        } else {
            // Annars filtrera
            const filtered = Projects.filter(project =>
                project.techniques.includes(technique)
            );
            setFilteredProjects(filtered);
            setSelectedTechnique(technique);
        }
    }

    function createDropDown(){
        return(
           <div className="rounded-2 bg-light">
                <select className="p-2 border-0 custom-select" 
                    onChange={(e) => filterProjects(e.target.value)} 
                    onClick={() =>(setIsSelected(!isSelecte))}
                    onBlur={() => setIsSelected(false)}>
                    {createOptions()}
                
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={`bi ${isSelecte ? "rotated" : "bi-caret-down-fill"} `} viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </div>
        )
    }

    function createOptions(){

        let optionList = [{name : "All Projects"}, ...techniques]

        return optionList.map((option, i) => (
            <option key={i} value={option.name} className="rounded-2">
                {option.name}
            </option>
        ))
    }

    return (
        <div id="Projects" className="container-fluid bgProfilePicture">
            <div className="row opacityBefore ">
                <div className="col-12 d-flex justify-content-center">
                    <p className="textColor fs-2">Projects</p>
                </div>
            </div>
            <div className="row opacityBefore">
                <div className="d-none d-md-flex justify-content-center">{createButtons()}</div>
                <div className="d-flex d-md-none justify-content-center">{createDropDown()}</div>
            </div>
            <div className="row ">
                <div className="p-2 ps-4 pe-4 d-flex justify-content-evenly flex-wrap">
                    {showProjects()}
                </div>
                
            </div>
        </div>       
    )

}

export default Projects