import React from "react";

const Faq = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-3xl text-sky-900 font-bold my-6">FAQ,s</h1>
      <div className="collapse collapse-plus bg-slate-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1.What is Virtual Tutor?
        </div>
        <div className="collapse-content">
          <p>
            Virtual Tutor is an online learning platform that offers a wide
            range of courses and educational resources to help users enhance
            their skills and knowledge in various subjects.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-slate-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          2.How does Virtual Tutor work?
        </div>
        <div className="collapse-content">
          <p>
            Virtual Tutor works by providing users with access to interactive
            courses, video lectures, quizzes, and assignments that can be
            completed remotely from anywhere with internet access.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-slate-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          3.Who can use Virtual Tutor?
        </div>
        <div className="collapse-content">
          <p>
            Virtual Tutor is accessible to anyone interested in learning,
            regardless of age, background, or location. Students, professionals,
            and lifelong learners can benefit from the platform.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-slate-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          4.Is Virtual Tutor free to use?
        </div>
        <div className="collapse-content">
          <p>
            Virtual Tutor may offer some free courses or trial periods, but
            certain features and premium content may require a subscription or
            one-time payment. Detailed pricing information can be found on the
            Virtual Tutor website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
