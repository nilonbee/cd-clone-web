/* eslint-disable @next/next/no-img-element */
"use client";
import IPinfoWrapper, { IPinfo } from "node-ipinfo";
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

import { useIpStore } from '@/store/useIpStore';
import { colomboEmail, colomboPhoneNumber, dubaiAddress, dubaiEmail, dubaiPhoneNumber, listItems, openingTimes, sriLanksAddress } from "@/mockData/footer";

const ipinfoWrapper = new IPinfoWrapper(`${process.env.NEXT_PUBLIC_IP_INFO_TOKEN}`);

export const Footer = () => {
  const { countryCode, setCountryCode } = useIpStore(state => ({
    countryCode: state.countryCode,
    setCountryCode: state.setCountryCode
  }));
  countryCode === "" && ipinfoWrapper.lookupIp("1.1.1.1").then((response: IPinfo) => {
    setCountryCode(response.countryCode);
  });
  const isDubai: boolean = countryCode === "UAE";

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
            {isDubai ? (
              <>
                <h5 className="text-sm text-white mb-2 mt-4">Dubai Branch</h5>
                <div className="flex gap-2 flex-col">
                  {openingTimes.dubai.map((item, index) => (
                    <ListItem key={index} text={item.text} icon={item.icon} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <h5 className="text-sm text-white mb-2">Colombo Branch</h5>
                <div className="flex gap-2 flex-col">
                  {openingTimes.colombo.map((item, index) => (
                    <ListItem key={index} text={item.text} icon={item.icon} />
                  ))}
                </div>

                <h5 className="text-sm text-white mb-2 mt-4">Kandy Branch</h5>
                <div className="flex gap-2 flex-col">
                  {openingTimes.kandy.map((item, index) => (
                    <ListItem key={index} text={item.text} icon={item.icon} />
                  ))}
                </div>
              </>
            )}
            <h5 className="text-sm text-white mb-2 mt-4">London Branch</h5>
            <div className="flex gap-2 flex-col">
              {openingTimes.london.map((item, index) => (
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
            <p className="text-sm text-[#e0e0e0]">{isDubai ? dubaiEmail : colomboEmail}</p>

            <div className="flex gap-2 items-center relative bg-transparent mt-4">
              <PhoneIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Call Us
              </h5>
            </div>
            <p className="text-sm text-[#e0e0e0]">{isDubai ? dubaiPhoneNumber : colomboPhoneNumber}</p>

            <div className="flex gap-2 items-center relative bg-transparent mt-4">
              <NavigationIcon />
              <h5 className="text-center font-semibold text-base text-white">
                Visit Us
              </h5>
            </div>
            <p className="text-sm text-[#e0e0e0]">
              {isDubai ? dubaiAddress : sriLanksAddress}
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
