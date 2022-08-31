import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Global.module.css";

const Global = () => {
  return (
    <section className={classes.global}>
      <div className="container">
        <h2 className="main_heading">
          <span>Globally</span> Accepted
        </h2>
        <p className="main_para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <div className={classes.global_links}>
          <div className={classes.global_link}>
            <Image
              src="/domestic.png"
              width={600}
              height={400}
              alt="constructor"
              layout="responsive"
              priority
            />
            <div>
              <h3>For Domestic</h3>
              <Link href="#">Start trip today</Link>
            </div>
          </div>
          <div className={classes.global_link}>
            <Image
              src="/international.png"
              width={600}
              height={400}
              alt="students"
              layout="responsive"
              priority
            />
            <div>
              <h3>For International</h3>
              <Link href="#">Start trip today</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Global;
