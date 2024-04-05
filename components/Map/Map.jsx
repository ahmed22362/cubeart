"use client";

export default function Map() {
  return (
    <>
      <iframe
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.44763152001923!2d30.843871739108!3d29.306920226042852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145979040eb3d9a5%3A0x5f2e857ec9ff46f7!2sCubeart%20Ltd.!5e0!3m2!1sen!2seg!4v1693135147630!5m2!1sen!2seg"
        }
        width={"400"}
        height={"300"}
        style={{ border: "0", borderRadius: "8px" }}
        loading={"lazy"}
      ></iframe>
    </>
  );
}
