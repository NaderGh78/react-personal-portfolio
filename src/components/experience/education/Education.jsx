
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Education = ({ data: { educationTitle, educationDesc, eductionDate } }) => {
    return (
        <div className="education-single">
            <span className="item_arrow"></span>
            <h5>{educationTitle}</h5>
            <h6>you tube / {eductionDate} - Present</h6>
            <p>{educationDesc}</p>
        </div>
    )
}

export default Education;