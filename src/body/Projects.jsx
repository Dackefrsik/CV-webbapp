import { useEffect } from "react"

//Komponent som visar projekt
function Projects({ observer }) {

    /*#region useefect som kör animationer*/
    useEffect(() => {

        //Hämtar ut alla bilder i komponenten
        let imgRef = document.querySelectorAll("img");


        //IntersectObserver som visar bilderna genom att sätta opaciteten till 1


        //Lopar igenom alla bilder och observerar dem
        imgRef.forEach(img => {
            observer.observe(img);
        })

    })



    return (
        <div id="Projects" className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 bgProfilePicture d-flex justify-content-center">
                    <p className="textColor">Projects</p>
                </div>
                <div className="col-md-8 bgProfilePicture"></div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1 bgProfilePicture"></div>
                <div className="d-none d-md-block col-md-7 bgProfilePicture p-md-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML5" className="imgProjects programingImagePosition opacityBefore" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS3" className="imgProjects programingImagePosition opacityBefore" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" className="imgProjects programingImagePosition opacityBefore" />
                    <img src="https://camo.githubusercontent.com/34c801e15a80d0d62f3da09bc6ca4f46a243457939381ae67f5003bdac51d432/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d706c61696e2e737667" alt="JavaScript" className="imgProjects programingImagePosition opacityBefore" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1 bgProfilePicture"></div>
                <div className="col-12 col-md-7 bgProfilePicture p-md-2 d-flex d-md-block justify-content-center">
                    <div>
                        <a href="https://github.com/Dackefrsik/Weatherapp" target="_blank" className="mb-2">
                            <img alt="Weather application" className="img-fluid mb-2 mb-md-0 opacityBefore" src="https://github-readme-stats.vercel.app/api/pin/?username=Dackefrsik&repo=Weatherapp&theme=cobalt2"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1 bgProfilePicture"></div>
                <div className="col-12 col-md-7 bgProfilePicture p-md-2 d-flex d-md-block justify-content-center">
                    <div>
                        <a href="https://github.com/Dackefrsik/Tennis-booking" target="_blank" className="mb-2">
                            <img alt="Tennis-booking" className="img-fluid mb-2 mb-md-0 opacityBefore" src="https://github-readme-stats.vercel.app/api/pin/?username=Dackefrsik&repo=Tennis-booking&theme=cobalt2"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1 bgProfilePicture"></div>
                <div className="d-none d-md-block col-md-7 bgProfilePicture p-md-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="imgProjects programingImagePosition me-2 opacityBefore" />
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1 bgProfilePicture"></div>
                <div className="col-12 col-md-7 bgProfilePicture p-md-2 d-flex d-md-block justify-content-center">
                    <div>
                        <a href="https://github.com/Dackefrsik/Tournament-webbapp" target="_blank" className="mb-2">
                            <img alt="Tournament-webbapp" className="img-fluid mb-2 mb-md-0 opacityBefore" src="https://github-readme-stats.vercel.app/api/pin/?username=Dackefrsik&repo=Tournament-webbapp&theme=cobalt2"></img>
                        </a>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1 bgProfilePicture"></div>
                <div className="d-none d-md-block col-12 col-md-7 bgProfilePicture p-md-2 d-flex d-md-block justify-content-center">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        alt="React Native"
                        className="imgProjects programingImagePosition me-2 opacityBefore"
                    />
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        alt="TypeScript"
                        className="imgProjects programingImagePosition me-2 opacityBefore"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1 bgProfilePicture"></div>
                <div className="col-12 col-md-7 bgProfilePicture p-md-2 d-flex d-md-block justify-content-center">
                    <a href="https://github.com/Dackefrsik/Solvalla-Trav-Publikapp" target="_blank" className="mb-2">
                        <img alt="Solvalla-Trav-Publikapp" className="img-fluid mb-2 mb-md-0 opacityBefore" src="https://github-readme-stats.vercel.app/api/pin/?username=Dackefrsik&repo=Solvalla-Trav-Publikapp&theme=cobalt2"/>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1 bgProfilePicture"></div>
                <div className="d-none d-md-block col-md-7 bgProfilePicture p-md-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="imgProjects programingImagePosition me-2 opacityBefore" />
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1 bgProfilePicture"></div>
                <div className="col-12 col-md-block col-md-7 bgProfilePicture p-md-2 d-flex d-md-block justify-content-center">
                    <a href="https://github.com/Dackefrsik/Snake_game" target="_blank" className="mb-2">
                        <img alt="Snake_game" className="img-fluid mb-2 mb-md-0 opacityBefore" src="https://github-readme-stats.vercel.app/api/pin/?username=Dackefrsik&repo=Snake_game&theme=cobalt2"></img>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1 bgProfilePicture"></div>
                <div className="col-12 col-md-block col-md-7 bgProfilePicture p-md-2 d-flex d-md-block justify-content-center">
                    <a href="https://github.com/Dackefrsik/PongGame" target="_blank" className="mb-2">
                        <img alt="Snake_game" className="img-fluid mb-2 mb-md-0 opacityBefore" src="https://github-readme-stats.vercel.app/api/pin/?username=Dackefrsik&repo=PongGame&theme=cobalt2"></img>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Projects