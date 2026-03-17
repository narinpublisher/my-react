 function Sunset() {
      const [ verses , setVerses ] = React.useState([
         "In the field where the wind once rested",
         "Soft evening smoke rises gently",
         "On the autumn hill dressed in colors",
         "The sunset glows deep red in the sky",
      ]);

      return (
          <section
          	style = {{
       		backgroundColor : "orange" ,
        		padding : "30pt 50px" ,
        		borderRadius : "30pt" ,
        		width : "300px" ,
        		margin : "auto"
          	}}
          >
          <h1>Children's Song – Sunset (Verse 3)</h1>
          <ul>
            	{ verses.map( ( verse, index ) => (
              		<li key= { index }>{ verse }</li>
            	) ) }
          </ul>
        </section>
      );
    }

    // Render into the root element
    ReactDOM.createRoot( document.getElementById("root") ).render( <Sunset /> );