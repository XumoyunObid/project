import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../Datas/data";
import MainCard from "../../Components/Cards/MainCard";
import useAutoScrollTop from "../../Hooks/UseAutoScrollTop";
import { Button } from "../../Components/Buttons/Button";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const SingleProduct = () => {
  useAutoScrollTop();
  const form = useRef();

  const { id } = useParams();
  const product = data.find((item) => item.id == id);

  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_8u34gpb", "template_ashcfbp", form.current, {
        productName: product.title,
        productPrice: product.price,
        publicKey: "4t0mVFkL5snSt8fWo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          form.current.reset();
          setShow(!show);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="container flex flex-col items-start md:flex-row gap-3 py-8">
        <div className="md:w-1/2 lg:w-[65%] flex items-center justify-center">
          <img
            src={product.img}
            alt="product image"
            className="lg:w-[533px] lg:h-[533px] border"
          />
        </div>
        <div className="md:w-1/2 lg:w-[35%] flex flex-col gap-3">
          <h3 className="text-[12px] text-gray-500">TOKYO CAMII GIFT</h3>
          <h1 className="text-[28px] md:text-[42px]">{product.title}</h1>
          <div className="flex gap-3 items-center">
            {product.discount && (
              <span className="text-gray-500 line-through text-[12px]">
                ¥{product.discount} JPY
              </span>
            )}{" "}
            <p className="text-gray-600 text-md">¥{product.price} JPY</p>
          </div>
          <p className="text-[12px] text-gray-500">Tax included</p>
          <Button variant="secondary" onClick={handleShow}>
            Click to buy
          </Button>
          {show ? (
            <form
              className="flex flex-col gap-3 p-2 border"
              ref={form}
              onSubmit={sendEmail}
            >
              <h2 className="text-center underline">Send an email!</h2>
              <input
                placeholder="Email"
                className="p-2 border-2 border-black"
                type="email"
                name="email"
              />
              <input
                placeholder="Name"
                className="p-2 border-2 border-black"
                type="text"
                name="name"
              />
              <input
                type="text"
                className="hidden"
                name="productName"
                value={product.title}
              />
              <input
                type="text"
                className="hidden"
                name="productPrice"
                value={product.price}
              />
              <textarea
                rows={4}
                cols={50}
                placeholder="Message"
                className="p-2 h-24 w-full border-2 border-black"
                name="message"
              />
              <Button variant="primary">Buy</Button>
            </form>
          ) : (
            ""
          )}
          <p className="text-md text-gray-500">{product.description}</p>
        </div>
      </div>
      <div className="container">
        <h1 className="text-[28px]">You may also like</h1>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {data.slice(0, 4)?.map((item) => (
            <li
              key={item.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={`${item.id}00`}
            >
              <Link to={`/product/${item.id}`}>
                <MainCard {...item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProduct;
