import { useEffect} from "react";

function Teknikals({ observer }) {

  //Vektor för att hålla i alla tekniker jag kan
  const teknikals = [
    {src : "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", alt : "HTML5"}, 
    {src : "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", alt : "CSS"}, 
    {src : "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white", alt : "BootStrap"}, 
    {src : "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", alt : "JavaScript"}, 
    {src : "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", alt : "React.js"}, 
    {src : "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white", alt : "Node.js"}, 
    {src : "https://img.shields.io/badge/Java-F8981D?style=for-the-badge&logo=java&logoColor=white", alt : "Java"}, 
    {src : "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white", alt : "Android"}, 
    {src : "https://img.shields.io/badge/C%23%20.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white", alt : "C#.net"}, 
    {src : "https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white", alt : "Wordpress"}, 
    {src : "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white", alt : "PHP"}, 
    {src : "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white", alt : "SQL"}, 
    {src : "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white", alt : "C"}, 
    {src : "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white", alt : "Python"}, 
    {src : "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white", alt : "MySql"},
    {src : "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white", alt : "Github"},
    {src : "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white", alt : "Figma"},
    {src : "https://img.shields.io/badge/REST%20API-009688?style=for-the-badge&logo=api&logoColor=white", alt : "Rest API"},
    {src : "https://img.shields.io/badge/PlantUML-0D597F?style=for-the-badge&logo=uml&logoColor=white", alt : "PlantUml"},
    {src : "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white", alt : "TypeScript"},
  ]


  //#region useEffect för bilderna på programmeringstekniker
  useEffect(() => {
    //Hämtar alla bildr
    let imgRefs = document.querySelectorAll("img");

    //Går igenom alla bilderna och observerar dem
    imgRefs.forEach((img) => {
      observer.observe(img);
    });
  });
  //#endregion

  function renderTeknikals(){ 
    let tekinksPair = [];
    for(let i = 0; i < teknikals.length; i+=2){
      if(i < teknikals.length + 1)
        tekinksPair.push( 
          <div className="row">
          <div className="col-12 col-md-4 bgProfilePicture d-flex justify-content-center mb-2 mb-md-0"></div>
          <div className="col-md-1"></div>
          <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
            <img
              src={teknikals[i].src}
              alt={teknikals[i].alt}
              className="w-75 h-75 imageToRight"
            />
          </div>
          <div className="col-12 col-md-3 d-flex d-md-block justify-content-center">
            <img
              src={teknikals[i + 1].src}
              alt={teknikals[i + 1].alt}
              className="w-75 h-75 imageToRight"
            />
          </div>
        </div> 
        )
      }
      
      return tekinksPair;
  }

  return (
    <div id="Tekniks" className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 bgProfilePicture d-flex flex-col justify-content-center mb-2 mb-md-0">
          <p className="textColor d-sm-none d-md-block">
            Programming Techniques
          </p>
        </div>
        <div className="col-md-1"></div>
      </div>
      {renderTeknikals()}
    </div>

  );
}

export default Teknikals;
