import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";
import Filter from "./Filter";
import Sort from "./Sort"
import hogs from "../porkers_data";

function App() {
	const [pigs, setPigs] = useState(hogs)
	const [greased, setGreased] = useState(false)
	const [sorted, setSorted] = useState(false)

	function handleGreasedButtonClick() {
    setGreased(!greased)
  }

	function handleSortButtonClick() {
		setSorted(!sorted)
	}
	const displayPigs = pigs.filter( pig => {
		return pig.greased === true
	})

	return (
		<div className="App">
			<Nav />
			<Filter greased={greased} handleClick={handleGreasedButtonClick}/>
			<Sort handleClick={handleSortButtonClick}/>
			<HogsList hogs={greased ? displayPigs : pigs} sorted={sorted}/>
		</div>
	);
}

export default App;
