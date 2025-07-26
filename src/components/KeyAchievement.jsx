import { useState } from "react";

function KeyAchievement({ keyAchievements, setKeyAchievements }) {
  const [status, setStatus] = useState("adding");
  const [updateIndex, setUpdateIndex] = useState(-1);
  const [newAchievementTitle, setNewAchievementTitle] = useState("");
  const [newAchievementDescription, setNewAchievementDescription] =
    useState("");

  const handleAddAchievementClick = () => {
    const newAchievements = [...keyAchievements];
    newAchievements.push({
      title: newAchievementTitle,
      description: newAchievementDescription,
    });
    setKeyAchievements(newAchievements);

    // reset
    setNewAchievementTitle("");
    setNewAchievementDescription("");
  };

  const handleDelAchievementClick = (index) => {
    const newAchievement = [...keyAchievements].filter((_, i) => i !== index);
    setKeyAchievements(newAchievement);
  };

  const handleUpdateAchievementClick = () => {
    const newAchievement = [...keyAchievements];
    newAchievement.map((achievement, i) => {
      if (i === updateIndex) {
        achievement.title = newAchievementTitle;
        achievement.description = newAchievementDescription;
      }
    });
    setKeyAchievements(newAchievement);

    // reset
    setNewAchievementTitle("");
    setNewAchievementDescription("");
    setUpdateIndex(-1);
    setStatus("adding");
  };

  return (
    <form
      id="keyAchievement"
      onSubmit={(e) => e.preventDefault()}
      className="key-achievement-form"
    >
      <h2>Key Achievement</h2>
      <hr />
      <div className="input-wrapper">
        <div>
          <label htmlFor="achievementTitle">Title:</label>
          <input
            type="text"
            value={newAchievementTitle}
            onChange={(e) => setNewAchievementTitle(e.target.value)}
            id="achievementTitle"
          />
        </div>
        <div>
          <label htmlFor="achievementDescription">Description:</label>
          <textarea
            name="newAchievementDescription"
            id="achievementDescription"
            value={newAchievementDescription}
            onChange={(e) => setNewAchievementDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={
            status === "adding"
              ? handleAddAchievementClick
              : handleUpdateAchievementClick
          }
          className={status === "adding" ? "green-button" : "blue-button"}
        >
          {status === "adding" ? "Add" : "Update"}
        </button>
      </div>
      <div className="data-wrapper">
        {keyAchievements.map((achievement, index) => {
          return (
            <div key={index}>
              <div>
                <strong>{achievement.title}:</strong> {achievement.description}
              </div>
              <button
                onClick={() => handleDelAchievementClick(index)}
                disabled={status === "updating"}
                className="red-button"
              >
                Del
              </button>
              <button
                onClick={() => {
                  setStatus("updating");
                  setUpdateIndex(index);
                  setNewAchievementTitle(achievement.title);
                  setNewAchievementDescription(achievement.description);
                }}
                className="blue-button"
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
}
export default KeyAchievement;
