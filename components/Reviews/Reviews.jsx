"use client";

// import { useState } from 'react';
import { Rating } from "primereact/rating";
import styles from "./Reviews.module.css";
import { ProgressBar } from "react-bootstrap";
// import Image from 'next/image';

export default function Reviews({ data }) {
  const reviewsData = data || {};
  return (
    <>
      <div className="px-5 py-5">
        <h2 style={{ marginBottom: "40px" }}>Product reviews Display</h2>
        <div className={styles.sectionsBox}>
          <div className={styles.ratingBox}>
            <p style={{ fontWeight: "bold" }}>Overall Rating</p>
            <div>
              <h1 style={{ color: "#000", fontWeight: "bold" }}>
                {reviewsData && reviewsData.ratingsAverage}
                <span style={{ color: "#717171" }}>/5</span>
              </h1>
              <Rating
                value={reviewsData && reviewsData.ratingsAverage}
                disabled
                cancel={false}
                className={styles.stars}
              />
              <span>{reviewsData && reviewsData.ratingsQuantity} reviews</span>
            </div>
          </div>
          <div className={styles.progressBox}>
            <p style={{ fontWeight: "bold" }}>Rating Breakdown</p>
            <div className={styles.progressBoxes}>
              <div className={styles.progress}>
                <span>5</span>
                <Rating
                  value={1}
                  disabled
                  stars={1}
                  cancel={false}
                  className={styles.stars}
                />
                <ProgressBar
                  variant="success"
                  now={reviewsData?.ratingsGroup?.rate_5_count * 10 || 0}
                  style={{ width: "120px", height: "10px" }}
                />
                <span>{reviewsData?.ratingsGroup?.rate_5_count || 0}</span>
              </div>
              <div className={styles.progress}>
                <span>4</span>
                <Rating
                  value={1}
                  disabled
                  stars={1}
                  cancel={false}
                  className={styles.stars}
                />
                <ProgressBar
                  variant="warning"
                  now={reviewsData?.ratingsGroup?.rate_4_count * 10 || 0}
                  style={{ width: "120px", height: "10px" }}
                />
                <span>{reviewsData?.ratingsGroup?.rate_4_count || 0}</span>
              </div>
              <div className={styles.progress}>
                <span>3</span>
                <Rating
                  value={1}
                  disabled
                  stars={1}
                  cancel={false}
                  className={styles.stars}
                />
                <ProgressBar
                  variant="info"
                  now={reviewsData?.ratingsGroup?.rate_3_count * 10 || 0}
                  style={{ width: "120px", height: "10px" }}
                />
                <span>{reviewsData?.ratingsGroup?.rate_3_count || 0}</span>
              </div>
              <div className={styles.progress}>
                <span>2</span>
                <Rating
                  value={1}
                  disabled
                  stars={1}
                  cancel={false}
                  className={styles.stars}
                />
                <ProgressBar
                  variant="danger"
                  now={reviewsData?.ratingsGroup?.rate_2_count * 10 || 0}
                  style={{ width: "120px", height: "10px" }}
                />
                <span>{reviewsData?.ratingsGroup?.rate_2_count || 0}</span>
              </div>
              <div className={styles.progress}>
                <span>1</span>
                <Rating
                  value={1}
                  disabled
                  stars={1}
                  cancel={false}
                  className={styles.stars}
                />
                <ProgressBar
                  variant="danger"
                  now={reviewsData?.ratingsGroup?.rate_1_count * 10 || 0}
                  style={{ width: "120px", height: "10px" }}
                />
                <span>{reviewsData?.ratingsGroup?.rate_1_count || 0}</span>
              </div>
            </div>
          </div>
          <div className={styles.mostHelpful}>
            <p style={{ fontWeight: "bold" }}>Most helpful review</p>
            <div className={styles.helpfulBox}>
              <div className={styles.userCard}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="119"
                  height="140"
                  viewBox="0 0 119 140"
                  fill="none"
                >
                  <g clipPath="url(#clip0_398_2386)">
                    <rect width="119" height="140" rx="8" fill="#33B9FF" />
                    <circle cx="59" cy="78" r="28" fill="white" />
                    <path
                      d="M107 143.5C107 134.88 101.996 126.614 93.0876 120.519C84.1796 114.424 72.0978 111 59.5 111C46.9022 111 34.8204 114.424 25.9124 120.519C17.0045 126.614 12 134.88 12 143.5L59.5 143.5H107Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_398_2386">
                      <rect width="119" height="140" rx="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>21.July.2023</span>
              </div>
              <div className={styles.rateAndComment}>
                <Rating
                  value={reviewsData && reviewsData.ratingsAverage}
                  disabled
                  cancel={false}
                  className={styles.stars}
                />
                <span className={styles.name}>Salma Sherif</span>
                <div className={styles.commentSection}>
                  <span className={styles.shortComment}>Nice Item</span>
                  <span className={styles.fullComment}>
                    This item is nice, This item is nice, This item is nice,
                    This item is nice.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
