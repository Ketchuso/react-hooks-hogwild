import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Title from "./Title"

function App() {
	const hog = hogs.map((hog) => {
		return <Title name={hog.name} image={hog.image} key={hog.name}/>
	})

	return (
		<div className="App">
			<Nav />
			{hog}
		</div>
	);
}

export default App;
