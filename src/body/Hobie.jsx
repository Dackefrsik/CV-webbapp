import { useEffect } from "react";
import LennonWall from "../assets/LennonWall_Praha.jpg";
import OldTownRiga from "../assets/Old_Town_Riga.jpg";
import Nyhaven from "../assets/Nyhaven_Kopenhagen.jpg";
import The_Bee_Gees from "../assets/The_Bee_Gees.jpg";
import Tempelbar from "../assets/Tempelbar_Dublin.jpg";
import Fjak from "../assets/FjakChockletBergen.jpg";

function Hobie({ observer}) {

    //Vektor med objekt för att visa alla bilderna med 
    const images = [
        {fileName : LennonWall, year : 2021, text : "Lennon Wall Prague"},
        {fileName : OldTownRiga, year : 2023, text : "Old Town Riga"},
        {fileName : Nyhaven, year : 2023, text : "Nyhavn Copenhagen"},
        {fileName : The_Bee_Gees, year : 2024, text : "The Bee Gess Douglas Isle of Man"},
        {fileName : Tempelbar, year : 2024, text : "Tempel Bar Dublin"},
        {fileName : Fjak, year : 2025, text : "Fjåk Choclate Bergen"},
    ]

    useEffect(() => {

        let imgContent = document.querySelectorAll(".imageHobieToRight");

        imgContent.forEach(img => {
            observer.observe(img);
        })
    }, [])

    //Funktion för att skriva ut bilderna som finns i assets för hobbie travele 
    function renderImages(){
        return images.map((image, index) => {
            console.log("index", index)
            if(index % 2 === 0){
                console.log("image show")
                return (<div className="row">
                    <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-3 pb-2">
                        <img src={image.fileName} alt={image.text} className="w-100 h-100 w-md-75 h-md-75 imageHobieToRight" />
                    </div>
                    <div className="col-12 col-md-2 d-flex align-items-center">
                        <p className="imageHobieToRight">{image.text}  {image.year}</p>
                    </div>
                </div>)
            }
            else if(index % 2 !== 0){
                console.log("image show other")
                return (<div className="row">
                    <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                    </div>
                    <div className="col-md-1"></div>
                    <div className="order-0 order-md-1 col-12 col-md-3 pb-2">
                        <img src={image.fileName} alt={image.text} className="w-100 h-100 w-md-75 h-md-75 imageHobieToRight" />
                    </div>
                    <div className="order-1 order-md-0 col-12 col-md-2 d-flex align-items-center">
                        <p className="imageHobieToRight">{image.text}  {image.year}</p>
                    </div>
                </div>)
            }
       })
    }

    return (
        <div id="Hobie" className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 bgProfilePicture d-flex justify-content-center">
                    <p className="textColor">Hobbies</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-7 d-flex justify-content-center d-md-block">
                    <p className="mt-2 imageHobieToRight fs-3">Travel</p>
                </div>
            </div>
            {renderImages()}
        </div>
    )
}

export default Hobie;