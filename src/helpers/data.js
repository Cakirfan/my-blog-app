import { FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { BiSolidHelpCircle, BiSolidMessageAltDetail } from "react-icons/bi";
import { RiLockPasswordFill, RiSettings3Fill } from "react-icons/ri";

export const RankData = [
  {
    rankId: 1,
    fullname: "Ricardo Flanagan",
    job: "Digital Artist",
    image: "images/creator-1.webp",
  },
  {
    rankId: 2,
    fullname: "Cristina Shaw",
    job: "Photoshop Expert",
    image: "images/creator-2.jpeg",
  },
  {
    rankId: 3,
    fullname: "Clara Jones",
    job: "Backend Developer",
    image: "images/creator-3.jpeg",
  },
  {
    rankId: 4,
    fullname: "Mark Davis",
    job: "Illustrator Designer",
    image: "images/creator-4.jpg",
  },
  {
    rankId: 5,
    fullname: "Shara Anderson",
    job: "Food Vlogegrs",
    image: "images/creator-5.webp",
  },
];


//? Sidebar Data
export const data = [
  {
    id: 1,
    href: "/",
    name: "home",
    icon: <FaHome className="icon" />,
  },
  {
    id: 2,
    href: "help",
    name: "help",
    icon: <BiSolidHelpCircle className="icon" />,
  },
  {
    id: 3,
    href: "messages",
    name: "messages",
    icon: <BiSolidMessageAltDetail className="icon" />,
  },
  {
    id: 4,
    href: "password",
    name: "password",
    icon: <RiLockPasswordFill className="icon" />,
  },
  {
    id: 5,
    href: "profile",
    name: "profile",
    icon: <FaUserCircle className="icon" />,
  },
  {
    id: 6,
    href: "settings",
    name: "settings",
    icon: <RiSettings3Fill className="icon" />,
  },
  {
    id: 7,
    href: "signOut",
    name: "sign out",
    icon: <FaSignOutAlt className="icon" />,
  },
];
