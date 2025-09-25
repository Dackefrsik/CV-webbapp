import { useEffect } from "react";
import LennonWall from "../assets/LennonWall_Praha.jpg";
import OldTownRiga from "../assets/Old_Town_Riga.jpg";
import Nyhaven from "../assets/Nyhaven_Kopenhagen.jpg";
import The_Bee_Gees from "../assets/The_Bee_Gees.jpg";
import Tempelbar from "../assets/Tempelbar_Dublin.jpg";

function Hobie({ observer}) {

    useEffect(() => {

        let imgContent = document.querySelectorAll(".imageHobieToRight");

        imgContent.forEach(img => {
            observer.observe(img);
        })
    })


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
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 pb-2">
                    <img src={LennonWall} alt="Lennonwall_Praha" className="w-100 h-100 w-md-75 h-md-75 imageHobieToRight" />
                </div>
                <div className="col-12 col-md-2 d-flex align-items-center">
                    <p className="imageHobieToRight">Lennonwall Praha 2021</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="order-1 order-md-0 col-md-2 d-flex align-items-center">
                    <p className="imageHobieToRight">Old town Riga 2023</p>
                </div>
                <div className="col-md-3 order-md-1 pb-2">
                    <img src={OldTownRiga} alt="Old_Town_Riga" className="w-100 h-100 w-md-75 h-md-75 imageHobieToRight" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 pb-2">
                    <img src={Nyhaven} alt="Nyhavn" className="w-100 h-100 w-md-75 h-md-75 imageHobieToRight" />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                    <p className="imageHobieToRight">Nyhavn Copenhagen 2023</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="order-1 order-md-0 col-md-2 d-flex align-items-center">
                    <p className="imageHobieToRight">Douglas, Isle of Man 2024</p>
                </div>
                <div className="col-12 col-md-3 pb-2">
                    <img src={The_Bee_Gees} alt="The_Bee_Gees" className="w-100 h-100 w-md-75 h-md-75 imageHobieToRight" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 pb-2">
                    <img src={Tempelbar} alt="Tempelbar Dublin" className="w-100 h-100 w-md-75 h-md-75 imageHobieToRight" />
                </div>
                <div className="col-md-2 d-flex align-items-center"> 
                    <p className="imageHobieToRight">Tempelbar Dublin 2024</p>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-4 bgProfilePicture"></div>
                <div className="col-md-1"></div>
                <div className="col-7">
                    <p>Träna</p>
                </div>
            </div> */}
        </div>
    )
}

export default Hobie;