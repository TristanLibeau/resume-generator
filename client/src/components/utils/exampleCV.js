import { v4 as uuidv4 } from "uuid";
import exampleAvatar from "../../assets/example_avatar_2.png";

const exampleCV = {
  personal: {
    firstName: "Harold",
    lastName: "Smith",
    currentRole: "Web Developer",
    photo: exampleAvatar,
    address1: "Fake adress, Sydney, Australia",
    address2: "Unit B",
    phone: "+61333333333",
    email: "fakeemail@gmail.com",
  },
  about: {
    textValue:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Senior Web Developer",
      company: "Fake Compagnie",
      address: "Fake Address",
      from: "2018",
      to: "Current",
      description: "Lead Web Developer for the department. Utilize React framework to build the web landscape. Perform routine site audits, as well as ongoing maintenance, on an as-needed basis.",
    },
    {
      id: uuidv4(),
      position: "Web Developer",
      company: "Fake Company 2",
      address: "An other fake adress",
      from: "2015",
      to: "2018",
      description: "Build and optimize a secure web page for evolving business needs. Worked closely with other Web Developers, Graphic Designers and Programmers to create websites that fulfill both the technical and design needs of clients.",
    },
    {
      id: uuidv4(),
      position: "Web Developer Intern",
      company: "Fake compagnie 3",
      address: "An other fake adress",
      from: "2014",
      to: "2015",
      description: "Provide continued support for one or more web properties. Code and script applications. Maintain communication with team members and supervisors concerning the direction of the website.",
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
