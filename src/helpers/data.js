import { FaHome, FaBlog, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { BiSolidMessageAltDetail } from "react-icons/bi";
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
    href: "blog",
    name: "blog",
    icon: <FaBlog className="icon" />,
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


//? Blog Data
export const blogData = [
  {
    id: 1,
    name: "japan",
    foto: "img/img1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere reprehenderit nostrum quaerat cupiditate. Vitae placeat nam officia illo. Voluptatum, tenetur? Adipisci iusto recusandae voluptatem.",
  },
  {
    id: 2,
    name: "spain",
    foto: "img/img2.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere reprehenderit nostrum quaerat cupiditate. Vitae placeat nam officia illo. Voluptatum, tenetur? Adipisci iusto recusandae voluptatem.",
  },
  {
    id: 3,
    name: "peru",
    foto: "img/img3.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere reprehenderit nostrum quaerat cupiditate. Vitae placeat nam officia illo. Voluptatum, tenetur? Adipisci iusto recusandae voluptatem.",
  },
];
