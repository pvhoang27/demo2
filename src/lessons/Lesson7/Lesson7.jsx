const Lesson7 = (props) => {
  (function () {
    console.log("Anonymous function called");
  });

  a = function () {
    console.log("Anonymous function called a");
  };

 
  return (
    <div style={{ padding: "50px" }}>
      <h3>Lesson 7 Anonymous Function:</h3>
    </div>
  );
};

export default Lesson7;
