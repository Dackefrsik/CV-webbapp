import { useRef, useState } from "react";

function Navbar() {

    //useState för att hantera klassen show på diven collapse
    const collapseRef = useRef(null);

    const menuButton = useRef(null);

    //useState för höger border-radius
    const [isRounded, steClass] = useState(true);

    //useState för att kolla om menyn är öppen
    const [isMenueOpen, setMenueOpen] = useState(false);

    //#region Funktioner för att öppna och stännga hamburgermenyn
    const openMenu = () => {
        if (isRounded == true) {
            steClass(false);
            setMenueOpen(true);
        }
        else if (isRounded == false) {
            steClass(true);
            setMenueOpen(false);
        }
    }

    const closeMenue = () => {
        if (isMenueOpen == true) {
            setMenueOpen(false);
            steClass(true);
            menuButton.current.removeAttribute("aria-expanded");
        }
    }
    //#endregion

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="w-100 d-md-block d-flex justify-content-end">
                    <div className="d-flex align-items-start justify-content-end">
                        <button className={`ms-5 ps-1 pe-1 pt-1 pb-1 custom-toggler ${isRounded ? "border-right-radius" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" ref={menuButton} onClick={openMenu}>
                            <span className="navbar-toggler-top"></span>
                            <span className="navbar-toggler-middle"></span>
                            <span className="navbar-toggler-bottom"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isMenueOpen ? "Show" : ""} `} id="navbarNavAltMarkup" ref={collapseRef}>
                            <div className="ms-md-5 navbar-nav">
                                <ul className="d-md-flex flex-row">
                                    <li>
                                        <a className="active m-2" aria-current="page" href="#Home" onClick={closeMenue}>Home</a>
                                    </li>
                                    <li>
                                        <a className="m-2" href="#Tekniks" onClick={closeMenue}>Programming Techniques</a>
                                    </li>
                                    <li>
                                        <a className="m-2" href="#Projects" onClick={closeMenue}>Projects</a>
                                    </li>
                                    <li>
                                        <a className="m-2" href="#Hobie" onClick={closeMenue}>Hobbies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;