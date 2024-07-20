import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../Components/Modal/Fox";
import { Loader } from "@react-three/drei";
import useAlert from "../../hooks/useAlert";
import Alert from "../../Components/Modal/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  const hadleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          form_name: form.name,
          to_name: "Sohel rana",
          from_email: form.email,
          to_email: "mdabircse4873@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          text: "email send succesfully",
          type: "success",
        });
        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "I didnt recieve your message",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative  min-h-screen flex lg:flex-row flex-col max-container  py-20">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col bg-gradient-to-l from-slate-100 to-sky-300 p-10 rounded-lg">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug ">
          Get in Touch
        </h1>
        <form
          className="w-full flex flex-col gap-7 md:mt-14 mt-10"
          onSubmit={handleSubmit}
        >
          <label className="text-xl text-black font-semibold px-2">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Sohel"
            required
            value={form.name}
            onChange={hadleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-xl text-black font-semibold px-2">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="sohel@gmail.com"
            required
            value={form.email}
            onChange={hadleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-xl text-black font-semibold px-2">
            You Message
          </label>
          <textarea
            name="message"
            rows={4}
            className="textarea"
            placeholder="Let me know how I can help you!"
            required
            value={form.message}
            onChange={hadleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="btn btn-success text-white"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className=" w-full  mx-auto  md:ml-20 ml-1 mt-10 md:mt-5">
        <div className=" mx-10  flex flex-col justify-center">
          <div>
            <h1 className="text-3xl font-semibold  mb-10">
              Join our newsletter
            </h1>
            <div className="flex justify-center ">
              <p className="text-sm font-medium text-black">
                {" "}
                Virtual Tutor" website, you want to craft a message that clearly
                communicates the benefits of subscribing, such as receiving
                updates about new courses, special offers, educational tips, and
                more. Here's a suggested write-up for your newsletter section:{" "}
              </p>
            </div>
            <div className="flex flex-col mt-20">
              <div>
                <h4 className="text-xl font-semibold">Adrees:</h4>
                <p className="text-sm font-medium">
                  House-12,
                  <br /> Road-16,
                  <br /> Nikunjja-02 khilkhet.
                  <br /> Dhaka ,Bangladesh
                </p>
              </div>
              <div className="mt-20">
                <h4 className="text-xl font-semibold">
                  Alternatively contact us as:
                </h4>
                <p className="text-sm font-medium">
                  <span>virtualtutor@gmail.com</span>
                  <p>24/7 support: 09696974873</p>
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
