    const { useState, useEffect } = React;

    const Autumn = ({ sunset }) =>  {
      const [txt, setTxt] = useState('Autumn breeze in autumn');

      // Update txt whenever the sunset value changes
      useEffect(() => {
        setTxt(sunset);
      }, [sunset]);

      const changeTxt = () => {
        setTxt('Dressed in colorful autumn clothes  ');
      };

      return (
        <p>
          In the field where the autumn breeze lingers<br />
          Evening smoke gently rising<br />
          <b className="red">{txt}</b>
          On the autumn hill<br />
          The red sunset glowing and burning<br />
          <button type="button" onClick= {changeTxt}>
            Change Text
          </button>
        </p>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Autumn sunset= "Fallen leaves scattering " />);