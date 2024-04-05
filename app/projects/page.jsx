"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Loader from "@/components/loader/loader";
import { Footer } from "@/components";
import Image from "next/image";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowMain(true);
      }, 500);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <main
          className={`${styles.mainSection} ${showMain ? styles.show : ""}`}
        >
          <div className={`container mt-5  mb-5`}>
            <div className="row g-4">
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 9.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 10.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 9.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 10.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 9.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 10.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 9.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                  <div className={`${styles.image}`}>
                    <Image
                      className="w-100"
                      src="images/image 10.png"
                      alt="product1"
                    />
                  </div>
                  <div className={`${styles.caption} `}>
                    <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                    <p>
                      <Link className={`${styles.link}`} href={"/projects/dd"}>
                        View Project{" "}
                        <i className="bi bi-arrow-right ps-2 fa-sm"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="px-2 py-2 footerSection" />
        </main>
      )}
    </>
  );
};

export default Page;
