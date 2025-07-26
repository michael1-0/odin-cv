import { useState } from "react";

function EducationalExperienceCourseWork({
  courseWork,
  index,
  innerIndex,
  educationalExperience,
  setEducationalExperience,
}) {
  const handleDeleteCourseWorkClick = () => {
    const newExperience = [...educationalExperience];
    newExperience[index].courseWorks.splice(innerIndex, 1);
    setEducationalExperience(newExperience);
  };

  return (
    <li>
      <div>{courseWork}</div>
      <button onClick={handleDeleteCourseWorkClick} className="red-button">
        Del
      </button>
    </li>
  );
}

function EducationalExperience({
  educationalExperience,
  setEducationalExperience,
}) {
  const [status, setStatus] = useState("adding");
  const [updateIndex, setUpdateIndex] = useState(-1);
  const [newEducationFormData, setNewEducationFormData] = useState({
    degree: "",
    date: "",
    schoolName: "",
    grade: "",
  });
  const [newCourseWorksInputs, setNewCourseWorksInputs] = useState([""]);

  const handleAddExperienceClick = () => {
    const newExperience = [...educationalExperience];
    newExperience.push({
      degree: newEducationFormData.degree,
      date: newEducationFormData.date,
      schoolName: newEducationFormData.schoolName,
      grade: newEducationFormData.grade,
      courseWorks: [],
    });
    setEducationalExperience(newExperience);

    setNewEducationFormData({
      degree: "",
      date: "",
      schoolName: "",
      grade: "",
    });
  };

  const handleDeleteExperienceClick = (index) => {
    const newExperience = [...educationalExperience];
    newExperience.splice(index, 1);

    setEducationalExperience(newExperience);
  };

  const handleUpdateExperienceClick = () => {
    const newExperience = [...educationalExperience];
    newExperience[updateIndex] = {
      ...newExperience[updateIndex],
      degree: newEducationFormData.degree,
      date: newEducationFormData.date,
      schoolName: newEducationFormData.schoolName,
      grade: newEducationFormData.grade,
    };
    setEducationalExperience(newExperience);

    // reset
    const newData = {
      degree: "",
      date: "",
      schoolName: "",
      grade: "",
    };
    setNewEducationFormData(newData);
    setUpdateIndex(-1);
    setStatus("adding");
  };

  const handleAddEducationalCourseWorkClick = (index) => {
    const newExperience = [...educationalExperience];
    newExperience[index].courseWorks.push(newCourseWorksInputs[index]);
    setEducationalExperience(newExperience);

    const newInputs = [...newCourseWorksInputs];
    newInputs[index] = "";
    setNewCourseWorksInputs(newInputs);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="educational-experience-form"
    >
      <h2>Educational Experience</h2>
      <hr />
      <div className="input-wrapper">
        <div>
          <label htmlFor="educationFormDegree">Degree:</label>
          <input
            type="text"
            value={newEducationFormData.degree}
            onChange={(e) => {
              const newData = {
                ...newEducationFormData,
                degree: e.target.value,
              };
              setNewEducationFormData(newData);
            }}
            id="educationFormDegree"
          />
        </div>
        <div>
          <label htmlFor="educationFormDate">Date:</label>
          <input
            type="text"
            value={newEducationFormData.date}
            onChange={(e) => {
              const newData = { ...newEducationFormData, date: e.target.value };
              setNewEducationFormData(newData);
            }}
            id="educationFormDate"
          />
        </div>
        <div>
          <label htmlFor="educationFormSchoolName">Name</label>
          <input
            type="text"
            value={newEducationFormData.schoolName}
            onChange={(e) => {
              const newData = {
                ...newEducationFormData,
                schoolName: e.target.value,
              };
              setNewEducationFormData(newData);
            }}
            id="educationFormSchoolName"
          />
        </div>
        <div>
          <label htmlFor="educationFormGrade">Grade:</label>
          <input
            type="text"
            value={newEducationFormData.grade}
            onChange={(e) => {
              const newData = {
                ...newEducationFormData,
                grade: e.target.value,
              };
              setNewEducationFormData(newData);
            }}
            id="educationFormGrade"
          />
        </div>
        <button
          onClick={
            status === "adding"
              ? handleAddExperienceClick
              : handleUpdateExperienceClick
          }
          className={status === "adding" ? "green-button" : "blue-button"}
        >
          {status === "adding" ? "Add" : "Edit"}
        </button>
      </div>
      <div className="data-wrapper">
        {educationalExperience.map((experience, index) => {
          return (
            <div key={index}>
              <div className="inner-data-wrapper">
                <div>{experience.degree}</div>
                <div>{experience.date}</div>
                <div>{experience.schoolName}</div>
                <div>{experience.grade}</div>
                <button
                  onClick={() => handleDeleteExperienceClick(index)}
                  disabled={status === "updating"}
                  className="red-button"
                >
                  Del
                </button>
                <button
                  onClick={() => {
                    const newData = {
                      degree: experience.degree,
                      date: experience.date,
                      schoolName: experience.schoolName,
                      grade: experience.grade,
                      courseWorks: experience.courseWorks,
                    };
                    setNewEducationFormData(newData);
                    setStatus("updating");
                    setUpdateIndex(index);
                  }}
                  className="blue-button"
                >
                  Edit
                </button>
              </div>
              <ul>
                {experience.courseWorks.map((courseWork, innerIndex) => {
                  return (
                    <EducationalExperienceCourseWork
                      key={innerIndex}
                      courseWork={courseWork}
                      index={index}
                      innerIndex={innerIndex}
                      educationalExperience={educationalExperience}
                      setEducationalExperience={setEducationalExperience}
                    />
                  );
                })}
                <input
                  type="text"
                  value={newCourseWorksInputs[index] || ""}
                  onChange={(e) => {
                    const newInputs = [...newCourseWorksInputs, ""];
                    newInputs[index] = e.target.value;
                    setNewCourseWorksInputs(newInputs);
                  }}
                />
                <button
                  onClick={() => handleAddEducationalCourseWorkClick(index)}
                  className="green-button"
                >
                  Add Point
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default EducationalExperience;
