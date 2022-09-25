import React from "react";
import Button from "./components/button";
import Header from "./components/header";

export default function App() {
  const send = () => {
    alert("Gönderildi.")
  }
  
	return (
    <div className="App">
      <Header />
      <div>
        <div>
          <Button onClick={send}>
            Gönder
          </Button>
        </div>
        <div>
          <Button>
            Vazgeç
          </Button>
        </div>
      </div>
		</div>
	);
}

//export default App;
