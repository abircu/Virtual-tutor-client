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
    <section className="relative  min-h-screen flex lg:flex-row flex-col max-container bg-slate-200 py-20">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug">
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
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Model
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
