import cover from "../assets/Omslag examensarbete.png";

export default function Cuppsatts(){
    return(
        <div id="cUppsatts" className="container-fluid bg-white">
            <div className="row ">
                <div className="col-12 d-flex flex-col justify-content-center mb-2">
                    <h2 className="headerWhite d-sm-none d-md-block">
                        Bachelor's thesis
                    </h2>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center clickable-image cuppsatts mb-5">
                    <a href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1966488&dswid=9917" className="d-flex justify-content-center bgProfilePicture">
                        <img src={cover} alt="Front page of thesis" className="m-5 cover img-fluid"/>
                        <span className="overlay-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}