import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Checkout = () => {
  const { _id, img, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const phoneNumber = form.phoneNumber.value;
    const message = form.message.value;
    const order = {
      img,
      serviceID: _id,
      serviceName: title,
      customer: name,
      email,
      phoneNumber,
      message,
      amount: price,
    };
    // if (phoneNumber.length < 11) {
    //   alert("Please type valid Phone number");
    // }
    fetch("https://gear-station-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("order added");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="border-opacity-50 py-20">
      <div className="grid grid-cols-1 card bg-base-300 rounded-box place-items-center">
        <div
          className="hero"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content">
            <div className="max-w-7xl text-center">
              <h1 className="mb-5 text-4xl lg:text-6xl font-semibold">
                {title}
              </h1>
              <h1 className="mb-5 text-2xl lg:text-4xl font-semibold">
                Price : ${price}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 card bg-base-300 rounded-box place-items py-20">
        <form onSubmit={handlePlaceOrder} className=" mx-5">
          <div className="grid grid-cols-1 max-w-5xl mx-auto lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input w-full input-bordered input-success text-gray-600 px-5"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input w-full input-bordered input-success text-gray-600 px-5"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              className="input w-full input-bordered input-success text-gray-600 px-5"
              required
            />
            <input
              type="text"
              placeholder="Your E-mail"
              name="email"
              className="input w-full input-bordered input-success text-gray-600 px-5"
              defaultValue={user?.email}
              readOnly
              required
            />
          </div>
          <div className=" max-w-5xl mx-auto my-8">
            <textarea
              name="message"
              className="textarea textarea-success h-96 w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="max-w-5xl mx-auto my-8">
            <input
              type="submit"
              className="btn btn-block btn-success"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
