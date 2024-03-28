import { useState } from "react";
import { Navigate } from "react-router-dom";
const About = () => {
  const [user, setUser] = useState("ahmed");


      if(user == null) {
        return <Navigate to='/' replace={true}/>
      }
   
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laborum
        vel esse nulla consequatur molestias, numquam rerum omnis enim id. Odio
        architecto libero accusamus cupiditate nesciunt. Quae earum dolore
        laboriosam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laborum
        vel esse nulla consequatur molestias, numquam rerum omnis enim id. Odio
        architecto libero accusamus cupiditate nesciunt. Quae earum dolore
        laboriosam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laborum
        vel esse nulla consequatur molestias, numquam rerum omnis enim id. Odio
        architecto libero accusamus cupiditate nesciunt. Quae earum dolore
        laboriosam.
      </p>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default About;
