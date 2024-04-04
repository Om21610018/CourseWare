import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Course({ course }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: course.title,
    price: course.price,
    productBy: "WCE",
  });
  const { userInfo } = useSelector((state) => state.auth);
  const makePayment = async (token) => {
    const data = {
      token,
      product,
      course,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(`http://localhost:5001/payment`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Payment successful, redirect to success page
        navigate(`/success`);
      } else {
        // Payment failed, handle error
        console.error("Payment failed:", responseData.error);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div
      onClick={() => {
        navigate(
          `/${course.id}?githuburl=${course.githuburl}?coursename=${course.title}`
        );
      }}
      className=" cursor-pointer flex gap-y-2  py-3 rounded-md px-2 flex-col items-center w-[300px] min-h-[200px] bg-gray-200 hover:scale-[1.02] transition-all duration-200"
    >
      <img
        className="w-[250px] h-[250px] rounded-md"
        alt=""
        src={course.thumbnail}
      />
      <div className=" flex flex-col justify-center items-center">
        <p className=" font-bold text-2xl">{course.title}</p>
        <p className=" px-4 text-justify">{course.description}</p>
      </div>
    </div>
  );
}

export default Course;
