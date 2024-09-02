import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import "../index.css";
import { Button } from "./ui/button";
import { ChevronRightIcon, TextAlignJustifyIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const header = document.querySelector("header");
  const headerOffset = header ? header.offsetHeight : 0;

  const offsetPosition =
    element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const Header = () => {
  return (
    <header className="sticky z-[100] h-28 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <nav>
          <div className="flex flex-row items-center justify-between py-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor click behavior
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scroll
                });
              }}
            >
              <img
                src="/logo.png"
                alt="logo"
                className="h-24 cursor-pointer min-w-24"
              />
            </a>

            <div className="hidden lg:flex ">
              <ul className="flex flex-row items-center gap-8 text-xl font-semibold uppercase rajdhani-semibold">
                <li className="relative cursor-pointer">
                  <a
                    onClick={() => scrollToSection("menu")}
                    className="after:bg-red-500"
                  >
                    Menu
                  </a>
                </li>
                <li className="relative cursor-pointer">
                  <a
                    onClick={() => scrollToSection("gallery")}
                    className="after:bg-red-500"
                  >
                    Galéria
                  </a>
                </li>
                <li className="relative cursor-pointer">
                  <a
                    onClick={() => scrollToSection("contact")}
                    className="after:bg-red-500"
                  >
                    Kontakt
                  </a>
                </li>
                <li>
                  <Button
                    className="text-lg tracking-wider rajdhani-semibold upp"
                    onClick={() => scrollToSection("order")}
                  >
                    Objednaj si tu <ChevronRightIcon />
                  </Button>
                </li>
              </ul>
            </div>

            <div className="flex lg:hidden">
              <NavigationMenu className="rajdhani-semibold">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {" "}
                      <TextAlignJustifyIcon className="w-10 h-10" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="relative flex flex-col gap-2 p-3 text-md">
                      <NavigationMenuLink
                        className="cursor-pointer navigation-menu-link after:bg-red-500"
                        onClick={() => scrollToSection("menu")}
                      >
                        Menu
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="cursor-pointer navigation-menu-link after:bg-red-500"
                        onClick={() => scrollToSection("gallery")}
                      >
                        Galéria
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        className="cursor-pointer navigation-menu-link after:bg-red-500"
                        onClick={() => scrollToSection("contact")}
                      >
                        Kontakt
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        <Button className="tracking-wider rajdhani-semibold ">
                          Objednaj si tu <ChevronRightIcon />
                        </Button>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
