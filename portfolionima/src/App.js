import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
	return (
		<div>
			<Nav />
			<Home />
			<About />
			<Projects />
		</div>
	);
}

export default App;
