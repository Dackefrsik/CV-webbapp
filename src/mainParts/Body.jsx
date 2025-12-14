import Home from "../body/Home";
import Hobie from "../body/Hobie";
import Teknikals from "../body/Teknikals";
import Projects from "../body/Projects";
import { useEffect, useState } from "react";
import Career from "../body/career";
import { App } from "../body/LogoLoop";

function Body() {
  const [show, changeShow] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      const windowHeight = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      if (windowHeight > (scrollHeight - innerHeight) * 0.75) {
        changeShow(true);
      } else {
        changeShow(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    //return () => window.removeEventListener("scroll", handelScroll);

  }, []);

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

  //#region Observer som flyttar in från vänster
  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inLeft");
        }
      });
    },
    {
      //Görs när hela bilden är i synlig i y-led
      threshold: 0.25,
    }
  );
  //#endregion

  //#region tredje observern
  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacityAfter");
        }
      },
      {
        //Görs när hela bilden visas
        threshold: 0.5,
      }
    );
  });
  //#endregion

  return (
    <>

      <Home observer={observer} observer2={observer3} />
      {/* <App /> */}
      <Teknikals observer={observer2} />
      <Projects observer={observer3} />
      <Career observer={observer} observer2={observer2} observer3={observer3}/>
      <Hobie observer={observer} />
      {show && (
        <div className="d-flex justify-content-end">
        <a className={`slide-button ${show ? "show" : ""} rounded-4 me-2` } href="#Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"

            class="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
            />
          </svg>{" "}
        </a>
        </div>
      )}
    </>
  );
}

export default Body;
