import React from "react";
import Header from "./components/header";
import TodoList from "./components/todo-list";
// import ContactForm from "./components/contact-form";

export default function App() {
  
	return (
    <div className="App">
      <Header />
      {/* <ContactForm /> */}
      <TodoList />
		</div>
	);
}

//export default App;
