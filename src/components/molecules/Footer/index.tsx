import React from "react";
import {
  TimeIcon,
  PhoneIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  EmailIcon,
  NavigationIcon,
} from "@components/atoms/Icons";
import { InnerContainer, ListItem } from "@components/atoms";

const openingTimesColombo = [
  {
    text: "Monday–Friday: 9.00am – 5.00pm",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },

  {
    text: "Saturday: 9.00am - 5.00pm",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },
  {
    text: "Sun: Closed",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },
];

const openingTimesKandy = [
  {
    text: "Monday–Friday: 9.00am – 5.00pm",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },

  {
    text: "Saturday: 9.00am - 1.00pm ",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },
  {
    text: "Sun: Closed",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },
];

const openingTimesLondon = [
  {
    text: "Monday–Friday: 10.00am – 6.00pm",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },

  {
    text: "Saturday: 10.00am - 2.00pm",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },
  {
    text: "Sun: Closed",
    icon: <TimeIcon />,
    href: "/LK/contact-us",
  },
];
const listItems = [
  {
    text: "Home",
    href: "/LK/home",
    icon: <TimeIcon />,
  },
  {
    text: "About Us",
    href: "/LK/about-us",
    icon: <TimeIcon />,
  },
  {
    text: "Courses",
    href: "/LK/courses",
    icon: <TimeIcon />,
  },
  {
    text: "Events",
    href: "/LK/events",
    icon: <TimeIcon />,
  },
  {
    text: "Careers",
    href: "/LK/home",
    icon: <TimeIcon />,
  },
  {
    text: "Scholarships",
    href: "/LK/scholarships",
    icon: <TimeIcon />,
  },
  {
    text: "Contact Us",
    href: "/LK/contact-us",
    icon: <TimeIcon />,
  },
];
export const Footer = () => {
  return (
    <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r">
      <InnerContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 py-12">
          <div className="block mb-12 md:mb-2">
            <img
              src="https://campusdirect.io/static/media/logo-white.35991b1b.png"
              alt="footer-icon"
              className="mt-1"
            />
          </div>
          <div className="block mb-12 md:mb-2">
            <ListItem title text="company" href="/" white />
            {listItems.map((listItem, index) => (
              <ListItem key={index} text={listItem.text} href={listItem.href} />
            ))}
          </div>
          <div className="block mb-12 md:mb-2">
            <ListItem href="/" text="Opening Hours" title white />
            <ListItem href="/" text="Colombo Branch" />
            {openingTimesColombo.map((item, index) => (
              <ListItem
                key={index}
                text={item.text}
                icon={item.icon}
                href={item.href}
              />
            ))}
            <ListItem href="/" text="Kandy Branch" />
            {openingTimesKandy.map((item, index) => (
              <ListItem
                key={index}
                text={item.text}
                icon={item.icon}
                href={item.href}
              />
            ))}
            <ListItem href="/" text="London Branch" />
            {openingTimesLondon.map((item, index) => (
              <ListItem
                key={index}
                text={item.text}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </div>
          <div className="block mb-12 md:mb-2 md:ml-12">
            <ListItem text="Contact Us" href="/" title white />
            <ListItem text="Email Us" href="/" title icon={<EmailIcon />} />
            <ListItem text="info@cduk.lk" href="/" />

            <ListItem text="Call Us" href="/" title icon={<PhoneIcon />} />
            <ListItem text="+61 1300 880 813" href="/" />

            <ListItem
              text="Visit Us"
              href="/"
              title
              icon={<NavigationIcon />}
            />
            <ListItem
              text="Campus Direct Head Office Sri Lanka 36B,Gower St, Colombo 05"
              href="/"
            />
            <div className="flex space-x-4">
              <FacebookIcon />
              <LinkedinIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};
