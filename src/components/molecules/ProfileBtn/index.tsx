"use client";
import { ConfirmationDialog } from "@/components/atoms";
import { useUserStore } from "@/store";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

export const ProfileBtn = () => {
  const { reset } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

  const solutions = [
    {
      name: "Dashboard",
      description: "Manage your applications",
      href: "/dashboard",
      icon: IconOne,
    },
    {
      name: "My Applications",
      description: "View your application documents",
      href: "##",
      icon: IconThree,
    },
    {
      name: "Settings",
      description: "Manage your account settings",
      href: "##",
      icon: IconTwo,
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
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center justify-center w-9 h-9 focus:ring-2 rounded-full bg-primary text-white focus-visible:ring focus-visible:ring-primary">
              <div className="cursor-pon">
                <img
                  className="h-9 w-9 rounded-full ring-1 ring-primary shadow-md"
                  src={`${process.env["NEXT_PUBLIC_IMAGE_STORE"]}/ProfileMy.png`}
                  alt=""
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
              <Popover.Panel className="absolute left-1/2 z-10 mt-3  w-[330px] -translate-x-1/2 transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-whiteGray focus:outline-none focus-visible:ring focus-visible:ring-primary"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-textColor">
                            {item.name}
                          </p>
                          <p className="text-xs text-textColor">
                            {item.description}
                          </p>
                        </div>
                      </Link>
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
                        Log out of your account{" "}
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#BDDDED" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#065DA8"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#4FA1CA"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#9FCDE4"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#BDDDED" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#065DA8"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#9FCDE4"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#BDDDED" />
      <rect x="13" y="32" width="2" height="4" fill="#9FCDE4" />
      <rect x="17" y="28" width="2" height="8" fill="#9FCDE4" />
      <rect x="21" y="24" width="2" height="12" fill="#4FA1CA" />
      <rect x="25" y="20" width="2" height="16" fill="#4FA1CA" />
      <rect x="29" y="16" width="2" height="20" fill="#065DA8" />
      <rect x="33" y="12" width="2" height="24" fill="#065DA8" />
    </svg>
  );
}
