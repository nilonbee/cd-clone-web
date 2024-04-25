import { BsClock } from "react-icons/bs";

export const contactInfo = {
    kandy: {
        openingTimes: [
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
    london: {
        openingTimes: [
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
    dubai: {
        phoneNumber: "+971 58 546 9555",
        email: "dubai@campusdirect.io",
        address: "Bur-Dubai, Business Tower - 1312 Victor Business Center BurJuman - Al Mankhool - Dubai - United Arab Emirates",
        openingTimes: [
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
        listItems: [{
            label: "Location",
            value: "Bur-Dubai, Business Tower - 1312 Victor Business Center BurJuman - Al Mankhool - Dubai - United Arab Emirates",
        }, {
            label: "Email Address",
            value: "dubai@campusdirect.io",
        }, {
            label: "Phone Number",
            value: "+971 58 546 9555",
        }]
    },
    colombo: {
        phoneNumber: "+94 77 900 5555",
        email: "info@cduk.lk",
        address: "Campus Direct Head Office Sri Lanka 36B, Gower St, Colombo 05",
        openingTimes: [
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
        listItems: [{
            label: "Location",
            value: "Campus Direct Head Office Sri Lanka 36B, Gower St, Colombo 05",
        },
        {
            label: "Email Address",
            value: "info@cduk.lk",
        },
        {
            label: "Phone Number",
            value: "+94 77 900 5555",
        }]
    }
}
