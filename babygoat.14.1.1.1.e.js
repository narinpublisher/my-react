function Baby () {
	return (
		<h4>
			<i>
				Little baby goats play while grazing on the grass<br />
				With faces bright like the shining sun
			</i>
		</h4>
	)
}
function Goat () {
	return (
		<h4>
			Under the blue sky, beneath the drifting dreams<br />
			On the  <i className='skyblue'>green hillside</i>
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
song.render ( <BabyGoat choice= { false }  /> );