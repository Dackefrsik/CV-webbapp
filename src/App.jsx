
import Navbar from "./mainParts/Navbar"
import Body from "./mainParts/Body"
import Footer from "./mainParts/Footer"
//import LoadingScreen from "./LoadingScreen";

import WordSlider from "./OtherParts/WordSlider";



function App() {

  //Vekrot innehållande texten som skrivs fram på första sidan
  const phrases = [
    "Web Development",
    "System Design",
    "Frontend",
    "Backend"
  ];

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


  return (
    <>
      <Navbar observer={observer}/>
      {<div className="space">
        <div className="d-flex justify-content-center flex-column align-items-center vh-100 welcome opacityBefore">
          <h1>Welcome!</h1>
          <WordSlider  phrases={phrases} typingSpeed={60} deletingSpeed={50} delayAfterTyped={1500} delayBeforeStart={500}/>
          <a href="#Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>   
          </a>
        </div>
      </div>}
      <Body observer={observer}/>
      <Footer/>
    </>
  )
}

export default App
