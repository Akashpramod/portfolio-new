import react from 'react'
import {GitHub,Email,LinkedIn} from '@mui/icons-material'
import '../style/home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
                
                <h2>Hai....iam Akash</h2>
                <div className="prompt">
                    <p> A software developer with a passion for learning and creating</p>
                    <a href="https://www.linkedin.com/feed/"></a><GitHub/>
                    <Email/>
                    <LinkedIn/>
                    
                </div>
            </div>
            <div className="skills">
                <h1>skills</h1>
            <ol className="list">
               <li className="item">
                <h2>front-end</h2>
                <span>Reactjs,Angular,HTML,CSS,redux,bootstrap,fletter</span>
               </li>
               <li className="item">
                <h2>back-end</h2>
                <span>Node js, Python ,Django, .net, EXpress js, Mysql</span>
               </li>
               <li className="item">
                <h2>Language</h2>
                <span>java,Python ,c++, .net, Mysql</span>
               </li>
            </ol>
            <div className="experiance">
                <h1>Experiance</h1>
                <p>i have two years of experiance</p>
                </div>

            </div>
           
        </div>
    
    )
}

export default Home