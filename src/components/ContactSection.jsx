import React, { useRef, useState } from "react";
import ServiceInput from "../reuse/ServiceInput";
import { getDatabase, push, ref, set } from "firebase/database";
import { toast } from "react-toastify";
import { DNA } from "react-loader-spinner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSection = () => {
  let [loader, setLoader] = useState(false);
  let [clientName, setClientName] = useState("");
  let [clientEmail, setClientEmail] = useState("");
  let [clientSubject, setClientSubject] = useState("");
  let [clientMessage, setClientMessage] = useState("");
  const handleName = (e) => {
    setClientName(e.target.value);
  };
  const handleEmail = (e) => {
    setClientEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setClientSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setClientMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setLoader(true);
    // Ensure none of the fields are undefined
    if (!clientName || !clientEmail || !clientSubject || !clientMessage) {
      toast.error("Field is empty.");
      setLoader(false);
      return;
    }

    const db = getDatabase();
    const newMessageRef = push(ref(db, "Client")); // Generates a unique ID

    set(newMessageRef, {
      username: clientName,
      email: clientEmail,
      subject: clientSubject,
      message: clientMessage,
    })
      .then(() => {
        toast.success("Message sent!");
        setLoader(false);
        setClientName("");
        setClientEmail("");
        setClientSubject("");
        setClientMessage("");
      })
      .catch((error) => {
        toast.error("Error writing to database.");
        setLoader(false);
      });
  };

  const title = useRef();
  const para = useRef();
  const inputs = useRef();
  const button = useRef();
  const map = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contactSection",
        scroller: "body",
        start: "top 60%",
      },
    });
    tl.from(title.current, {
      x: -70,
      opacity: 0,
      duration: 1,
    });
    tl.from(
      para.current,
      {
        y: 70,
        opacity: 0,
        duration: 1,
      },
      "-=0.7"
    );
    tl.from(
      inputs.current.querySelectorAll(".input"),
      {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      "-=0.7"
    );
    tl.from(
      button.current,
      {
        opacity: 0,
      },
      "-=0.7"
    );
    tl.from(
      map.current,
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      "-=2"
    );
  });

  return (
    <section id="contactSection">
      <div className="container mx-auto p-[10px]">
        <div className="dark:text-white">
          <div className="">
            <div className="sm:flex items-center justify-between">
              <h2
                ref={title}
                className="text-[25px] sm:text-[30px] lg:text-[40px] font-bold"
              >
                Contact{" "}
                <span className="text-[tomato] dark:text-[#0ef]">Me</span>
              </h2>
              <div className="w-full sm:w-[70%] md:w-[75%] xl:w-[80%] h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px] order-2 sm:order-1"></div>
            </div>

            <p
              ref={para}
              className="mt-[15px] text-[#8A8FB9] md:text-[18px] lg:text-[20px] dark:text-white"
            >
              If you need any kind of website so just <br />
              fill the form and send the mail for contacting with me.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div
              ref={inputs}
              className="my-[30px] order-2 w-full sm:order-1 sm:w-[48%] xl:w-[49%]"
            >
              <div className="md:flex gap-[10px] lg:justify-between">
                <ServiceInput
                  title="Name"
                  For="name"
                  id="name"
                  place="Enter your name.."
                  w="lg:w-[48%]"
                  value={clientName}
                  handleInput={handleName}
                />
                <ServiceInput
                  title="Email"
                  For="email"
                  id="email"
                  place="Enter your email.."
                  w="lg:w-[48%]"
                  value={clientEmail}
                  handleInput={handleEmail}
                />
              </div>

              <ServiceInput
                title="Subject"
                For="subject"
                id="subject"
                place="Enter your subject.."
                value={clientSubject}
                handleInput={handleSubject}
              />

              <div className="mb-[30px] input">
                <label
                  htmlFor="message"
                  className="block text-[20px] font-semibold"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  className="border border-[tomato] dark:border-[#0ef] w-full px-[10px] py-[5px] outline-none rounded-[4px] placeholder:dark:text-[#0ef] bg-transparent dark:text-white"
                  placeholder="Enter your message"
                  onChange={handleMessage}
                  value={clientMessage}
                ></textarea>
              </div>
              {loader === true ? (
                <div className="">
                  <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                </div>
              ) : (
                <div className="" ref={button}>
                  <button
                    className="px-[20px] py-[7px] rounded-[20px] text-white dark:text-[#151875] bg-[tomato] dark:bg-[#0ef] mt-[20px] hover:scale-[1.05] duration-300"
                    onClick={handleSendMessage}
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>

            <div
              className="order-1 sm:order-2 mt-[30px] sm:w-[48%] xl:w-[49%]"
              ref={map}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236153.21826365963!2d91.65422151951107!3d22.357629611510667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1730451617510!5m2!1sen!2sbd"
                className="border-none w-full h-[200px] sm:h-[300px] md:h-[350px] xl:h-[400px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
