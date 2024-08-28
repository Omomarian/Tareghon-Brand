import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="contact--page grid place-items-center w-screen h-full py-10 bg-zinc-900 font">
        <div className="text-center text-white">
          <h1 className="font-extrabold mb-8 text-5xl ">How Can We Help?</h1>
          <h2 className="font-mono flex flex-col space-y-4">Chat with us</h2>
          <p>Send a text: +234-806-958-9134</p>
          <p>Give us a call: +234-705-426-0366 </p>
          <p>Monday-Friday: 10AM - 4PM WAT</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
