import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Nav />
			<Home />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
