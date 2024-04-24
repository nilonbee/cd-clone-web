import { BsClock } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

export const listItems = [
    {
        text: "Home",
        href: "/",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
    {
        text: "About Us",
        href: "/about",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
    {
        text: "Courses",
        href: "/courses",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
    {
        text: "Events",
        href: "/events",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
    {
        text: "Scholarships",
        href: "/scholarships",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
    {
        text: "Careers",
        href: "/careers",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
    {
        text: "Blogs",
        href: "/blogs",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
    {
        text: "Contact Us",
        href: "/contact",
        icon: <MdKeyboardArrowRight color={"#fff"} size={18} />,
    },
];

export const openingTimes = {
    dubai: [
        {
            text: "Monday–Friday: 10.00am – 6.00pm",
            icon: <BsClock color={"#fff"} size={16} />,
        },

        {
            text: "Saturday: 9.00am - 1.00pm ",
            icon: <BsClock color={"#fff"} size={16} />,
        },
        {
            text: "Sun: Closed",
            icon: <BsClock color={"#fff"} size={16} />,
        },
    ],
    kandy: [
        {
            text: "Monday–Friday: 9.00am – 5.00pm",
            icon: <BsClock color={"#fff"} size={16} />,
        },

        {
            text: "Saturday: 9.00am - 1.00pm ",
            icon: <BsClock color={"#fff"} size={16} />,
        },
        {
            text: "Sun: Closed",
            icon: <BsClock color={"#fff"} size={16} />,
        },
    ],
    london: [
        {
            text: "Monday–Friday: 10.00am – 6.00pm",
            icon: <BsClock color={"#fff"} size={16} />,
        },

        {
            text: "Saturday: 10.00am - 2.00pm",
            icon: <BsClock color={"#fff"} size={16} />,
        },
        {
            text: "Sun: Closed",
            icon: <BsClock color={"#fff"} size={16} />,
        },
    ],
    colombo: [
        {
            text: "Monday–Friday: 9.00am – 5.00pm",
            icon: <BsClock color={"#fff"} size={16} />,
        },

        {
            text: "Saturday: 9.00am - 5.00pm",
            icon: <BsClock color={"#fff"} size={16} />,
        },
        {
            text: "Sun: Closed",
            icon: <BsClock color={"#fff"} size={16} />,
        },
    ]
};

export const dubaiAddress = "Bur-Dubai, Business Tower - 1312 Victor Business Center BurJuman - Al Mankhool - Dubai - United Arab Emirates";

export const sriLanksAddress = "Campus Direct Head Office Sri Lanka 36B,Gower St, Colombo 05";

export const dubaiPhoneNumber = "+971 58 546 9555";

export const colomboPhoneNumber = "+94 77 234 0055";

export const dubaiEmail = "dubai@campusdirect.io";

export const colomboEmail = "info@cduk.lk"
