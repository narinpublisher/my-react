// No-import Babel version
const BarleyTree = () => {
  const [show, setShow] = React.useState(true);

  const delText = () => {
    setShow(false);
  };

  return (
    <main>
      Carving words of hope into the branches<br />
      {show && <Child />}
      <br />
      <button type="button" onClick={delText}>
        Unmount Component
      </button>
    </main>
  );
};

const Child = () => {
  React.useEffect(() => {
    return () => {
      alert("The BarleyTree child component is being unmounted.");
    };
  }, []);

  return <p>Beneath the tree that visits in joy and sorrow alike</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root") );
root.render(<BarleyTree />);