import React from "react";
import './App.css';
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://d341b5ad-064a-4078-8dfa-bdb99ad57b72.mock.pstmn.io/trainapi1")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Train data </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					Train_Number: { item.trainNumber },
					Train_Name: { item.trainName }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;