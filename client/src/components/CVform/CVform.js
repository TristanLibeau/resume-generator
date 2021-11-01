import React from "react";
import EducationContainer from "./EducationContainer";
import ExperienceContainer from "./ExperienceContainer";
import Personal from "./Personal";
import AboutMe from "./AboutMe";

const CVform = ({
  cv,
  onChangePersonal,
  onDeleteAboutMe,
  onChangeAboutMe,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onPrint,
  onLoadExample,
  onReset,
  onSave,
}) => {

  
  return (
    <div>
      <Personal personal={cv.personal} onChange={onChangePersonal} />
      <AboutMe about={cv.about} onChange={onChangeAboutMe} />
      <ExperienceContainer
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <EducationContainer
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <div className="buttons-div">
        <button className="options-button" onClick={onPrint}>
          Print/PDF
        </button>
        <button className="options-button red-button" onClick={onLoadExample}>
          Example
        </button>
        <button className="options-button red-button" onClick={onReset}>
          Reset
        </button>
        <button className="options-button red-button" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CVform;
