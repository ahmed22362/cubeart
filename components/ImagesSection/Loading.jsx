"use client";

export default function Loading() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          aria-hidden="true"
          className="placeholder-glow"
          style={{ width: "600px" }}
        >
          <span className="placeholder col-6"></span>
        </p>
        <p
          aria-hidden="true"
          className="placeholder-glow"
          style={{ width: "400px" }}
        >
          <span className="placeholder col-6"></span>
        </p>
        <p
          aria-hidden="true"
          className="placeholder-glow"
          style={{ width: "200px" }}
        >
          <span className="placeholder col-6"></span>
        </p>
      </div>
    </>
  );
}
