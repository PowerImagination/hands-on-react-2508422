function App() {
  return (
    <div className="container">
    <article>
      <img src="images/group.svg"/>
       <hgroup>
      <h1>Meet the StarGazers</h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <button className="outline" onClick={()=> alert('Hello World')}>Click Me</button>
    </hgroup>
    </article>
     </div>
  )
}
export default App
