import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../assets/empty_avatar.jpg";

const exampleCV = {
  personal: {
    firstName: "",
    lastName: "",
    currentRole: "",
    photo: emptyAvatar,
    address1: "",
    address2: "",
    phone: "",
    email: "",
  },

  about: {
    id: uuidv4(),
    textValue: "",

  },

  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      address: "",
      from: "",
      to: "",
      description: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      school: "",
      address: "",
      degree: "",
      focus: "",
      from: "",
      to: "",
    },
  ],
};

export default exampleCV;
