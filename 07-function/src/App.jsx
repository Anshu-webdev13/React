import React from 'react'

const App = () => {
  function btnClicked() {
    console.log("Btn is clicked");
  }
  return (
    
    <div>
      <button  onClick={btnClicked}>Click me</button>
    </div>
  )
}

export default App
