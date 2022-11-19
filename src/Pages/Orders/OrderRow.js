import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatsUpdate }) => {
  const {
    _id,
    serviceID,
    serviceName,
    amount,
    customer,
    email,
    message,
    status,
  } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`https://gear-station-server.vercel.app/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [serviceID]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm  btn-error btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-16 rounded ring ring-success ring-offset-base-100 ring-offset-2">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>
        <div className="font-bold">${amount}</div>
      </td>
      <th>
        <button
          onClick={() => handleStatsUpdate(_id)}
          className="btn btn-ghost btn-xs capitalize"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
