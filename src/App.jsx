import React, {Component} from "react";
import Hello from "./components/Hello"

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Hello name = "Star Aliens"/>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hello World')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
