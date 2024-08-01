import React, { createContext, useEffect, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [item, setItem] = useState(() => {
    const savedItem = localStorage.getItem("courseItem");
    return savedItem ? savedItem : null;
  });
  useEffect(() => {
    localStorage.setItem("courseItem", item);
  }, [item]);

  return (
    <CourseContext.Provider value={{ item, setItem }}>
      {children}
    </CourseContext.Provider>
  );
};
