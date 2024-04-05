"use client"; // Error components must be Client Components
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center row">
        <div className=" col-md-6">
          <Image
            src="/disapoented.jpg"
            alt="404 error"
            className="img-fluid"
            width={500}
            height={500}
            loading={"lazy"}
            style={{ width: "100%" }}
          />
        </div>
        <div className=" col-md-6 mt-5">
          <p className="fs-3">
            {" "}
            <span className="text-info">opps!</span> no items with this link.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
