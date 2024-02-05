import "../Contact/Contact.scss";
import { useRef, useState } from "react";
import { ID } from "appwrite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { databases, storage } from "../../../../appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AboutUs from "../AboutUs/AboutUs";
import { Link } from "react-router-dom";
import CardItem from "../../../CommonFunctionality/ServiceCard/Card";

interface FormData {
  nameInput: string;
  emailInput: string;
  messageInput: string;
}
const Contact = () => {
  const BucketId = "projectImages";
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formData: FormData = {
        nameInput: nameRef.current.value,
        emailInput: emailRef.current.value,
        messageInput: messageRef.current.value,
      };
      if (formData.nameInput && formData.emailInput && formData.messageInput) {
        const promise = databases.createDocument(
          "659681feb0c97e65e766",
          "65a685d940dc9e145472",
          ID.unique(),
          {
            FullName: formData.nameInput,
            Email: formData.emailInput,
            Message: formData.messageInput,
          }
        );

        const serviceId = "service_jlreisr";
        const templateId = "template_9p6gnwi";
        const publicKey = "KjxJuBgPkz6D0kFf9";
        const data = {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.nameInput,
            from_email: formData.emailInput,
            to_name: "3legant",
            message: formData.messageInput,
          },
        };
        const mailSentResponse = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        console.log("Document created:", promise, "\n", mailSentResponse);

        toast.success("Successfully Sent");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        toast.error("Please fill in all fields before sending the message");
      }
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <>
      <section className="container">
        <div className="header_links p-3 d-flex gap-2 align-items-center">
          <Link to="/home" className="text-decoration-none text-secondary">
            Home
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <a href="#" className="text-decoration-none text-dark">
            <b>Contact</b>
          </a>
        </div>
        <div className=" d-flex flex-column gap-1">
          <span className="h1 d-block fw-bold">
            We believe in sustainable decor.
          </span>
          <span className="h1 fw-bold">
            We’re passionate about life at home.
          </span>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classNameic design, which can be incorporated
            into any decor project. The pieces enchant for their sobriety, to
            last for generations, faithful to the shapes of each period, with a
            touch of the present
          </p>
        </div>
      </section>

      <AboutUs />
      <section className="container p-4">
        <span className="h1 d-flex justify-content-center fw-bold">
          Contact Us
        </span>
        <div className=" d-flex justify-content-between gap-3 align-self-center align-items-stretch flex-wrap my-3">
          <div className=" card card-body d-flex align-items-center gap-2 border-0 bg-light">
            <img
              src={`${storage.getFilePreview(BucketId, "Address")}`}
              alt="address_icon"
              className="details"
            />
            <span className="h5 fw-bold">ADDRESS</span>
            <span className="h6">234 Hai Trieu,Ho Chi Minh City,</span>
            <span className="h6">Viet Nam</span>
          </div>
          <div className="contact_container card card-body d-flex gap-2 align-items-center bg-light border-0">
            <img
              src={`${storage.getFilePreview(BucketId, "call")}`}
              alt="contact"
            />
            <span className="h5 fw-bold">CONTACT US</span>
            <span className="h6">+84 234 567 890</span>
          </div>
          <div className="mail_container card card-body d-flex gap-2 align-items-center border-0 bg-light">
            <img
              src={`${storage.getFilePreview(BucketId, "mail")}`}
              alt="email_icon"
            />
            <span className="h5 fw-bold">EMAIL</span>
            <span className="h6">hello@3legant.com</span>
          </div>
        </div>
      </section>

      <section className="container text-center mb-4">
        <div className="row d-flex gap-3">
          <div className="col-12 col-md-4">
            <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
              <div className="form-group d-flex flex-column align-items-start gap-2">
                <label className="fw-medium">FULL NAME</label>
                <input
                  type="text"
                  className="form-control w-100 shadow-none"
                  placeholder="Your Name"
                  ref={nameRef}
                />
              </div>
              <div className="form-group d-flex flex-column align-items-start gap-2">
                <label className="fw-medium">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="form-control shadow-none"
                  id="exampleInputPassword1"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div className="form-group d-flex flex-column align-items-start gap-2">
                <label className="fw-medium">MESSAGE</label>
                <textarea
                  className="form-control message_field shadow-none"
                  name="message"
                  placeholder="Message"
                  ref={messageRef}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
                <ToastContainer />
              </button>
            </form>
          </div>
          <div className="col-12 col-md-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
              className="h-100 w-100 location_image"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <CardItem />
    </>
  );
};

export default Contact;
