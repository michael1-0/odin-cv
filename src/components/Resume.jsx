import "../styles/resume.css";

function Resume({
  generalInfo,
  areaOfExpertise,
  keyAchievements,
  practicalExperience,
  educationalExperience,
}) {
  return (
    <div className="resume">
      <section className="general-info">
        <h1>{generalInfo.name}</h1>
        <hr />
        <div>
          {generalInfo.location} | {generalInfo.email} |{" "}
          {generalInfo.phoneNumber}
        </div>
        <hr />
        <div>{generalInfo.description}</div>
      </section>
      <section className="area-of-expertise">
        <h2>Area of Expertise</h2>
        <hr />
        <div>
          {areaOfExpertise.map((area, index) => (
            <div key={index}>{area}</div>
          ))}
        </div>
      </section>
      <section className="key-achievements">
        <h2>Key Achievements</h2>
        <hr />
        <ul>
          {keyAchievements.map((achievement, index) => {
            return (
              <li key={index}>
                <strong>{achievement.title}:</strong> {achievement.description}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="practical-experience">
        <h2>Professional Experience</h2>
        <hr />
        {practicalExperience.map((experience, index) => {
          return (
            <div key={index}>
              <div className="experience-header">
                <div>
                  <strong>{experience.title}</strong>
                </div>
                <div>
                  <strong>{experience.date}</strong>
                </div>
              </div>
              <ul>
                {experience.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
      <section className="educational-experience">
        <h2>Education</h2>
        <hr />
        {educationalExperience.map((experience, index) => (
          <div key={index}>
            <div className="experience-header">
              <div>
                <strong>{experience.degree}</strong>
              </div>
              <div>
                <strong>{experience.date}</strong>
              </div>
            </div>
            <div>{experience.schoolName}</div>
            <div>{experience.grade}</div>
            <ul>
              <li>
                Relevant coursework in:{" "}
                {experience.courseWorks.map((courseWork, index) => {
                  if (index === experience.courseWorks.length - 1) {
                    return <span key={index}>{courseWork}</span>;
                  }
                  return <span key={index}>{courseWork + ", "}</span>;
                })}
              </li>
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Resume;
