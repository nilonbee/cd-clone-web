/* eslint-disable @next/next/no-img-element */
"use client";
import { ContainerLayout, ListItem } from "@components/atoms";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinNewIcon,
  NavigationIcon,
  PhoneIcon,
  TimeIcon,
  TwitterIcon,
} from "@components/atoms/Icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsClock } from "react-icons/bs";
const openingTimesColombo = [
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
];

const openingTimesKandy = [
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
];

const openingTimesLondon = [
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
];
const listItems = [
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
export const Footer = () => {
  return (
    <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r">
      <ContainerLayout>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4 pt-[120px] pb-3">
          <div className="">
            <img
              src="https://campusdirect.io/static/media/logo-white.35991b1b.png"
              alt="footer-icon"
            />
          </div>
          <div className="">
            <h5 className="font-bold text-base text-white mb-4">
              Useful Links
            </h5>
            <div className="flex gap-2 flex-col">
              {listItems.map((listItem, index) => (
                <ListItem
                  key={index}
                  text={listItem.text}
                  href={listItem.href}
                  icon={listItem.icon}
                />
              ))}
            </div>
          </div>
          <div className="">
            <h5 className="font-bold text-base text-white mb-4">
              Opening Hours
            </h5>

            <h5 className="text-sm text-white mb-2">Colombo Branch</h5>
            <div className="flex gap-2 flex-col">
              {openingTimesColombo.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} />
              ))}
            </div>

            <h5 className="text-sm text-white mb-2 mt-4">Kandy Branch</h5>
            <div className="flex gap-2 flex-col">
              {openingTimesKandy.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
            <h5 className="text-sm text-white mb-2 mt-4">London Branch</h5>
            <div className="flex gap-2 flex-col">
              {openingTimesLondon.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="">
            <h5 className="font-bold text-base text-white mb-4">Contact Us</h5>
            <div className="flex gap-2 items-center relative bg-transparent">
              <EmailIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Email Us
              </h5>
            </div>
            <p className="text-sm text-[#e0e0e0]">info@cduk.lk</p>

            <div className="flex gap-2 items-center relative bg-transparent mt-4">
              <PhoneIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Call Us
              </h5>
            </div>
            <p className="text-sm text-[#e0e0e0]">+61 1300 880 813</p>

            <div className="flex gap-2 items-center relative bg-transparent mt-4">
              <NavigationIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Visit Us
              </h5>
            </div>
            <p className="text-sm text-[#e0e0e0]">
              Campus Direct Head Office Sri Lanka 36B,Gower St, Colombo 05
            </p>

            <div className="flex gap-6 items-start relative bg-transparent mt-4">
              <FacebookIcon />
              <LinkedinNewIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};
