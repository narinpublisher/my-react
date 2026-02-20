const { useState } = React;

function Sunset () {
	const [ name , setName ]= useState ('');
	const submitGo= ( event ) => {
		event.preventDefault ();
		alert (`The title you entered is ${name}`);
	}
	return (
		<section>
			<strong>
				On the field where the wind once lingered,<br />
        				Evening smoke softly rises.
			</strong>
			<form onSubmit= { submitGo }>
				<br />
				<label>
					What is the title of this song? &nbsp;
					<input type='text' value= { name }
					  onChange= { ( e ) => setName( e.target.value )}
					/>
				</label>&nbsp;
				<button>Submit</button>
			</form>
		</section>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Sunset /> );