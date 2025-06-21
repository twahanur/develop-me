import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowRight } from "lucide-react";
import ButtonWithIcon from "../commom/buttonWithIcon";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent shadow-md">
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 justify-between items-center">
              <div className="flex items-center">
                <span className="text-4xl font-bold">DEVELOP.ME</span>
              </div>

              {/* Desktop Navigation */}
              <div className="flex space-x-28">
                <div className="hidden sm:flex text-2xl sm:items-center sm:space-x-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-black"
                          : "text-gray-600 hover:text-black",
                        "font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Start Project Button */}
                <div className="hidden sm:flex items-center">
                  <ButtonWithIcon className="py-1" text="Start Project">
                    <ArrowRight
                      className="mr-2 border-1 rounded-full w-10 h-10"
                      size={16}
                    />
                  </ButtonWithIcon>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Panel */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-4 pt-4 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-black"
                      : "text-gray-600 hover:text-black",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <div className="mt-4">
                <ButtonWithIcon className="py-1" text={"Start Project"}>
                  <ArrowRight className="mr-2 my-2" size={18} />
                </ButtonWithIcon>
                
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
