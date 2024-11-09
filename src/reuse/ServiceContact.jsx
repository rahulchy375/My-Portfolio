import React, { useRef, useState } from "react";
import ServiceInput from "./ServiceInput";
import { getDatabase, push, ref, set } from "firebase/database";
import { DNA } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ServiceContact = ({ img, title, web }) => {
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
    const newMessageRef = push(ref(db, web)); // Generates a unique ID

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

  const Ctitle = useRef();
  const input = useRef();
  const button = useRef();
  const CImg = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        start: "top 60%",
      },
    });
    tl.from(
      CImg.current,
      {
        x: -200,
        opacity: 0,
        duration: 1,
      }
    );
    tl.from(Ctitle.current, {
      x: 70,
      opacity: 0,
      duration: 1,
    },"-=0.7");
    tl.from(
      input.current.querySelectorAll(".input"),
      {
        x: 70,
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
  });
  return (
    <>
      <div className="my-[30px] md:mt-[50px] md:flex gap-[20px] lg:gap-[40px] items-center contact">
        <div className="flex justify-center md:w-[48%]">
          <div className="my-[30px] w-[70%] md:w-full xl:w-[70%]" ref={CImg}>{img}</div>
        </div>
        <div className="dark:text-white md:w-[48%]">
          <h2 ref={Ctitle} className="text-[20px] sm:text-[25px] lg:text-[27px] lg:text-left md:text-[22px] font-bold text-center">
            {title}
          </h2>
          <div className="w-full h-[3px] bg-[tomato] dark:bg-[#0ef] rounded-[10px]"></div>
          <div className="mt-[30px] sm:text-center md:text-left" ref={input}>
            <ServiceInput
              title="Name"
              For="name"
              id="name"
              place="Enter your name.."
              value={clientName}
              handleInput={handleName}
            />
            <ServiceInput
              title="Email"
              For="email"
              id="email"
              place="Enter your email.."
              value={clientEmail}
              handleInput={handleEmail}
            />
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
                className="block text-[20px] font-semibold text-left"
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
        </div>
      </div>
    </>
  );
};

export default ServiceContact;
