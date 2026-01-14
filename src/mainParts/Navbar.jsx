import { useRef, useState, useEffect } from "react";

function Navbar({observer}) {
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

    useEffect(() => {

        const navRef = document.querySelectorAll(".opacityBefore")

        navRef.forEach((nav) => {
            observer.observe(nav)
        })
    }, [])

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // Exempel: när man scrollat 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top w-100 opacityBefore">
                <div className="w-100 d-flex justify-content-sm-end justify-content-md-center">
                    <div className="d-sm-flex justify-content-sm-end w-100">
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
                            aria-expanded={isMenuOpen} // Koppla till isMenuOpen state
                            aria-label="Toggle navigation"
                            ref={menuButton}
                            onClick={toggleMenu}>
                            {/* Använd den kombinerade toggleMenu-funktionen */}
                            <span className="navbar-toggler-top"></span>
                            <span className="navbar-toggler-middle"></span>
                            <span className="navbar-toggler-bottom"></span>
                        </button>
                        <div className={`collapse navbar-collapse d-flex mt-5 mt-md-0 justify-content-end justify-content-md-between mb-2  ${isMenuOpen ? "show" : ""} `} id="navbarNavAltMarkup" ref={collapseRef}>
                            <ul className="d-md-flex flex-row mb-0 d-none mt-3">
                                    <li>
                                        <a className="active m-2" aria-current="page" href="#Home" onClick={toggleMenu}>Daniel</a>
                                    </li>
                                </ul>
                            <div className="me-md-5 navbar-nav">
                                
                                <ul className="d-md-flex flex-row mt-3 m-auto mb-0 navBackground rounded-4 p-2 p-md-o">
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
                                        <a className="m-2" href="#Educations" onClick={toggleMenu}>Educations</a>
                                    </li>
                                    <li>
                                        <a className="m-2" href="#Hobie" onClick={toggleMenu}>Hobbies</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-sm-none d-md-block">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;