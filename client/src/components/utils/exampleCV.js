import { v4 as uuidv4 } from "uuid";
import exampleAvatar from "../../assets/example_avatar_2.jpg";

const exampleCV = {
  personal: {
    firstName: "Tristan",
    lastName: "Libeau",
    currentRole: "Job title",
    photo: exampleAvatar,
    address1: "Fake adress, Sydney, Australia",
    address2: "Unit B",
    phone: "+61333333333",
    email: "fakeemail@gmail.com",
  },
  about: {
    textValue:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Job title",
      company: "Fake Compagnie",
      address: "Fake Address",
      from: "2018",
      to: "Current",
      description: "Lead Web Developer for the department. Utilize React framework to build the web landscape.",
    },
    {
      id: uuidv4(),
      position: "Job title",
      company: "Fake Company 2",
      address: "An other fake adress",
      from: "2015",
      to: "2018",
      description: "Build and optimize a secure web page for evolving business needs. Worked closely with other Web Developers.",
    },
    {
      id: uuidv4(),
      position: "Job title",
      company: "Fake compagnie 3",
      address: "An other fake adress",
      from: "2014",
      to: "2015",
      description: "Provide continued support for one or more web properties. Code and script applications.",
    },
  ],
  education: [
    {
      id: uuidv4(),
      school: "Random School",
      address: "Sydney, NSW",
      degree: "Masters",
      focus: "Computer Engineering",
      from: "2015",
      to: "2016",
    },
    {
      id: uuidv4(),
      school: "Random School",
      address: "Sydney, NSW",
      degree: "Computer Science",
      focus: "Web Development",
      from: "2010",
      to: "2014",
    },
  ],
};

export default exampleCV;
