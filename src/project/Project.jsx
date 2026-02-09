import Login from "./Login";
import "./Project.scss";
import "nprogress/nprogress.css";
// import Lesson26 from "./chapter4/lesson26/Lesson26";
import Lesson19 from "./chapter3/Lesson19";
const Project = (props) => {
  return (
    <div className="project">
      <Login />
      {/* <Lesson26 /> */}
      <Lesson19 />
    </div>
  );
};

export default Project;
