import { BsClock } from "react-icons/bs";

export const contactInfo = {
  LK: {
    phoneNumber: "+94 77 900 5555",
    email: "info@cduk.lk",
    address:
      "Campus Direct – Head Office, 36 B, Gower Street, Colombo 05, Sri Lanka",
    openingTimes: [
      {
        branch: "Colombo Branch",
        times: [
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
        ],
      },
      {
        branch: "Kandy Branch",
        times: [
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
      },
    ],
  },

  AE: {
    phoneNumber: "+971 58 546 9555",
    email: "info@cduk.lk",
    address:
      "Bur-Dubai, Business Tower - 1312 Victor Business Center BurJuman - Al Mankhool - Dubai - United Arab Emirates",
    openingTimes: [
      {
        branch: "Dubai Branch",
        times: [
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
      },
    ],
  },

  GB: {
    phoneNumber: "+971 58 546 9555",
    email: "london@cduk.lk",
    address:
      "B71-75 Shelton Street Convent Garden London WC2H9JQ, United Kingdom",
    openingTimes: [
      {
        branch: "London Branch",
        times: [
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
      },
    ],
  },
};

// LK - Sri Lanka
// AE - United Arab Emirates
// GB - United Kingdom
