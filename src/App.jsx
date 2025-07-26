import { useState } from "react";
import Resume from "./components/Resume";
import GeneralInfo from "./components/GeneralInfo";
import AreaOfExpertise from "./components/AreaOfExpertise";
import KeyAchievement from "./components/KeyAchievement";
import PracticalExperience from "./components/PracticalExperience";
import EducationalExperience from "./components/EducationalExperience";
import MenuControls from "./components/MenuControls";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    location: "localhost",
    email: "johndoeisnotreal@gmail.com",
    phoneNumber: "+01010001",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });
  const [areaOfExpertise, setAreaOfExpertise] = useState([
    "Full-stack development",
    "Machine Learning",
    "Algorithms",
    "SQL",
    "Web Penetration Testing",
    "Blockchain",
  ]);
  const [keyAchievements, setKeyAchievements] = useState([
    {
      title: "Revenue Growth",
      description:
        "Identified untapped markets and launched a system to harness the line market, resulting in a revenue increase of 70% for YoRHa in 101 months.",
    },
    {
      title: "Market Expansion",
      description:
        "Identified untapped markets and launched a system to harness the line market, resulting in a revenue increase of NeRV in 6 months.",
    },
  ]);
  const [practicalExperience, setPracticalExperience] = useState([
    {
      title: "Blockchain AI Web4 Kernel Engineer",
      date: "Some month in 2024 - Present",
      points: [
        "Developed an automation system, achieving a 30% increase in operational efficiency.",
        "Streamlined processes.",
        "Implemented preventive maintenance strategies, resulting in a 50% decrease in equipment downtime.",
      ],
    },
  ]);
  const [educationalExperience, setEducationalExperience] = useState([
    {
      degree: "Bachelor of Computer Science",
      date: "Some month in 2024 - Present",
      schoolName: "The School University",
      grade: "GPA: 10.00",
      courseWorks: [
        "System Design",
        "Object Oriented Programming",
        "Machine Learning",
        "Web Development",
      ],
    },
  ]);

  return (
    <>
      <main>
        <MenuControls>
          <GeneralInfo
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
          <AreaOfExpertise
            areaOfExpertise={areaOfExpertise}
            setAreaOfExpertise={setAreaOfExpertise}
          />
          <KeyAchievement
            keyAchievements={keyAchievements}
            setKeyAchievements={setKeyAchievements}
          />
          <PracticalExperience
            practicalExperience={practicalExperience}
            setPracticalExperience={setPracticalExperience}
          />
          <EducationalExperience
            educationalExperience={educationalExperience}
            setEducationalExperience={setEducationalExperience}
          />
        </MenuControls>
        <Resume
          generalInfo={generalInfo}
          areaOfExpertise={areaOfExpertise}
          keyAchievements={keyAchievements}
          practicalExperience={practicalExperience}
          educationalExperience={educationalExperience}
        />
      </main>
    </>
  );
}

export default App;
