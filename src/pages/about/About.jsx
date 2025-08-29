import "./about.css";
import { Link } from "react-router-dom";
import { cardInfoData } from "../../data/cardInfoData";
import { CardInfo, GetTitlePage, HeadingTitle } from "../../allPagesPaths";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const About = () => {

  GetTitlePage('Nader Ghanawi | About');

  return (
    <main>
      <div className="about">
        <HeadingTitle sub='get to know' head='about me' />
        <div className="about-content">
          <div className="left">
            <div className="about-content-img">
              <img src={process.env.PUBLIC_URL + '/assets/images/personal_img.png'} alt="my-img" />
            </div>
          </div>
          <div className="right">
            <div className="about-content-top d-flex flex-wrap gap-3">
              {cardInfoData.map(d => (
                <CardInfo data={d} key={d.id} />
              ))}
            </div>
            <div className="about-content-bottom mt-3">
              <p>
                Hello, I'm Nader Ghanawi from <strong>Lebanon</strong>.
                I'm a Front-End Developer with over 3.5 years of experience, and a Junior MERN Stack Developer.
                I build fully functional websites using HTML, CSS, and JavaScript, and I create full-stack applications with the MERN stack.
                I enjoy solving problems and building interactive, user-friendly web applications.<br />
                <strong>PROGRAMMING</strong> is not just a job for me—it’s my passion and my LIFE.
                I am always learning new technologies and improving my skills to deliver better projects and quality work.
              </p>
              <Link to="/contact" className="fill-btn">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About;