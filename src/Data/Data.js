// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilFolderOpen,
  UilAnalysis,
  UilInvoice ,
  UilMoneyWithdrawal,
  UilMessage,
  UilCalender,
  UilCog,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    path:"/home",
    icon: UilEstate,
    heading: "Dashboard",

  },
  { path:"/team",
    icon: UilUsersAlt,
    heading: "Team",
   
  },
  {
    path:"/budget",
    icon: UilClipboardAlt,
    heading: "Budget",
  },
  {
    path:"/trello",
    icon: UilAnalysis,
    heading: 'Progress'
  },
  {
    path:"/collaborate",
    icon: UilMessage,
    heading: 'Collaborate'
  },
  {
    path:"/chart",
    icon: UilChart,
    heading: 'Charts'
  },
  {
    path:"/invoice",
    icon: UilInvoice ,
    heading: 'Invoice'
  },
  {
    path:"/documents",
    icon: UilFolderOpen,
    heading: 'Documents'
  },
  {
    path:"/calender",
    icon: UilCalender,
    heading: 'Calender'
  },
  {
    path:"/about",
    icon: UilCog,
    heading: 'About'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Project",
    color: {
      backGround: "#61605F",
      boxShadow: "0px 10px 20px 0px #E6E6E6",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Progress",
    color: {
      backGround:"#00979F",
      boxShadow: "0px 10px 20px 0px #D6FDFF",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "#005D7F",
      boxShadow: "0px 10px 20px 0px #D6F4FF",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Jessica Brown",
    noti: "The login button is not functioning properly.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Samantha Garcia",
    noti: "Mobile view of website displays overlapping text on homepage.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Elizabeth Rodriguez",
    noti: "Login page freezes after entering incorrect password.",
    time: "2 hours ago",
  },
];
