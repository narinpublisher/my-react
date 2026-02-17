function Baby () {
	return (
		<h4>
			<i>
				Little baby goats are playing while grazing on the grass<br />
				With faces shining bright like the sun
			</i>
		</h4>
	)
}
function Goat () {
	return (
		<h4>
			Under the blue sky, where dreams gently fall<br />
			On the <i className="skyblue">green hills</i>
		</h4>
	)
}
function BabyGoat ( props ) {
	const sky= props.choice;
	if ( sky ) {
		return <Baby />;
	}
	return <Goat />;
}
const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <BabyGoat choice= { true } /> );