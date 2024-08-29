import { resolveProfileImagePath } from "./utility/ResolveProfileImagePath";

// Customizable data, provide hex codes of the colors
export const styleData = {
  AppBackgroundColor: "",
  OutlineButtonStyle: {
    buttonBackgroundColor: "",
    buttonTextColor: "",
    buttonBorderColor: "",
  },
  FilledButtonStyle: {
    buttonBackgroundColor: "",
    buttonTextColor: "",
  },
};

// Can be a URL, a full file name with extension, or just a file name without extension
const profileImagePath = "";

export const linksData = {
  logo: "Lnk",
  profileImage: resolveProfileImagePath(profileImagePath),
  name: "Lina Doe",
  designation: "Designer & Web Developer",
  links: [
    {
      linkText: "Home",
      linkUrl: "#",
      linkBtn: "Outline",
    },
    {
      linkText: "About",
      linkUrl: "#",
      linkBtn: "Outline",
    },
    {
      linkText: "Services",
      linkUrl: "#",
      linkBtn: "Outline",
    },
    {
      linkText: "Contact",
      linkUrl: "#",
      linkBtn: "Filled",
    },
  ],
};
