import React from "react";
import { motion } from "framer-motion";
import Course from "../components/Course";

const HomeScreen = () => {
  const Courses = [
    {
      id: "course101",
      title: "Basics of OpenMPI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus suntrem velit architecto aut commodi, pariatur quod molestias. Dicta aliquaveniam libero, unde commodi nostrum!",
      thumbnail:
        "https://repository-images.githubusercontent.com/181981725/1af35680-6a25-11e9-985e-a483461309fe",
      notebookurl:
        "https://github.com/Anonymousgeek111/Chapter-1-Basics-of-OpenMPI/tree/main",
      price: 499,
    },
    {
      id: "course102",
      title: "Intermediate OpenMPI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus suntrem velit architecto aut commodi, pariatur quod molestias. Dicta aliquaveniam libero, unde commodi nostrum!",
      thumbnail:
        "https://repository-images.githubusercontent.com/181981725/1af35680-6a25-11e9-985e-a483461309fe",
      notebookurl:
        "https://github.com/Anonymousgeek111/Chapter-2-Intermediate-OpenMPI",
      price: 799,
    },
  ];

  return (
    <div className="flex flex-wrap py-6 gap-x-5 gap-y-5 mt-6">
      {Courses.map((course, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className=" "
        >
          <Course course={course} />
        </motion.div>
      ))}
    </div>
  );
};

export default HomeScreen;
