import { useEffect, useRef, useState } from "react";
import profilePicture from "../assets/Profilbild.jpg"


function Home({ observer, observer2 }) {
    const [currentDate, setCurrentDate] = useState("");
    const imgRef = useRef(null);

    const [windowWidth, setCurrentWidth] = useState(window.innerWidth);

    //#region Funktion som räknar ut ålder
    function calculateAge() {
        const birthYear = 2000;
        const birthMonth = 8;
        const birthDate = 24;
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDate = new Date().getDate(); // Ändra från getDay till getDate

        let age;

        if (currentMonth > birthMonth || (currentMonth === birthMonth && currentDate >= birthDate)) {
            age = currentYear - birthYear;
        } else {
            age = currentYear - birthYear - 1;
        }

        setCurrentDate(age);
    }

    useEffect(() => {
        calculateAge();
    }, []);
    //#endregion

    useEffect(() => {
        // Hämtar ut all text
        const textElements = document.querySelectorAll(".textMoveRight");

        // Loopar igenom alla texter
        textElements.forEach(text => {
            observer.observe(text);
        });

        // Hämtar ut alla bilder
        const imgElements = document.querySelectorAll("img");

        // Observer som kollar alla bilder
        const imgObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Tar bort klassen rotate
                    entry.target.classList.remove("rotate");
                }
            });
        }, {
            // Sker när hela bilden är synlig
            threshold: 1,
        });

        // Går igenom alla bilderna och observerar dem
        imgElements.forEach(img => {
            imgObserver.observe(img);
        });

        const handelResize = () => { setCurrentWidth(window.innerWidth) }

        window.addEventListener("resize", handelResize)

        const currentProjectRef = document.querySelector(".currentProject");

        if (currentProjectRef) {
            if (windowWidth <= 425) {
                observer2.observe(currentProjectRef);
            }
            else if (currentProjectRef.classList.contains("opacityAfter")) {
                currentProjectRef.classList.remove("opacityAfter");
            }
        }

    });

    return (
        <>
            <div className="container-fluid" id="Home">
                <div className="row">
                    <div className="col-12 col-md-4 bgProfilePicture">
                        <div className="row p-md-3">
                            <div className="d-flex justify-content-center align-items-center bgProfilePicture profile-margin mt-sm-2 mt-md-5  mb-sm-2 mb-md-0">
                                <img src={profilePicture} alt="ProfilePicture" className=" rotate rounded img-fluid  profilePicture mt-md-5" ref={imgRef} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-1"></div>

                    <div className="col-12 col-md-7 mt-md-5 infoBackground">
                        <div className="row mt-md-5 ">
                            <div className="d-none d-md-block col-4 col-md-4 fontHome textMoveRight mt-md-5 infoText">
                                <p>Namn</p>
                            </div>
                            <div className="col-8 col-md-8 fontHome textMoveRight mt-md-5 infoText">
                                <p>Daniel Frisk</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-none d-md-block col-4 col-md-4 fontHome textMoveRight infoText">
                                <p>Ålder</p>
                            </div>
                            <div className="col-8 col-md-8 fontHome textMoveRight infoText">
                                <p>{currentDate} år</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-none d-md-block col-4 col-md-4 fontHome textMoveRight infoText">
                                <p>Stad</p>
                            </div>
                            <div className="col-8 col-md-8 fontHome textMoveRight infoText">
                                <p>Karlstad</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-none d-md-block col-4 col-md-4 fontHome textMoveRight infoText">
                                <p>E-mail</p>
                            </div>
                            <div className="col-sm-12 col-md-8 fontHome textMoveRight infoText">
                                <p>danielfrisk21@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 fontHome textMoveRight d-none d-md-block infoText">
                                <p>Webbutvecklarstudent på Handelshögskolan vid Karlstads universitet</p>
                            </div>
                            <div className="col-12 fontHome textMoveRight d-block d-md-none infoText">
                                <p>Webbutvecklarstudent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 bgProfilePicture">
                        <div className="row">
                            <div className="d-flex justify-content-center align-items-center mt-5 mt-md-0">
                                <div className="divBorder align-items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-linkedin linkedInColor me-1 mb-2" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                    <a href="https://www.linkedin.com/in/daniel-frisk-2b1295251/" target="_blank" className="text-decoration-none fs-3 socialMediaText">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-center mb-5 mt-3">
                                <div className="divBorder align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" target="_blank" width="30" height="30" className="bi bi-github linkedInColor me-1 mb-2" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                    <a href="https://github.com/Dackefrsik" target="_blank" className="text-decoration-none fs-3 socialMediaText">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 d-none d-sm-block"></div>
                    <div className="col-12 col-md-3 backgorund-sm">
                        <div className="d-flex justify-content-center flex-wrap d-md-block">
                            <p className="textColor-sm textColor-md d-md-none">Current/ Latest Project </p>
                            <p className="textColor-sm textColor-md d-none d-md-block">Current Project </p>
                        </div>
                        <div className="bgProfilePicture mb-3 rounded-1">
                            <div className="d-flex justify-content-center">
                                <a href="https://github.com/Dackefrsik/Solvalla-Trav-Publikapp" target="_blank" className="currentProject">
                                    <img alt="Snake_game" className="img-fluid mb-2 mb-md-0 opacityBefore" src="https://github-readme-stats.vercel.app/api/pin/?username=Dackefrsik&repo=Solvalla-Trav-Publikapp&theme=cobalt2"></img>
                                </a>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-clockwise d-none d-md-flex align-itmes-start arrow" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-1 d-none d-sm-block"></div>


                </div>
            </div>
        </>
    )
}



export default Home;