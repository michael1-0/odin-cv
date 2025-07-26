import { useState } from "react";

function AreaOfExpertise({ areaOfExpertise, setAreaOfExpertise }) {
  const [status, setStatus] = useState("adding");
  const [updateIndex, setUpdateIndex] = useState(-1);

  const [newArea, setNewArea] = useState("");

  const handleAddAreaClick = () => {
    const newAreaOfExpertise = [...areaOfExpertise];
    newAreaOfExpertise.push(newArea);
    setAreaOfExpertise(newAreaOfExpertise);
    setNewArea("");
  };

  const handleDeleteAreaClick = (index) => {
    const newAreaOfExpertise = areaOfExpertise.filter((_, i) => i !== index);
    setAreaOfExpertise(newAreaOfExpertise);
  };

  const handleUpdateAreaClick = () => {
    const newAreaOfExpertise = [...areaOfExpertise];
    newAreaOfExpertise[updateIndex] = newArea;
    setAreaOfExpertise(newAreaOfExpertise);

    setStatus("adding");
    setNewArea("");
    setUpdateIndex(-1);
  };
  return (
    <form
      id="areaOfExpertise"
      onSubmit={(e) => e.preventDefault()}
      className="area-of-expertise-form"
    >
      <h2>Area Of Expertise</h2>
      <hr />
      <div className="input-wrapper">
        <label htmlFor="newArea">Area:</label>
        <div>
          <input
            type="text"
            value={newArea}
            onChange={(e) => {
              setNewArea(e.target.value);
            }}
            id="newArea"
          />
          <button
            onClick={
              status === "adding" ? handleAddAreaClick : handleUpdateAreaClick
            }
            className={status === "adding" ? "green-button" : "blue-button"}
          >
            {status === "adding" ? "Add" : "Update"}
          </button>
        </div>
      </div>
      <div className="area-wrapper">
        {areaOfExpertise.map((area, index) => (
          <div key={index}>
            <div>{area}</div>
            <button
              onClick={() => handleDeleteAreaClick(index)}
              disabled={status === "updating"}
              className="red-button"
            >
              Del
            </button>
            <button
              onClick={() => {
                setUpdateIndex(index);
                setNewArea(area);
                setStatus("updating");
              }}
              className="blue-button"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}

export default AreaOfExpertise;
