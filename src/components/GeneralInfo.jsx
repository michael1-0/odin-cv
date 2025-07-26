import { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [name, setName] = useState(generalInfo.name);
  const [location, setLocation] = useState(generalInfo.location);
  const [phoneNumber, setPhoneNumber] = useState(generalInfo.phoneNumber);
  const [description, setDescription] = useState(generalInfo.description);
  const [email, setEmail] = useState(generalInfo.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneralInfo((prev) => ({
      ...prev,
      name,
      location,
      email,
      phoneNumber,
      description,
    }));
  };

  const handleReset = () => {
    setName(generalInfo.name);
    setLocation(generalInfo.location);
    setEmail(generalInfo.email);
    setPhoneNumber(generalInfo.phoneNumber);
    setDescription(generalInfo.description);
  };

  return (
    <form
      id="generalInfoForm"
      onSubmit={handleSubmit}
      className="general-info-form"
    >
      <h2>General Info</h2>
      <hr />
      <div className="general-info-wrapper">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            placeholder="location"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            placeholder="phone number"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            placeholder="description"
          >
            {description}
          </textarea>
        </div>
      </div>
      <button type="submit" className="green-button">
        Submit
      </button>
      <button onClick={handleReset} className="blue-button">
        Reset
      </button>
    </form>
  );
}

export default GeneralInfo;
