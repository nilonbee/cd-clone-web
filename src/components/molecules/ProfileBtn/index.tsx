"use client";
import { ConfirmationDialog } from "@/components/atoms";
import { SettingsIcon, ProfileIcon, HomeIcon } from "@/components/atoms/Icons";
import { useUserStore } from "@/store";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

export const ProfileBtn = () => {
  const { reset } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const solutions = [
    {
      name: "My Applications",
      description: "Manage your applications",
      href: "/applications",
      icon: HomeIcon,
    },
    {
      name: "My Profile",
      description: "Manage your profile",
      href: "/profile",
      icon: ProfileIcon,
    },
    {
      name: "Settings",
      description: "Manage your account settings",
      href: "/settings",
      icon: SettingsIcon,
    },
  ];

  const logOut = () => {
    reset();
    toast.success("Logged out successfully");
    setIsOpen(false);
  };

  return (
    <div>
      <Popover className="relative">
        <>
          <Popover.Button className="flex items-center justify-center w-9 h-9 focus:ring-2 rounded-full bg-primary text-white focus-visible:ring focus-visible:ring-primary">
            <div className="cursor-pon">
              <Image
                className="h-9 w-9 rounded-full ring-1 ring-primary shadow-md"
                src={`${process.env["NEXT_PUBLIC_IMAGE_STORE"]}/ProfileMy.png`}
                alt=""
                width={36}
                height={36}
              />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3  w-[300px] -translate-x-1/2 transform px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="relative grid gap-8 bg-white p-7">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => {
                        router.push(item.href);
                      }}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-whiteGray focus:outline-none focus-visible:ring focus-visible:ring-primary cursor-pointer"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center text-white">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-textColor">
                          {item.name}
                        </p>
                        <p className="text-xs text-textColor">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-grayLight p-4">
                  <div
                    onClick={() => setIsOpen(true)}
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
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
      {isOpen && (
        <ConfirmationDialog
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          onConfirm={logOut}
          title="Log out 🤔"
          description="Are you sure you want to log out of your account?"
        />
      )}
    </div>
  );
};
