import Image from "next/image";
import Link from "next/link";
import React from "react";

import classes from "./Watch.module.css";

const Watch = () => {
  return (
    <section className={classes.watch}>
      <div className="container">
        <div className={classes.watch_inner}>
          <div className={classes.watch_text}>
            <h4>
              <span>Watch,</span> our lattest vlog
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className={classes.watch_video}>
            <Link href="#">
              <a>
                <Image
                  src="/tour.png"
                  width={705}
                  height={472}
                  alt="tour image"
                  layout="responsive"
                  priority
                />
                <div>
                  <Image
                    src="/play_button.png"
                    width={50}
                    height={50}
                    alt="Play"
                    priority
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Watch;
