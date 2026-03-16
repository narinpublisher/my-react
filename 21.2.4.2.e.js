function MyHair() {
  const [ hair , setHair ] = React.useState("Yellow Gold");
  const [ borderColor , setBorderColor ] = React.useState("gold");

  const changeColor = ( newHairColor , newBorderColor ) => {
    setHair(newHairColor);
    setBorderColor(newBorderColor); 
  };

  return (
    <section style={{
        	border: `2px dashed ${borderColor}`,
        	padding: "10pt", textAlign: "center",
      }}
    >
      <h1>My hair color is { hair }.</h1>
      <button onClick={() => changeColor( "Red Wine" , "red" )}  >Change Color</button> 
    </section>
  );
}

const myApp = ReactDOM.createRoot(document.getElementById( "root" ));
myApp.render( <MyHair /> );