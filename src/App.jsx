
import { useEffect, useState } from "react";
import Navbar from "./mainParts/Navbar"
import Body from "./mainParts/Body"
import Footer from "./mainParts/Footer"
import LoadingScreen from "./OtherParts/LoadingScreen";
import WordSlider from "./OtherParts/WordSlider";

import coverImage from "../src/assets/CoverImage/Cover2.jpg";


function App() {

  //Vekrot innehållande texten som skrivs fram på första sidan
  const phrases = [
    "Web Development",
    "System Design",
    "Frontend",
    "Backend"
  ];

  const [loading, setImageLoaded] = useState(true);

   //#region singel observer Observer innehåll som ska in från höger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Image ", entry.target);
          // Lägg till klassen som gör att elementet visas
          entry.target.classList.add("textApear");
        }
      });
    },
    {
      // Görs när åtminstone 25% av elementet är i bild
      threshold: 0.25,
    }
  );
  //#endregion

  useEffect(() => {
    const img = new Image();
    img.src = coverImage; // samma bild som i CSS
    img.onload = () => setImageLoaded(false);
    img.onerror = () => setImageLoaded(false);
}, []);

  if (loading) return <LoadingScreen />;


  return (
    <>
      <Navbar observer={observer}/>
      {!loading && (<div className="space" style={{backgroundImage : `url(${coverImage})`,  backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}>
        <div className="d-flex justify-content-center flex-column align-items-center vh-100 welcome opacityBefore">
          <h1 className="welcomeText">Welcome!</h1>
          <WordSlider  phrases={phrases} typingSpeed={60} deletingSpeed={50} delayAfterTyped={1500} delayBeforeStart={500}/>
          <a href="#Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>   
          </a>
        </div>
      </div>)}
      <Body observer={observer}/>
      <Footer/>
    </>
  )
}

export default App
