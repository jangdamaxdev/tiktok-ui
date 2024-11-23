
function App() {
  
    const handleChange = () => console.log("onChange triggered");
    const handleInput = () => console.log("onInput triggered");
  
    return (
      <input
        type="text"
        onChange={handleChange}
        onInput={handleInput}
        placeholder="Type here"
      />
    );
  }
  
function Home() {
    return ( <App/> );
}

export default Home;