const MyCoat = () => {
  	const [ color , setColor ] = useState ('black') ; 
  	const [ activeIndex , setActiveIndex ] = useState(0); 
  	const change = ( index , newColor ) => {
    		setColor( newColor );  
    		setActiveIndex( index );   };

  return (
    	<section>
      		<h1>
        			My coat color is{" "}
        			<strong style={{ color: color }}>{ color }</strong> .
      		</h1>
      <button type="button"
        	onClick={ () => change( 0 , "black" )} 
        	style={ {
          		background: activeIndex === 0 ?  "black" : "none",
          		color: activeIndex === 0 ? "white" : "black",
        } }
      >
        black
      </button>
      &nbsp;
      <button type="button"
        	onClick={() => change( 1 , "brown" )} 
        	style={{
          		background : activeIndex === 1 ? "brown" : "none",
          		color : activeIndex === 1 ? "white" : "black",
        	}}	
      >
        brown
      </button>&nbsp;
      <button type="button"
        	onClick={() => change( 2 , "blue" )}
        	style={{
         		 background: activeIndex === 2 ? "blue" : "none",
         		 color: activeIndex === 2 ? "white" : "black",
       	 }}
      >
        blue
      </button>
      &nbsp;
      <button type="button"
       	 onClick={() => change( 3 , "green" )}
       	 style={{
         		 background : activeIndex === 3  ?  "green" : "none",
          		color : activeIndex === 3 ?  "white"  :  "black",
       	 }}
      >
        green
      </button>
    </section>
  );
};

const myApp = ReactDOM.createRoot(document.getElementById("root"));
myApp.render( <MyCoat /> );