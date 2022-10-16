import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      title: "Learn Javascript",
      bgColor: "#282c34",
      show: true
		};
		//console.log("constructor");
	}
	// state = {
	// 	title: "Learn Javascript",
	// };

	componentDidMount() {
		console.log("componentDidMount");
		setTimeout(() => {
      this.setState({
        title: "Learn React",
      });
    }, 2000);
  }
  
  shouldComponentUpdate() {
    return true
  }

	changeColor = () => {
    this.setState({
      bgColor: "#104fcd",
      show: false
    })
  };
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //console.log("prevState", prevState);
    return null
  }

  componentDidUpdate() {
    //console.log("this.state", this.state)
  }
  render() {
    //console.log("this.state", this.state)
		return (
			<div className="App">
				<header className="App-header" style={{ backgroundColor: this.state.bgColor}}>
					<img src={logo} className="App-logo" alt="logo" />
					<Info onClick={this.changeColor} title="Rengi Değiştir"/>
          {this.state.show && (
            <Link title={this.state.title} />
          )}
				</header>
			</div>
		);
	}
}

function Info(props) {
	return (
		<>
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<button onClick={props.onClick}>{props.title}</button>
		</>
	);
}

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
    //console.log("constructor")
  }
  static getDerivedStateFromProps(props) {
    //console.log("getDerivedStateFromProps", props);
    return {
      title: props.title
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    return null
  }

  componentDidUpdate() {
    
  }

  // componentDidMount() {
  //   this.setState({
  //     title: this.props.title
  //   })
  // }
  componentWillUnmount() {
    alert("Link componenti virtual domdan kaldırıldı");
  }
  render() {
		return (
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				{this.state.title}
			</a>
		);
	}
}

export default App;
