import { useEffect } from "react";

function Teknikals({ observer }) {

    //#region useEffect för bilderna på programmeringstekniker
    useEffect(() => {

        //Hämtar alla bildr
        let imgRefs = document.querySelectorAll("img")

        //Går igenom alla bilderna och observerar dem
        imgRefs.forEach(img => {
            observer.observe(img);
        })
    })
    //#endregion


    return (
        <div id="Tekniks" className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 bgProfilePicture d-flex flex-col justify-content-center mb-2 mb-md-0">
                    <p className="textColor d-sm-none d-md-block">Programming Techniques</p>

                    <p className="textColor d-md-none">Programming</p>
                    <p className="textColor d-md-none">Techniques</p>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 bgProfilePicture d-flex justify-content-center mb-2 mb-md-0">
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" className="w-75 h-75 imageToRight  " />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" className="w-75 h-75 imageToRight  " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" className="w-75 h-75 imageToRight  " />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" className="w-75 h-75 imageToRight  " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" className="w-75 h-75 imageToRight  " />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" className="w-75 h-75 imageToRight  " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/Java-F8981D?style=for-the-badge&logo=java&logoColor=white" alt="Java" className="w-75 h-75 imageToRight " />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" className="w-75 h-75 imageToRight  " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/C%23%20.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white" alt="C# .NET" className="w-75 h-75 imageToRight  " />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="WordPress" className="w-75 h-75 imageToRight  " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" className="w-75 h-75 imageToRight  " />
                </div>

                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL" className="w-75 h-75 imageToRight  " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" className="w-75 h-75 imageToRight  " />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="w-75 h-75 imageToRight  " />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" className="w-75 h-75 imageToRight" />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="w-75 h-75 imageToRight" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" className="w-75 h-75 imageToRight" />
                </div>
                <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
                    <img src="https://img.shields.io/badge/REST%20API-009688?style=for-the-badge&logo=api&logoColor=white" alt="REST API" className="w-75 h-75 imageToRight" />
                </div>
            </div>
        </div>
    )
}


export default Teknikals;