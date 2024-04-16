"use client";
import Link from "next/link";
import { ContainerLayout, MainButton, MenuItem } from "@/components/atoms";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import { useUserStore } from "@/store";
import { ProfileBtn } from "..";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { authUser, user } = useUserStore();

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <ContainerLayout>
        <nav
          className="mx-auto flex w-full justify-between items-center  py-3"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/">
              <Image
                className="h-14 w-auto"
                src="/images/Logo-Clr.png"
                alt="Campus Direct"
                width={150}
                height={50}
              />
            </Link>
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
            <MenuItem menuName="Home" uri={"/"} />
            <MenuItem menuName="About Us" uri="/about" />
            <MenuItem menuName="Courses" uri="/courses" />
            <MenuItem menuName="Events" uri="/events" />
            <MenuItem menuName="Scholarships" uri="/scholarships" />
            <MenuItem menuName="Careers" uri="/careers" />
            <MenuItem menuName="Blogs" uri="/blogs" />
            <MenuItem menuName="Contact Us" uri="/contact" />
          </div>
          <div className="hidden xl:flex xl:flex-1 lg:justify-end gap-4 items-center">
            {authUser ? (
              <ProfileBtn />
            ) : (
              <Link href="/login" className="text-sm text-primary">
                Login
              </Link>
            )}

            {!authUser && (
              <Link href="/register" className="text-sm text-primary">
                Register
              </Link>
            )}
            <MainButton
              label="Find My Course"
              btnStyle="Primary"
              btnSize="Medium"
            />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center xl:hidden">
            {authUser && <ProfileBtn />}
            <MainButton
              label="Find My Course"
              btnStyle="Primary"
              btnSize="Medium"
            />
            {!authUser && (
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
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-sm text-primary"
                      >
                        Login
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/register"
                        className="block px-4 py-2 text-sm text-primary"
                      >
                        Register
                      </Link>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            )}
          </div>
        </nav>
      </ContainerLayout>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-100 w-full" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10  w-full bg-white px-4 py-4 ">
          <div className="flex items-center justify-between w-full">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-14 w-auto"
                src="/images/Logo-Clr.png"
                alt=""
                width={150}
                height={50}
              />
            </a>
            <button
              type="button"
              className=" rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 flow-root">
            <div>
              <div className="space-y-5 py-6 flex flex-col border-b border-borderGray">
                <MenuItem
                  menuName="Home"
                  uri={"/"}
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="About Us"
                  uri="/about"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Courses"
                  uri="/courses"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Events"
                  uri="/events"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Scholarships"
                  uri="/scholarships"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Careers"
                  uri="/careers"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
                <MenuItem
                  menuName="Contact Us"
                  uri="/contact"
                  setMobileMenuOpen={() => setMobileMenuOpen(false)}
                />
              </div>
              <div className="pt-6 flex flex-col space-y-5">
                {!authUser && (
                  <Link
                    href="/login"
                    className="text-sm text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
                {!authUser && (
                  <Link
                    href="/auth/register"
                    className="text-sm text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                )}
                <div className="px-4 py-2 items-center relative h-18 bg-primary rounded shadow-md">
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
