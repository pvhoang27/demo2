import Login from "./Login";
import "./Project.scss";
import "nprogress/nprogress.css";
// import Lesson26 from "./chapter4/lesson26/Lesson26";
import Lesson20 from "./chapter3/Lesson20";
const Project = (props) => {
  return (
    <div className="project">
      <Login />
      {/* <Lesson26 /> */}
      <Lesson20 />
    </div>
  );
};

export default Project;
