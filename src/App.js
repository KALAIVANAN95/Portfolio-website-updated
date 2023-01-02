import React from "react";
import Header from "./components/Header/Header";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import ExperienceContainer from "./components/ExperienceContainer/ExperienceContainer";
import Contact from "./components/Contact/Contact";
import './App.css'


const App = () => {
  return (
    <>
      <Header />
      <TopContainer/>
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </>
  );
};

export default App;
