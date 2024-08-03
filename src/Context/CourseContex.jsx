import React, { createContext, useEffect, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [item, setItem] = useState(() => {
    const savedItem = localStorage.getItem("courseItem");
    return savedItem ? savedItem : null;
  });
  const [courseModule, setCourseModule] = useState(() => {
    const savedModule = localStorage.getItem("courseModule");
    return savedModule ? JSON.parse(savedModule) : null;
  });
  useEffect(() => {
    localStorage.setItem("courseItem", item);
  }, [item]);

  useEffect(() => {
    localStorage.setItem("courseModule", JSON.stringify(courseModule));
  }, [courseModule]);

  return (
    <CourseContext.Provider
      value={{ item, setItem, setCourseModule, courseModule }}
    >
      {children}
    </CourseContext.Provider>
  );
};
