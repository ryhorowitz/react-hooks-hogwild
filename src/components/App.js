import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";
import Filter from "./Filter";
import hogs from "../porkers_data";

function App() {
	const [pigs, setPigs] = useState(hogs)
	return (
		<div className="App">
			<Nav />
			<HogsList hogs={pigs}/>
		</div>
	);
}

export default App;
