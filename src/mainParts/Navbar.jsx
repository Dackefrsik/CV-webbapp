import { useRef, useState, useEffect } from "react";

function Navbar() {
    const collapseRef = useRef(null); // Ref för menypanelen
    const menuButton = useRef(null); // Ref för hamburgarknappen

    const [isRounded, setRounded] = useState(true); // State för höger border-radius (fixad namngivning)
    const [isMenuOpen, setMenuOpen] = useState(false); // Kontrollerar om menyn är öppen (fixad namngivning)


    // State för hamburgarknappens synlighet baserat på skrollposition
    // VIKTIGT: Sätts till 'false' från början så att knappen är DOLD vid laddning av sidan.
    const [isHamburgerVisibleByScroll, setHamburgerVisibleByScroll] = useState(false);

    // Funktion för att öppna och stänga hamburgarmenyn (en kombinerad funktion är oftast bäst)
    const toggleMenu = () => {
        setRounded(prev => !prev);
        setMenuOpen(prev => !prev);
        if (menuButton.current) {
            // Uppdaterar aria-expanded baserat på det nya tillståndet för menyn
            menuButton.current.setAttribute("aria-expanded", String(!isMenuOpen));

        }
    };

    // Stänger menyn när man klickar utanför (eller via meny-länkar)
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Använder den konsekventa namngivningen isMenuOpen
            if (isMenuOpen && collapseRef.current && !collapseRef.current.contains(event.target) && menuButton.current && !menuButton.current.contains(event.target)) {
                setMenuOpen(false);
                setRounded(true);
                if (menuButton.current) {
                    menuButton.current.setAttribute("aria-expanded", "false");
                }

            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        // Städa upp eventlyssnaren när komponenten unmountas eller beroenden ändras
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen, setMenuOpen, setRounded, menuButton]);

    // Effekt för skroll-baserad synlighet av *hamburgarknappen*
    useEffect(() => {
        const handleScroll = () => { // Ändrat från handelScroll till handleScroll för konsekvens
            const windowHeight = window.scrollY; // Hur långt användaren har skrollat ner
            // Tröskel: Hamburgaren visas när man skrollat 50% av viewport-höjden.
            // Ändra '0.5' till ett annat värde (t.ex. 0.1 för 10%) eller en fast pixel (t.ex. 150)
            const scrollThreshold = window.innerHeight * 0.5;

            // Kontrollera om skärmen är "liten" (t.ex. under 768px, Bootstrap's md-brytpunkt)
            const isSmallScreen = window.matchMedia("(max-width: 767.98px)").matches;

            // FELSÖKNING: Logga dessa värden för att se vad som händer
            /* console.log("--- Scroll Event ---");
            console.log("windowHeight:", windowHeight);
            console.log("scrollThreshold:", scrollThreshold);
            console.log("isSmallScreen:", isSmallScreen);
            console.log("isHamburgerVisibleByScroll (before logic):", isHamburgerVisibleByScroll); */


            // Applicera skroll-logiken ENDAST på små skärmar
            if (isSmallScreen) {
                if (windowHeight > scrollThreshold) {
                    console.log("ses")
                    setHamburgerVisibleByScroll(true); // Visa hamburgaren
                    document.querySelector('.hamburger-hidden-on-scroll').classList.add('show');

                } else {
                    setHamburgerVisibleByScroll(false); // Dölj hamburgaren
                    // Stäng även menyn om den var öppen och vi skrollar tillbaka upp
                    if (isMenuOpen) { // Använder isMenuOpen (konsekvent namngivning)
                        setMenuOpen(false);
                        setRounded(true);
                        if (menuButton.current) {
                            menuButton.current.setAttribute("aria-expanded", "false");
                        }
                    }
                    document.querySelector('.hamburger-hidden-on-scroll').classList.remove('show');

                }
            } else {
                // På stora skärmar ska hamburgarknappen alltid vara synlig, oavsett skroll
                setHamburgerVisibleByScroll(true);
            }
            //console.log("isHamburgerVisibleByScroll (after logic):", isHamburgerVisibleByScroll);
        };

        // Lägg till eventlyssnaren när komponenten mountas
        window.addEventListener("scroll", handleScroll);
        // Städa upp eventlyssnaren när komponenten unmountas
        // VIKTIG KORRIGERING: return () => window.removeEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen, setMenuOpen, setRounded, isHamburgerVisibleByScroll]); // Beroenden för att trigga omvärdering vid state-ändringar


    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="w-100 d-flex justify-content-center">
                    <div className="d-sm-block d-md-flex align-items-start justify-content-center justify-content-md-center navBackground">
                        <button
                            // VIKTIG KORRIGERING: HÄR APPLICERAS KLASSEN FÖR ATT DÖLJA/VISA KNAPPEN
                            // Använder '!' för att dölja när 'isHamburgerVisibleByScroll' är false
                            className={`custom-toggler ${isRounded ? "border-right-radius" : ""} 
                            hamburger-hidden-on-scroll 
                            ${(isHamburgerVisibleByScroll || isMenuOpen) ? "show" : "hide"}
                            `}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            //aria-expanded={isMenuOpen} // Koppla till isMenuOpen state
                            aria-label="Toggle navigation"
                            ref={menuButton}
                            onClick={toggleMenu}>
                            {/* Använd den kombinerade toggleMenu-funktionen */}



                            <span className="navbar-toggler-top"></span>
                            <span className="navbar-toggler-middle"></span>
                            <span className="navbar-toggler-bottom"></span>
                        </button>
                        {/* VIKTIGT: Menypanelen (div.collapse) ska INTE ha 'hamburger-hidden-on-scroll' klassen.
                            Dess synlighet styrs enbart av 'isMenuOpen' och Bootstrap's 'show' klass. */}
                        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""} `} id="navbarNavAltMarkup" ref={collapseRef}>
                            <div className="me-md-5 navbar-nav">
                                <ul className="d-md-flex flex-row mt-3">
                                    <li>
                                        <a className="active m-2" aria-current="page" href="#Home" onClick={toggleMenu}>Home</a>
                                    </li>
                                    {/* <li>
                                        <a className="m-2" href="#Tekniks" onClick={toggleMenu}>Programming Techniques</a>
                                    </li> */}
                                    <li>
                                        <a className="m-2" href="#Projects" onClick={toggleMenu}>Projects</a>
                                    </li>
                                    <li>
                                        <a href="#Career" className="m-2" onClick={toggleMenu}>Career</a>
                                    </li>
                                    <li>
                                        <a className="m-2" href="#Hobie" onClick={toggleMenu}>Hobbies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;