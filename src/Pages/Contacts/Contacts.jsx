import React, { useRef } from "react";
import { Button } from "../../Components/Buttons/Button";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gxvcbml", "template_nx9sdjv", form.current, {
        publicKey: "OFkRB6r9Jca0fgF-c",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container md:px-[80px]">
      <h1 className="text-[36px] md:text-[48px]">Contact</h1>
      <div className="flex flex-col gap-2 my-8">
        <p className="text-gray-500 text-base">住所：東京都渋谷区大山町1-19</p>
        <p className="text-gray-500 text-base">開館時間：10:00~19:00</p>
        <p className="text-gray-500 text-base">定休日：なし</p>
        <p className="text-gray-500 text-base">
          クレジットカードの有無と種類：有り
        </p>
        <p className="text-gray-500 text-base">
          言語対応レベル：日本語、トルコ語、英語、
        </p>
        <p className="text-gray-500 text-base">最寄り駅：代々木上原駅</p>
        <p className="text-gray-500 text-base">
          アクセス：代々木上原駅から徒歩5分
        </p>
        <p className="text-gray-500 text-base">電話番号：03-5790-0760</p>
        <p className="text-gray-500 text-base">
          東京ジャーミー　ハラールマーケットは新文化センターの一階です。
        </p>
      </div>
      <iframe
        className="w-[350px] h-[450px] md:w-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.1285414945887!2d139.67527676498895!3d35.66803012965317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f34759be4315%3A0xc726759ce2573887!2sTokyo%20Camii%20%26%20Diyanet%20Turkish%20Culture%20Center!5e1!3m2!1sen!2s!4v1713092976638!5m2!1sen!2s"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <form
        className="my-6 flex flex-col gap-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Name"
            className="border-gray-600 border-2 p-3 outline-none w-full bg-transparent"
            name="user_name"
          />
          <input
            type="email"
            placeholder="Email*"
            className="border-gray-600 border-2 p-3 outline-none w-full bg-transparent"
            name="user_email"
          />
        </div>
        <input
          type="number"
          placeholder="Phone number"
          className="border-gray-600 border-2 p-3 outline-none bg-transparent"
          name="user_phone"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="3"
          className="border-gray-600 border-2 p-3 outline-none bg-transparent"
          placeholder="Comment"
        ></textarea>
        <Button variant="primary" className="w-[150px]">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contacts;
