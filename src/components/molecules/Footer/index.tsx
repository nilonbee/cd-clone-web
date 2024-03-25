/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  TimeIcon,
  PhoneIcon,
  FacebookIcon,
  // LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  EmailIcon,
  NavigationIcon,
} from "@components/atoms/Icons";
import { InnerContainer, ListItem } from "@components/atoms";

const openingTimesColombo = [
  {
    text: "Monday–Friday: 9.00am – 5.00pm",
    icon: <TimeIcon color={"#fff"} />,
  },

  {
    text: "Saturday: 9.00am - 5.00pm",
    icon: <TimeIcon color={"#fff"} />,
  },
  {
    text: "Sun: Closed",
    icon: <TimeIcon color={"#fff"} />,
  },
];

const openingTimesKandy = [
  {
    text: "Monday–Friday: 9.00am – 5.00pm",
    icon: <TimeIcon color={"#fff"} />,
  },

  {
    text: "Saturday: 9.00am - 1.00pm ",
    icon: <TimeIcon color={"#fff"} />,
  },
  {
    text: "Sun: Closed",
    icon: <TimeIcon color={"#fff"} />,
  },
];

const openingTimesLondon = [
  {
    text: "Monday–Friday: 10.00am – 6.00pm",
    icon: <TimeIcon color={"#fff"} />,
  },

  {
    text: "Saturday: 10.00am - 2.00pm",
    icon: <TimeIcon color={"#fff"} />,
  },
  {
    text: "Sun: Closed",
    icon: <TimeIcon color={"#fff"} />,
  },
];
const listItems = [
  {
    text: "Home",
    href: "/LK/home",
  },
  {
    text: "About Us",
    href: "/LK/about-us",
  },
  {
    text: "Courses",
    href: "/LK/courses",
  },
  {
    text: "Events",
    href: "/LK/events",
  },
  {
    text: "Careers",
    href: "/LK/home",
  },
  {
    text: "Scholarships",
    href: "/LK/scholarships",
  },
  {
    text: "Contact Us",
    href: "/LK/contact-us",
  },
];
export const Footer = () => {
  return (
    <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r">
      <InnerContainer>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4 pt-[120px] pb-3">
          <div className="">
            <img
              src="https://campusdirect.io/static/media/logo-white.35991b1b.png"
              alt="footer-icon"
            />
          </div>
          <div className="">
            <h5 className="font-bold text-base text-white mb-4">Company</h5>
            {listItems.map((listItem, index) => (
              <ListItem key={index} text={listItem.text} href={listItem.href} />
            ))}
          </div>
          <div className="">
            <h5 className="font-bold text-base text-white mb-4">
              Opening Hours
            </h5>
            <h5 className="text-sm text-white mb-2">Colombo Branch</h5>
            {openingTimesColombo.map((item, index) => (
              <ListItem key={index} text={item.text} icon={item.icon} />
            ))}
            <h5 className="text-sm text-white mb-2 mt-4">Kandy Branch</h5>
            {openingTimesKandy.map((item, index) => (
              <ListItem key={index} text={item.text} icon={item.icon} />
            ))}
            <h5 className="text-sm text-white mb-2 mt-4">London Branch</h5>
            {openingTimesLondon.map((item, index) => (
              <ListItem key={index} text={item.text} icon={item.icon} />
            ))}
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
              {/* <LinkedinIcon /> */}
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};
