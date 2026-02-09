import Login from "./Login";
import "./Project.scss";
import "nprogress/nprogress.css";
// import Lesson26 from "./chapter4/lesson26/Lesson26";
// import Lesson27 from "./chapter4/lesson27/Lesson27";
// import Lesson29 from "./chapter4/lesson29/Lesson29";
// import Lesson32 from "./chapter4/lesson32/Lesson32";
import Lesson33 from "./chapter4/lesson33/Lesson33";
const Project = (props) => {
  return (
    <div className="project">
      <Login />
      <Lesson33 />
    </div>
  );
};

export default Project;
