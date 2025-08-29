import "./experience.css";
import { Education, GetTitlePage, HeadingTitle, MainSkills, skillsData } from "../../allPagesPaths";
import { educationsData } from "../../data/educationsData";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Experience = () => {

  GetTitlePage('Nader Ghanawi | Experience');

  return (
    <main>
      <div className="experience">
        <div className="experience-content">
          <HeadingTitle sub='What Skills I Have?' head='My Experience' />
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-5">
                <div className="left">
                  <h5 className="title">Frontend Development</h5>
                  {skillsData.map(d => (<MainSkills data={d} key={d.id} />))}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="right">
                  <div className="education">
                    <h5 className="title">Education</h5>
                    {
                      educationsData && educationsData.length > 0 ?
                        educationsData.map(e => (<Education data={e} key={e.id} />)) :
                        <h5 className="title">No Section yet.</h5>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Experience;