import React from "react";
import { Button } from "../../Components/Buttons/Button";

const Contacts = () => {
  return (
    <div className="container md:px-[80px]">
      <h1 className="text-[36px] md:text-[48px]">Contact</h1>
      <div className="flex flex-col gap-2 my-8">
        <p className="text-gray-500 text-base">住所：東京都渋谷区大山町1-19</p>
        <p className="text-gray-500 text-base">開館時間：10:00~19:00</p>
        <p className="text-gray-500 text-base">定休日：なし</p>
        <p className="text-gray-500 text-base">クレジットカードの有無と種類：有り</p>
        <p className="text-gray-500 text-base">
          言語対応レベル：日本語、トルコ語、英語、
        </p>
        <p className="text-gray-500 text-base">最寄り駅：代々木上原駅</p>
        <p className="text-gray-500 text-base">アクセス：代々木上原駅から徒歩5分</p>
        <p className="text-gray-500 text-base">電話番号：03-5790-0760</p>
        <p className="text-gray-500 text-base">
          東京ジャーミー　ハラールマーケットは新文化センターの一階です。
        </p>
      </div>
      <iframe
        className="w-[350px] h-[450px] md:w-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3590210836323!2d139.6739785758257!3d35.66816087259139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f34759be4315%3A0xc726759ce2573887!2z0KLQvtC60LjQudGB0LrQsNGPINGB0L7QsdC-0YDQvdCw0Y8g0LzQtdGH0LXRgtGM!5e0!3m2!1sru!2s!4v1712320378065!5m2!1sru!2s"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <form className="my-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Name"
            className="border-gray-600 border-2 p-3 outline-none w-full"
          />
          <input
            type="email"
            placeholder="Email*"
            className="border-gray-600 border-2 p-3 outline-none w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone number"
          className="border-gray-600 border-2 p-3 outline-none"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          className="border-gray-600 border-2 p-3 outline-none"
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
