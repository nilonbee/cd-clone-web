"use client";
import Link from "next/link";
import fetchLocation from "@/utils/fetchLocation";

import { useEffect } from "react";
import { ContainerLayout, ListItem } from "@components/atoms";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinNewIcon,
  NavigationIcon,
  PhoneIcon,
  TwitterIcon,
} from "@components/atoms/Icons";
import { useIpStore } from "@/store/useIpStore";
import { contactInfo } from "@/mockData/contact";
import { listItems } from "@/mockData/footer";
import { ILocationInfo, IOpeningTime } from "@/types/contactUs";

export const Footer = () => {
  const { countryCode, setCountryCode } = useIpStore();
  useEffect(() => {
    const fetchCountryCode = async () => {
      const countryCode = await fetchLocation({
        url: `https://ipinfo.io/?token=${process.env.NEXT_PUBLIC_IP_INFO_TOKEN}`,
      });
      setCountryCode(countryCode);
    };
    fetchCountryCode();
  }, [countryCode]);

  let branch = "colombo";
  switch (countryCode) {
    case "AE":
      branch = "dubai";
      break;
    default:
      branch = "colombo";
  }

  const branchInfo: ILocationInfo =
    contactInfo[branch as keyof typeof contactInfo];
  const openingTimes = branchInfo.openingTimes;
  const email = branchInfo.email;
  const phoneNumber = branchInfo.phoneNumber;
  const address = branchInfo.address;

  return (
    <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r fadeIn">
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
            <h5 className="text-sm text-white mb-2 mt-4">
              {branch === "dubai" ? "Dubai Branch" : "Colombo Branch"}
            </h5>
            <div className="flex gap-2 flex-col">
              {openingTimes.map((item: IOpeningTime, index: number) => (
                <ListItem key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
            {branch !== "dubai" && (
              <>
                <h5 className="text-sm text-white mb-2 mt-4">Kandy Branch</h5>
                <div className="flex gap-2 flex-col">
                  {contactInfo.kandy.openingTimes.map((item, index) => (
                    <ListItem key={index} text={item.text} icon={item.icon} />
                  ))}
                </div>
              </>
            )}
            <h5 className="text-sm text-white mb-2 mt-4">London Branch</h5>
            <div className="flex gap-2 flex-col">
              {contactInfo.london.openingTimes.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="">
            <h5 className="font-bold text-base text-white mb-4">Contact Us</h5>
            <div className="flex gap-2 items-center relative bg-transparent">
              {/* todo: add these urls to doppler if needed */}
              <EmailIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Email Us
              </h5>
            </div>
            <Link
              href={
                "https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new"
              }
            >
              <p className="text-sm text-[#e0e0e0]">{email}</p>
            </Link>
            <div className="flex gap-2 items-center relative bg-transparent mt-4">
              <PhoneIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Call Us
              </h5>
            </div>
            <p className="text-sm text-[#e0e0e0]">{phoneNumber}</p>

            <div className="flex gap-2 items-center relative bg-transparent mt-4">
              <NavigationIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Visit Us
              </h5>
            </div>
            <p className="text-sm text-[#e0e0e0]">{address}</p>
            <div className="flex gap-6 items-start relative bg-transparent mt-4">
              {/* todo: add these urls to doppler if needed*/}
              <Link href="https://web.facebook.com/CDUKColombo">
                <FacebookIcon />
              </Link>
              <Link href="https://www.linkedin.com/company/campus-direct-pvt-ltd">
                <LinkedinNewIcon />
              </Link>
              <Link href="https://twitter.com/Campus_DirectUK">
                <TwitterIcon />
              </Link>
              <Link href="https://www.instagram.com/cdukl?igsh=MWY3eGl6aGU5aHl6ZA%3D%3DCDUKColombo">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};
