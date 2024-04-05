"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./quickQuote.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function QuickQuote() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("email is required")
      .email("Type a valid email address"),
    phoneNumber: Yup.string()
      .required("phone number is required")
      .matches(/^01[0125][0-9]{8}$/gm, "Type a valid number"),
    subject: Yup.string().required("subject is required"),
    message: Yup.string().required("message is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const form = useRef();
  const [responseMessage, setMessage] = useState(null);
  const sendEmail = async () => {
    // e.preventDefault();

    try {
      const isValid = await form.current.reportValidity();
      if (isValid) {
        emailjs
          .sendForm(
            "service_f9khdvu",
            "template_degpul8",
            form.current,
            "3FqJG_Ro56DWbg4Wt",
          )
          .then((result) => {
            setMessage("Success sending email");
          })
          .catch((error) => {
            setMessage("Error sending email");
          });
      }
    } catch (error) {
      console.error("Form validation error", error);
    }
  };

  return (
    <div className={styles.ourFormStyle} id={"contact"}>
      <h3>Request a quick quote</h3>
      <p>
        Please kindly fill in the table below , we will response to your
        question soon
      </p>
      <form action="" ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className={styles.formSection}>
          <div className={"row" + styles.fromHalfSection}>
            <div
              className="form-outline"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="text"
                id="form3Example1"
                {...register("username")}
                className={styles.item}
                placeholder="Your Name"
                name="username"
              />
              <span className="text-danger">{errors.username?.message}</span>
            </div>
            <div
              className="form-outline"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="email"
                id="form3Example2"
                className={styles.item}
                {...register("email")}
                placeholder="Email"
                name="email"
              />
              <span className="text-danger">{errors.email?.message}</span>
            </div>
            <div
              className="form-outline"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="tel"
                id="form3Example3"
                className={styles.item}
                placeholder="Phone number"
                {...register("phoneNumber")}
                name="phoneNumber"
              />
              <span className="text-danger">{errors.phoneNumber?.message}</span>
            </div>
          </div>
          <div className={"row" + styles.fromHalfSection}>
            <div
              className="form-outline"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="text"
                id="form3Example4"
                className={styles.item}
                placeholder="Subject"
                {...register("subject")}
                name="subject"
              />
              <span className="text-danger">{errors.subject?.message}</span>
            </div>
            <div
              className="form-outline mb-4"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <textarea
                className={styles.item + " textArea"}
                style={{ resize: "none", height: "120px" }}
                id="form4Example5"
                {...register("message")}
                placeholder="Your Message"
                name="message"
              ></textarea>
              <span className="text-danger">{errors.message?.message}</span>
            </div>
          </div>
        </div>
        {responseMessage && (
          <div className={`alert alert-info`}>{responseMessage}</div>
        )}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
