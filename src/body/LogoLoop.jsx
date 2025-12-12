import LogoLoop from './Techniques';

const techLogos = [
    { node: <img src = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt = "HTML5"/>, title: "HTML5"}, 
    { node: <img src = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>, title: "CSS3"}, 
    { node: <img src = "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>, title: "Bootstrap"}, 
    { node: <img src = "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>, title: "JavaScript"}, 
    { node: <img src = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>, title: "React.js"}, 
    { node: <img src = "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>, title: "Node.js"},
    { node: <img src = "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>, title: "React Native"},
    { node: <img src = "https://img.shields.io/badge/Java-F8981D?style=for-the-badge&logo=java&logoColor=white"/>, title: "Java"}, 
    { node: <img src = "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"/>, title: "Android"}, 
    { node: <img src = "https://img.shields.io/badge/C%23%20.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white"/>, title: "C#"}, 
    { node: <img src = "https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white"/>, title: "WordPress"}, 
    { node: <img src = "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"/>, title: "PHP"}, 
    { node: <img src = "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white"/>, title: "SQL"}, 
    { node: <img src = "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"/>, title: "C"}, 
    { node: <img src = "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>, title: "Python"}, 
    { node: <img src = "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/>, title: "MySQL"},
    { node: <img src = "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>, title: "GitHub"},
    { node: <img src = "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>, title: "Figma"},
    { node: <img src = "https://img.shields.io/badge/REST%20API-009688?style=for-the-badge&logo=api&logoColor=white"/>, title : "Rest API"},
    { node: <img src = "https://img.shields.io/badge/PlantUML-0D597F?style=for-the-badge&logo=uml&logoColor=white"/>, title : "PlantUml"},
    { node: <img src = "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> , title : "TypeScript"},
];

export function App() {
  return (
    <div style={{position: 'relative', overflowX: "hidden"}} className='lightBackground'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default App;