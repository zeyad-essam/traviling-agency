import Image from "next/image";
import React from "react";

import classes from "./Info.module.css";

const Info = () => {
  return (
    <section className={classes.info}>
      <div className="container">
        <h2 className="main_heading">
          <span>Why</span> Choose Us
        </h2>
        <p className="main_para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <div className={classes.info_cards}>
          <div className={classes.info_card}>
            <div className={classes.card_header}>
              <Image src="/billing.png" width={100} height={100} alt="lorem" />
            </div>
            <h3>Handpicked Hotels</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </p>
          </div>
          <div className={classes.info_card}>
            <div className={classes.card_header}>
              <Image
                src="/calendar.png"
                width={100}
                height={100}
                alt="lorem"
                priority
              />
            </div>
            <h3>World Class Service</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </p>
          </div>
          <div className={classes.info_card}>
            <div className={classes.card_header}>
              <Image
                src="/customer.png"
                width={100}
                height={100}
                alt="lorem"
                priority
              />
            </div>
            <h3>Best Price Guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
