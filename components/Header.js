import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import classes from "./Header.module.css";

const navLinks = ["home", "events", "about", "blog", "contact"];

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${showHeader ? classes.show : ""}`}>
      <div className={classes.nav_wrapper}>
        <nav className={`${showHeader ? classes.show : ""}`}>
          <div className={classes.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  width={117}
                  height={65}
                  alt="logo"
                  layout="responsive"
                  priority
                />
              </a>
            </Link>
          </div>
          <ul
            className={`${classes.navbar_links} ${
              openMobileMenu ? classes.open : ""
            }`}
          >
            {navLinks.map((link) => (
              <li key={link}>
                <Link href="#">
                  <a
                    onClick={() => {
                      setOpenMobileMenu(false);
                    }}
                  >
                    {link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={classes.mobile_button}>
            <i
              onClick={() => {
                setOpenMobileMenu(!openMobileMenu);
              }}
            >
              {openMobileMenu ? <IoCloseOutline /> : <IoIosMenu />}
            </i>
          </div>
        </nav>
      </div>
      <div className={classes.hero}>
        <h1>A whole world of landscapes max</h1>
        <div className={classes.hero_links}>
          <div className={classes.place_link}>
            <Link href="#">Choose a new place</Link>
          </div>
          <div className={classes.watch_link}>
            <Link href="#">
              <a>
                <Image
                  src="/play_button.png"
                  width={50}
                  height={50}
                  alt="play"
                  priority
                />
                <p>watch it&apos;s operation</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
