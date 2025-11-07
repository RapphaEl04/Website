import picture1 from '../images/proj1.png' 
import picture2 from '../images/proj2.png' 
import picture3 from '../images/proj3.png'
function Projects() {
  
  return (
    <div className="section projects container">
      <h2>Projects</h2>
      <div className="grid projects-grid">
        <article className="card project-card">
          <div className="project-media">
            <img className="project-image" src={picture1} alt="Personal Website project preview" loading="lazy" />
          </div>
          <div className="project-content">
            <h3>Personal Website</h3>
            <p>A personal website is your digital identity — a space to showcase your skills, projects, and passion for technology. As a Computer Science student, it’s a great way to share your learning journey, display your work, and connect with opportunities. It’s not just a portfolio — it’s your story, told through code.</p>
            <div className="card-actions">
              <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
              <a className="btn" href="https://github.com/winterkimiii/Personal-Website" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </article>
        <article className="card project-card">
          <div className="project-media">
            <img className="project-image" src={picture2} alt="Food Menu project preview" loading="lazy" />
          </div>
          <div className="project-content">
            <h3>Food Menu</h3>
            <p>The Food Menu Project is a web-based application designed to display a restaurant’s menu in an organized and interactive way. It allows users to browse different food categories, view item details, and check prices easily. The project was developed using HTML and CSS for the front-end design and interactivity.</p>
            <div className="card-actions">
              <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
              <a className="btn" href="https://github.com/winterkimiii/Meme-Matching-Game" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </article>
        <article className="card project-card">
          <div className="project-media">
            <img className="project-image" src={picture3} alt="Project three preview" loading="lazy" />
          </div>
          <div className="project-content">
            <h3>Grade Average Calculator</h3>
            <p>The Grade Average Calculator is a simple program designed to help students compute their average grades quickly and accurately. Users can input their subjects and corresponding scores, and the system automatically calculates the total and average.</p>
            <div className="card-actions">
              <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
              <a className="btn" href="https://github.com/RapphaEl04/Jumbotron/blob/main/index.html" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Projects


