import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Academic from "../Pages/Academic/Academic";
import Skill from "../Pages/Skills/Skill";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/Registation/SignUp";
import PrivetRoutes from "./PrivetRoutes";
import Secret from "../Shared/Secret/Secret";
import PopularCard from "../Components/Home/PopularCard";
import PcourseDetails from "../Components/Home/PcourseDetails";

import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Deshboard/Cart/Cart";
import TeacherProfile from "../Pages/Profile/TeacherProfile";
import StudentProfile from "../Pages/Profile/StudentProfile";
import VideoContent from "../Pages/VedioTutorial/VideoContent";
import Thamnail from "../Components/VideoContent/Thamnail";
import Category from "../Components/VideoContent/Category";
import VideoPlayer from "../Components/VideoContent/VideoPlayer";
import UpdateProfile from "../Components/Profile/UpdateProfile";
import MyCourse from "../Components/Profile/MyCourse";
import UploadCourse from "../Components/Profile/UploadCourse";
import ViewModule from "../Components/CourseModule/ViewModule";
import CreateModule from "../Components/CourseModule/CreateModule";
import Teacher from "../Pages/Deshboard/Teacher/Teacher";
import Student from "../Pages/Deshboard/Students/Student";
import Courses from "../Pages/Deshboard/Courses/Courses";

import ViewCourse from "../Components/CourseModule/ViewCourse";
import VideoCall from "../Components/VideoCall/VideoCall";
import Assignment from "../Components/Assignment/Assignment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/academic",
        element: <Academic></Academic>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/popularcard",
        element: <PopularCard></PopularCard>,
      },
      {
        path: "/course/:courseId",
        element: <PcourseDetails></PcourseDetails>,
      },
      {
        path: "/videos",
        element: <VideoContent></VideoContent>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/category/:id",
        element: <Thamnail></Thamnail>,
      },
      {
        path: "/courses/:courseId",
        element: <VideoPlayer></VideoPlayer>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/teacher-profile",
        element: <TeacherProfile></TeacherProfile>,
      },
      {
        path: "/student-profile",
        element: <StudentProfile></StudentProfile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/mycourse",
        element: <MyCourse></MyCourse>,
      },
      {
        path: "/viewModule/:id",
        element: <ViewModule></ViewModule>,
      },
      {
        path: "/createModule",
        element: <CreateModule></CreateModule>,
      },
      {
        path: "/uploadcourse",
        element: <UploadCourse></UploadCourse>,
      },
      {
        path: "/viewCourse",
        element: <ViewCourse></ViewCourse>,
      },
      {
        path: "/videocall/:id",
        element: <VideoCall></VideoCall>,
      },
      {
        path: "/assignment",
        element: <Assignment></Assignment>,
      },
      {
        path: "/secret",
        element: (
          <PrivetRoutes>
            <Secret></Secret>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/deshboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "statistics",
        element: <Cart></Cart>,
      },
      {
        path: "teacher",
        element: <Teacher></Teacher>,
      },
      {
        path: "students",
        element: <Student></Student>,
      },
      {
        path: "course",
        element: <Courses></Courses>,
      },
    ],
  },
]);
