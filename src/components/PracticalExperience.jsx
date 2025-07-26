import { useState } from "react";

function PracticalExperiencePoint({
  point,
  index,
  innerIndex,
  practicalExperience,
  setPracticalExperience,
}) {
  const handleDeletePointClick = () => {
    const newExperience = [...practicalExperience];
    newExperience[index].points.splice(innerIndex, 1);
    setPracticalExperience(newExperience);
  };

  return (
    <li>
      <div>{point}</div>
      <button onClick={handleDeletePointClick} className="red-button">
        Del
      </button>
    </li>
  );
}

function PracticalExperience({ practicalExperience, setPracticalExperience }) {
  const [status, setStatus] = useState("adding");
  const [updateIndex, setUpdateIndex] = useState(-1);
  const [newExperienceTitle, setNewExperienceTitle] = useState("");
  const [newExperienceDate, setNewExperienceDate] = useState("");
  const [newExperiencePointInputs, setNewExperiencePointInputs] = useState([
    "",
  ]);

  const handleAddExperienceClick = () => {
    const newExperience = [...practicalExperience];
    newExperience.push({
      title: newExperienceTitle,
      date: newExperienceDate,
      points: [],
    });
    setPracticalExperience(newExperience);

    // reset
    setNewExperienceTitle("");
    setNewExperienceDate("");
  };

  const handleDeleteExperienceClick = (index) => {
    const newExperience = practicalExperience.filter((_, i) => i !== index);
    setPracticalExperience(newExperience);
  };

  const handleUpdateExperienceClick = () => {
    const newExperience = [...practicalExperience];
    newExperience.map((experience, index) => {
      if (index === updateIndex) {
        experience.title = newExperienceTitle;
        experience.date = newExperienceDate;
      }
    });
    setPracticalExperience(newExperience);

    // reset
    setStatus("adding");
    setUpdateIndex(-1);
    setNewExperienceTitle("");
    setNewExperienceDate("");
  };

  const handleAddExperiencePointClick = (index) => {
    const newExperience = [...practicalExperience];
    newExperience[index].points.push(newExperiencePointInputs[index]);
    setPracticalExperience(newExperience);

    const newInputs = [...newExperiencePointInputs];
    newInputs[index] = "";
    setNewExperiencePointInputs(newInputs);
  };

  return (
    <form
      id="practicalExperience"
      onSubmit={(e) => e.preventDefault()}
      className="practical-experience-form"
    >
      <h2>Professional Experience</h2>
      <hr />
      <div className="input-wrapper">
        <div>
          <label htmlFor="experienceTitle">Title:</label>
          <input
            type="text"
            value={newExperienceTitle}
            onChange={(e) => setNewExperienceTitle(e.target.value)}
            id="experienceTitle"
          />
        </div>
        <div>
          <label htmlFor="experienceDate">Date:</label>
          <input
            type="text"
            value={newExperienceDate}
            onChange={(e) => setNewExperienceDate(e.target.value)}
            id="experienceDate"
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
          {status === "adding" ? "Add" : "Update"}
        </button>
      </div>
      <div className="data-wrapper">
        {practicalExperience.map((experience, index) => {
          return (
            <div key={index}>
              <div className="inner-data-wrapper">
                <div>{experience.title}</div>
                <div>{experience.date}</div>
                <button
                  onClick={() => handleDeleteExperienceClick(index)}
                  disabled={status === "updating"}
                  className="red-button"
                >
                  Del
                </button>
                <button
                  onClick={() => {
                    setStatus("updating");
                    setUpdateIndex(index);
                    setNewExperienceTitle(experience.title);
                    setNewExperienceDate(experience.date);
                  }}
                  className="blue-button"
                >
                  Edit
                </button>
              </div>
              <ul>
                {experience.points.map((point, innerIndex) => {
                  return (
                    <PracticalExperiencePoint
                      key={innerIndex}
                      point={point}
                      index={index}
                      innerIndex={innerIndex}
                      practicalExperience={practicalExperience}
                      setPracticalExperience={setPracticalExperience}
                    />
                  );
                })}
                <input
                  type="text"
                  value={newExperiencePointInputs[index] || ""}
                  onChange={(e) => {
                    const newInputs = [...newExperiencePointInputs, ""];
                    newInputs[index] = e.target.value;
                    setNewExperiencePointInputs(newInputs);
                  }}
                />
                <button
                  onClick={() => handleAddExperiencePointClick(index)}
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

export default PracticalExperience;
