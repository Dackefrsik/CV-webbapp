import { useEffect } from "react"

export default function Career({observer, observer2}){

    const careers = [
        {work: "Jula", title: "Store assistant", time : "February 2020 - now", description : "As a store assistant at Jula, I have had responsibilities in both customer service and logistics. I have handled the cash register and customer service as well as driving a forklift and picking goods in the warehouse. Through the work tasks, I have developed my communication skills and developed my abilities to take responsibility and collaborate with others."},
        {work: "Lidl", title: "Store assistant", time : "June 2019 - December 2019", description : "My duties included working at the cash register, picking goods and helping and guiding customers on the floor. This has helped me develop my communication skills and taught me how to handle a fast and stressful pace."},
        {work: "Täby Judo", title: "Clubb Trainer", time : "August 2015 - May 2022", description : "Under mina år som klubbtränare har jag haft ansvar för att leda träningspass av olika slag för barn och ungdomar mellan 7 till 15 år och utvecklat färdigheter inom ledarskap, pedagogik och kommunikation."},
    ]

    const educations = [
        {education: "Master in Informatics at the School of Business, Economics and Law at Karlstad University", time : "Septmber 2025 - now", description : "Master's degree with a focus on research and practical aspects in informatics"},
        {education: "Web Developer Program at the School of Business, Economics and Law at Karlstad University", time : "August 2022 - June 2025", description : "Bachelor's level education in informatics with a focus on programming, user testing and UML. The teaching has focused on programming different types of applications, web and mobile apps, conducting user testing and creating UML diagrams."},
        {education: "Teknik media Väsby nya gymnasium", time : "August 2016 - June 2019", description : "Ground level upper secondary education with a focus on programming and mathematics"},

    ]
    
    useEffect(() => {
        let leftCareerRef = document.querySelectorAll(".leftCareer");

        leftCareerRef.forEach((left) => {
            console.log("left");
            observer2.observe(left);
        })

        let rightCareerRef = document.querySelectorAll(".rightCareer");

        rightCareerRef.forEach((right) => {
            console.log("right")
            observer.observe(right);
        })
    }, [])

    function renderCareer(){
        return careers.map((careers, index) => {
            if(index % 2 == 0){
                return (
                <div className="row">
                    <div className="col-5 d-flex justify-content-center ps-5">
                        <div className="card bgProfilePicture textColorWhite border-0 rounded-4 m-3 leftCareer" style={{ width: "100%" }}>
                            <div className="card-body p-4 ">
                                <h3 className="card-title fw-bold">{careers.work}</h3>
                                <p className="fs-4 fw-semibold">{careers.title}</p>
                                <p className="fs-4 text-light opacity-75">{careers.time}</p>
                                <p className="fs-6">{careers.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 container timeLine-container d-flex justify-content-center">
                        <div className="timeLine mb-2 d-flex justify-content-center">
                            <span className="roundDot mb-5">
                            </span>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            )}
            else  if(index % 2 !== 0){
                return (
                <div className="row">
                        <div className="col-5 d-flex justify-content-center">
                        </div>
                        <div className="col-2 container timeLine-container d-flex justify-content-center">
                        <div className="timeLine mb-2 d-flex justify-content-center">
                            <span className="roundDot mb-5">
                            </span>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-center pe-5">
                        <div className="card bgProfilePicture textColorWhite border-0 rounded-4 m-3 rightCareer" style={{ width: "100%" }}>
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold">{careers.work}</h3>
                                    <p className="fs-4 fw-semibold">{careers.title}</p>
                                    <p className="fs-4 text-light opacity-75">{careers.time}</p>
                                    <p className="fs-6">{careers.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
            )}
        })
    }

    function renderEducations(){
        return educations.map((educations, index) => {
            if(index % 2 !== 0){
                return (
                <div className="row">
                    <div className="col-5 d-flex justify-content-center ps-5">
                        <div className="card bgProfilePicture textColorWhite border-0 rounded-4 m-3 leftCareer" style={{ width: "100%" }}>
                            <div className="card-body p-4 ">
                                <h3 className="card-title fw-bold">{educations.education}</h3>
                                <p className="fs-4 text-light opacity-75">{educations.time}</p>
                                <p className="fs-6">{educations.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 container timeLine-container d-flex justify-content-center">
                        <div className="timeLine mb-2 d-flex justify-content-center">
                            <span className="roundDot mb-5">
                            </span>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            )}
            else  if(index % 2 == 0){
                return (
                <div className="row">
                        <div className="col-5 d-flex justify-content-center">
                        </div>
                        <div className="col-2 container timeLine-container d-flex justify-content-center">
                        <div className="timeLine mb-2 d-flex justify-content-center">
                            <span className="roundDot mb-5">
                            </span>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-center pe-5">
                        <div className="card bgProfilePicture textColorWhite border-0 rounded-4 m-3 rightCareer" style={{ width: "100%" }}>
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold">{educations.education}</h3>
                                    <p className="fs-4 text-light opacity-75">{educations.time}</p>
                                    <p className="fs-6">{educations.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
            )}
        })
    }

    return(
        <>
            <div id="Career" className="container-fluid lightBackground">
                <div className="row ">
                    <div className="col-12 d-flex flex-col justify-content-center mb-2">
                        <h2 className="headerWhite d-sm-none d-md-block">
                            Career
                        </h2>
                    </div>
                    
                </div>
                {renderCareer()}
            </div>
            <div id="Educations" className="container-fluid lightBackground">
                <div className="row ">
                    <div className="col-12 d-flex flex-col justify-content-center mb-2">
                        <h2 className="headerWhite d-sm-none d-md-block">
                            Educations
                        </h2>
                    </div>
                    
                </div>
                {renderEducations()}
            </div>
        </>
    )
}