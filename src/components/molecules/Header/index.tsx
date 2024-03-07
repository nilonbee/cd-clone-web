/* eslint-disable @next/next/no-img-element */
"use client";
import { ContainerLayout, MenuItem } from "@/components/atoms";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <ContainerLayout>
        <nav
          className="mx-auto flex w-full justify-between items-center  py-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/">
              <img
                className="h-12 w-auto"
                src="/images/Logo-Clr.png"
                alt="Logo of Campus Direct"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-textColor"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex gap-8">
            <MenuItem menuName="Home" uri={"/lk"} />
            <MenuItem menuName="About Us" uri="/lk/about" />
            <MenuItem menuName="Courses" uri="/lk/courses" />
            <MenuItem menuName="Events" uri="/lk/events" />
            <MenuItem menuName="Scholarships" uri="/lk/scholarships" />
            <MenuItem menuName="Careers" uri="/lk/careers" />
            <MenuItem menuName="Contact Us" uri="/lk/contact" />
          </div>
          <div className="hidden xl:flex xl:flex-1 lg:justify-end gap-4 items-center">
            <a href="#" className="text-sm text-primary">
              Login
            </a>
            <a href="#" className="text-sm text-primary">
              Register
            </a>
            <div className="px-4 py-2 items-center relative h-18 bg-primary">
              <p className="text-base font-semibold text-white">
                Find My Course
              </p>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center xl:hidden">
            <div className="px-4 py-2 items-center relative h-18 bg-primary">
              <p className="text-base font-semibold text-white">
                Find My Course
              </p>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="text-primary">
                  <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Menu.Items
                className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-red
            "
              >
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-primary"
                    >
                      Login
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-primary"
                    >
                      Register
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </nav>
      </ContainerLayout>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-100" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto" src="/images/Logo-Clr.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 flow-root">
            <div>
              <div className="space-y-5 py-6 flex flex-col border-b border-borderGray">
                <MenuItem menuName="Home" uri={"/lk"} />
                <MenuItem menuName="About Us" uri="/lk/about" />
                <MenuItem menuName="Courses" uri="/lk/courses" />
                <MenuItem menuName="Events" uri="/lk/events" />
                <MenuItem menuName="Scholarships" uri="/lk/scholarships" />
                <MenuItem menuName="Careers" uri="/lk/careers" />
                <MenuItem menuName="Contact Us" uri="/lk/contact" />
              </div>
              <div className="pt-6 flex flex-col space-y-5">
                <a href="#" className="text-sm text-primary">
                  Login
                </a>
                <a href="#" className="text-sm text-primary">
                  Register
                </a>
                <div className="px-4 py-2 items-center relative h-18 bg-primary">
                  <p className="text-base font-semibold text-white">
                    Find My Course
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
