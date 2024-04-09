import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Carousel } from "react-bootstrap";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function LandingPage() {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };
  const Courses = [
    {
      id: "alsjdlasjdflkjs",
      title: "Basics of OpenMPI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus suntrem velit architecto aut commodi, pariatur quod molestias. Dicta aliquaveniam libero, unde commodi nostrum!",
      thumbnail:
        "https://repository-images.githubusercontent.com/181981725/1af35680-6a25-11e9-985e-a483461309fe",
      githuburl:
        "https://github.com/Anonymousgeek111/Chapter-1-Basics-of-OpenMPI/tree/main",
    },
    {
      id: "lajsdfalasdjfl",
      title: "Intermediate OpenMPI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus suntrem velit architecto aut commodi, pariatur quod molestias. Dicta aliquaveniam libero, unde commodi nostrum!",
      thumbnail:
        "https://repository-images.githubusercontent.com/181981725/1af35680-6a25-11e9-985e-a483461309fe",
      githuburl:
        "https://github.com/Anonymousgeek111/Chapter-2-Intermediate-OpenMPI",
    },
  ];

  return (
    <div className=" relative mb-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-black py-20"
      >
        <div className="container mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Welcome to{" "}
            <span className=" text-blue-500"> MultiCore CourseWare</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-center max-w-lg"
          >
            <span className=" text-xl font-bold">"</span>Learn from the best,
            expand your knowledge, and advance your career with our diverse
            range of courses. <span className=" text-xl font-bold">"</span>
          </motion.p>
        </div>
      </motion.div>

      <Carousel className=" mt-3">
        <Carousel.Item>
          <img
            className="d-block w-100 h-[500px] object-center"
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s="
            alt="First slide"
          />
          <Carousel.Caption className=" bg-gray-500  bg-opacity-75">
            <h3>Parallel Thinking</h3>
            <p>
              Explore the basics of parallel thinking, learning how to apply
              principles and techniques in real-world scenarios.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[500px] object-center content-center"
            src="https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=612x612&w=0&k=20&c=EyQl13diegNV5DVLnb0krcAcRDhL7NiSA7IEVImZs6Q="
            alt="Second slide"
          />
          <Carousel.Caption className=" bg-gray-500  bg-opacity-75">
            <h3>Advanced Parallel Thinking Strategies</h3>
            <p>
              Discover advanced techniques for optimizing parallel processing,
              tackling complex challenges efficiently.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[500px] "
            src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_640.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className=" bg-gray-500  bg-opacity-75">
            <h3>Parallel Thinking in Action</h3>
            <p>
              Gain hands-on experience with real-world projects and simulations,
              mastering parallel thinking skills for success.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Course Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto mt-10"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              Hover={{
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              className="py-4 pb-1 cursor-pointer bg-gray-200 px-4 rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <div onClick={() => {
                navigate("/home");
              }}
              while className="relative">
                <img
                  src={course.thumbnail}
                  alt="Course"
                  className="w-full object-center max-h-[300px] object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600">
                  {expandedId === course.id
                    ? course.description
                    : course.description.split(" ").slice(0, 6).join(" ")}
                  {course.description.split(" ").length > 20 &&
                    (expandedId === course.id ? (
                      <button
                        onClick={() => toggleExpand(null)}
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        Read less
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleExpand(course.id)}
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        Read more
                      </button>
                    ))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default LandingPage;
