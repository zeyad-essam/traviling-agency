import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footer_top}>
          <div className={classes.logo}>
            <Image
              src="/footer-logo.png"
              width={117}
              height={65}
              alt="logo"
              layout="responsive"
              priority
            />
          </div>
          <h3>Domestic & International Tours</h3>
        </div>
        <div className={classes.subscribe}>
          <p>Subscribe to get our Newsletter</p>
          <form>
            <input type="email" placeholder="Your Email" required />
            <button>Subscribe</button>
          </form>
        </div>
        <div className={classes.footer_links}>
          <ul>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <p className={classes.copy_right}>© 2021 Class Technologies Inc. </p>
      </div>
    </footer>
  );
};

export default Footer;
