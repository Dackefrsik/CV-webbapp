import { useEffect } from "react"

export default function Career({observer, observer2}){


    const careers = [
        {work: "Jula", title: "Customeremploye", time : "February 2020 - now", tasks : ["Cashier", "informationdesk", "customer help", "warehouse work", "truck driver", "goods picking"]},
        {work: "Lidl", title: "Customeremploye", time : "June 2019 - December 2019", tasks : ["Cashier", "customer help", "warehouse work", "goods picking"]},
        {work: "Täby Judo", title: "Klubb Trainer", time : "August 2015 - May 2022", tasks : ["Planing trainning sessions", "Lead training sessions", "Intructing partisipating students",  "Grade studenst"]},
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
                        <div className="card bgProfilePicture textColorWhite shadow-lg border-0 rounded-4 m-3 leftCareer" style={{ width: "100%" }}>
                            <div className="card-body p-4 ">
                                <h3 className="card-title fw-bold">{careers.work}</h3>
                                <h5 className="fw-semibold">{careers.title}</h5>
                                <p className="text-light opacity-75">{careers.time}</p>

                                <h5 className="mt-3">Tasks</h5>
                                <ul className="list-unstyled mt-2">
                                    {careers.tasks.map((task, index) => (
                                        <li key={index} className="mb-1">
                                            <i className="bi bi-check-circle me-2"></i>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
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
                        <div className="card bgProfilePicture textColorWhite shadow-lg border-0 rounded-4 m-3 rightCareer" style={{ width: "100%" }}>
                                <div className="card-body p-4">
                                    <h3 className="card-title fw-bold">{careers.work}</h3>
                                    <h5 className="fw-semibold">{careers.title}</h5>
                                    <p className="text-light opacity-75">{careers.time}</p>

                                    <h5 className="mt-3">Tasks</h5>
                                    <ul className="list-unstyled mt-2">
                                        {careers.tasks.map((task, index) => (
                                            <li key={index} className="mb-1">
                                                <i className="bi bi-check-circle me-2"></i>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            )}
        })
    }

    return(
        <div id="Career" className="container-fluid lightBackground">
            <div className="row ">
                <div className="col-12 d-flex flex-col justify-content-center mb-2">
                    <h2 className="headerWhite d-sm-none d-md-block">
                        Carrer
                    </h2>
                </div>
                
            </div>
            {renderCareer()}
        </div>
    )
}