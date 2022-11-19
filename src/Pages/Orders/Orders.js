import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { logOut, user, loading, setLoading } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://gear-station-server.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("gear-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure?");
    if (procced) {
      fetch(`https://gear-station-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleStatsUpdate = (id) => {
    fetch(`https://gear-station-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approve";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  if (user) {
    <progress className="progress w-56"></progress>;
  }
  return (
    <div className="">
      <h1 className="text-2xl text-center p-5 font-semibold text-white bg-teal-500">
        You Have {orders.length} orders
      </h1>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-white">
                <label></label>
              </th>
              <th className="bg-white">Service</th>
              <th className="bg-white">Name</th>
              <th className="bg-white">Price</th>
              <th className="bg-white">Message</th>
            </tr>
          </thead>
          <tbody>
            {user ? (
              <>
                {orders.map((order) => (
                  <OrderRow
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                    handleStatsUpdate={handleStatsUpdate}
                  ></OrderRow>
                ))}
              </>
            ) : (
              <progress className="progress w-screen"></progress>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
