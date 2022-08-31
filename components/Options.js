import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Options.module.css";

const Options = () => {
  return (
    <section className={classes.options}>
      <div className="container">
        <h2 className="main_heading">
          our <span>finest options</span>
        </h2>
        <p className="main_para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </p>
        <div className={classes.options_cards}>
          <div className={classes.options_card}>
            <Link href="#">
              <a>
                <div className={classes.image_wrapper}>
                  <Image
                    src="/thailand.png"
                    width={430}
                    height={430}
                    alt="thailand"
                    layout="responsive"
                    priority
                  />
                </div>
                <h4>Thailand</h4>
              </a>
            </Link>
          </div>
          <div className={classes.options_card}>
            <Link href="#">
              <a>
                <div className={classes.image_wrapper}>
                  <Image
                    src="/paris.png"
                    width={430}
                    height={430}
                    alt="paris"
                    layout="responsive"
                    priority
                  />
                </div>
                <h4>Paris</h4>
              </a>
            </Link>
          </div>
          <div className={classes.options_card}>
            <Link href="#">
              <a>
                <div className={classes.image_wrapper}>
                  <Image
                    src="/egypt.png"
                    width={430}
                    height={430}
                    alt="thailand"
                    layout="responsive"
                    priority
                  />
                </div>
                <h4>Egypt</h4>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
