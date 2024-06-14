import styles from './App.module.css';
import githubIcon from './Assets/github.svg'
import linkedinIcon from './Assets/linkedin.svg'
import gmailIcon from './Assets/gmail.svg'

import cssIcon from './Assets/css.png'
import javaIcon from './Assets/java.png'
import mysqlIcon from './Assets/mysql.png'
import htmlIcon from './Assets/html.png'
import jsIcon from './Assets/js.png'
import reactIcon from './Assets/react.png'
import codeIcon from './Assets/code.png'
import azureIcon from './Assets/azure.png'

function App() {
return (
    
    <div className={styles.pageWrapper}>
      <div className={styles.pageInner}>
        <div className={styles.headerWrapper}>
          <div className={styles.onlineWrapper}>
            <p className={styles.greenCircle}></p>
            <p>Online.</p>
          </div>
          <div className={styles.mainText}>
            <h2>Heya, I'm Shruti</h2>
            <h1>Developer.</h1>
          </div>
          <div className={styles.links}>
            <a href='https://github.com/crazyshrut/'>
              <div className={styles.link}>
                <img src={githubIcon} />
                <p>Github</p>
              </div>
            </a>
            <a href='hhttps://www.linkedin.com/in/shrutiverma032003/'>
              <div className={styles.link}>
                <img src={linkedinIcon} />
                <p>Linkedin</p>
              </div>
            </a>
            <a href='mailto:shrutiverma032003@gmail.com'>
              <div className={styles.link}>
                <img src={gmailIcon} />
                <p>Mail</p>
              </div>
            </a>
          </div>
          <div className={styles.headerContent}>
            <p>Hi, I am Shruti, interested in travelling, PHOTOGRAPHY, food and developing this website !</p>
          </div>
        </div>
        <div className={styles.timeLineWrapper}>
          <h1>My Timeline</h1>
          <div className={styles.timeLine}>
            <div className={styles.rightTimeLineBox}>
              <div className={styles.dotsRight}></div>
              <p><span>August 2022</span><br /><br/><h2>Dropped my JEE College - KIET, as it was life changing and challenging</h2></p>
            </div>
            <div className={styles.leftTimeLineBox}>
              <div className={styles.dotsLeft}></div>
              <p><span>July 2023</span><br /><br /><h2>Undergrad in Computer Science from Indias's Ivy League, Scaler School of Technology</h2></p>
            </div>
            <div className={styles.rightTimeLineBox}>
              <div className={styles.dotsRight}></div>
              <p><span>Currently</span><br /><br /><h2>Developing This Website in Bangalore, Not My Cup Of Tea (as i hate tea)</h2></p>
            </div>

          </div>
        </div>
        <div className={styles.projectsWrapper}>
          <h1>My Projects</h1>
          <div className={styles.projectsCardWrapper}>
            <div className={styles.projectsCard}>
              <h2>Portfolio</h2>
              <p>Talking about this portfolio that is just build using time, food, my typing skills, chatgpt skills, pills and what not!!! My first itne mehnat ki website! I used react, css, js. BS ABHI ITNA HI ATA HE. </p>
            </div>
            <div className={styles.projectsCard}>
              <h2>Quick Quiz</h2>
              <p>This quiz app was our first project of trimester 4, I used HTML, CSS, JS only. Making progress bar was Jaanlevaaa!! The app that was meant for marks only not for the actual quiz  ; ^</p>
            </div>
            <div className={styles.projectsCard}>
              <h2>Tic-Tac-Toe</h2>
              <p>Bachho wala game, the game whose maths was a little tricky to implement. DEEPAK sir told us the logic. Pata nhi the itna tough hota he tic tac toe, vese itna bhi nhi  ; *</p>
            </div>
            <div className={styles.projectsCard}>
              <h2>Image Editor</h2>
              <p>My first ever project of college's life, kuch smjh nhi aya tha. Although, I learned a lot in this journey. Used RGB values, matrix, and yes DSA!!!  </p>
            </div>
            <div className={styles.projectsCard}>
              <h2>Random Quote Generator</h2>
              <p>It was my first project, in which I made my first API call through fake API store. I build it overnight in thr main campus. Hehe, I know your question, Abhimanyu sir allowed us to stay there and gave us a pizza partyy yaayy!!!</p>
              </div>
            <div className={styles.projectsCard}>
              <h2>Vanilla Portfolio website</h2>
              <p>Not a completed one. I will complete this project soon.. I hope soon.. I was the portfolio of the person who doesn't exist in this world. I used this for the maintaining the symmetry of boxes  ; *</p>
            </div> 
          </div>
        </div>
        <div className={styles.techWrapper}>
          <h1>Tech Stack</h1>
          <div className={styles.techCardWrapper}>
            <div className={styles.techCard}>
              <img src={javaIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={cssIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={htmlIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={jsIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={reactIcon} />
            </div>
            <div className={styles.techCard}>
              <img src={mysqlIcon} />
            </div>
             <div className={styles.techCard}>
              <img src={azureIcon} />
            </div>
             <div className={styles.techCard}>
              <img src={codeIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// .techCard{width: 185px;height: 185px;background-color: rgb(91, 31, 73, 0.893);border-radius: 10px;padding: 10px;display: flex;justify-content: center;align-items: center;}
// .techCard img {height: 80px;filter: grayscale(85%) invert(100%);}
