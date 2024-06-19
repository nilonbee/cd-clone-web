"use client";
import { Avatar, ConfirmationDialog } from "@/components/atoms";
import { useUserStore } from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";

export const ProfileDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { reset } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const drawerRef = useRef(null);

  const solutions = [
    {
      name: "My Applications",
      description: "Manage your applications",
      href: "/applications",
      icon: "/images/icons/application.svg",
    },
    {
      name: "My Profile",
      description: "Manage your profile",
      href: "/profile",
      icon: "/images/icons/profile.png",
    },
    {
      name: "Settings",
      description: "Manage your account settings",
      href: "/settings",
      icon: "/images/icons/setting.svg",
    },
  ];

  const logOut = () => {
    reset();
    toast.success("Logged out successfully");
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !(drawerRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setOpenDrawer(false);
    }
  };

  useEffect(() => {
    if (openDrawer) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDrawer]);

  return (
    <React.Fragment>
      <div
        className="flex items-center justify-center w-9 h-9 rounded-full text-white focus-visible:none cursor-pointer relative"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Avatar />
      </div>
      <div
        ref={drawerRef}
        className={`${
          openDrawer ? "block" : "hidden"
        } absolute top-0 right-1 w-[300px] h-auto bg-white z-20 mt-[90px] rounded-lg shadow-lg ring-1 ring-black/5`}
      >
        <div className="overflow-hidden m-2 relative">
          <div className=" grid gap-1 bg-white">
            {solutions.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  router.push(item.href);
                  setOpenDrawer(false);
                }}
                className="px-3 py-2 flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-whiteGray focus:outline-none focus-visible:ring focus-visible:ring-primary cursor-pointer"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white">
                  {/* <item.icon aria-hidden="true" /> */}
                  <Image src={item.icon} alt="" width={36} height={36} />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium text-textColor">
                    {item.name}
                  </p>
                  <p className="text-xs text-textColor">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-grayLight p-2 rounded-md mt-2">
            <div
              onClick={() => {
                setIsOpen(true);
                setOpenDrawer(false);
              }}
              className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-whiteGray focus:outline-none focus-visible:ring focus-visible:ring-primary cursor-pointer"
            >
              <span className="flex items-center">
                <span className="text-sm font-medium text-textColor">
                  Log out
                </span>
              </span>
              <span className="block text-xs text-textColor">
                Log out of your account <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ConfirmationDialog
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          onConfirm={logOut}
          title="Log out 🤔"
          description="Are you sure you want to log out of your account?"
          submitText="Logout"
        />
      )}
    </React.Fragment>
  );
};
