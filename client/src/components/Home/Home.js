import React from "react";

const Home = () => {
  const stuff = "Hello World";
  const morestuff = "hello world"; // Noncompliant; morestuff is a duplicate of stuff and should be removed to avoid confusion and reduce code duplication
  const myfunc = (param, param2, param3 = "", something = "stuff") => {
    return param + param2 + param3 + something;
  };

  return (
    <div>
      <h1>Good luck on this test!</h1>
      <p>Ask any question, use any resource you want today.</p>
      <p>Good luck!</p>
      {myfunc(stuff, morestuff)}
    </div>
  );
};

export default Home;
