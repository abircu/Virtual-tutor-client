import heroImage from "../assets/home/hero_image.jpg";

const Bannner = () => {
  return (
    <div
      className="hero min-h-fit lg:min-h-screen bg-indigo-800 bg-fixed  bg-opacity-30"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-purple-300">
            Welcome to Vertual tutor
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Bannner;
