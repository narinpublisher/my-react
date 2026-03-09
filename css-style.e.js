const ExternalCss = () => {
  return (
    <section>
      <h1>CSS Styles Applied from an External File</h1>
      <p>
        CSS styles can be written in a separate file and saved with the
        .css extension. The stylesheet can then be loaded into the
        application so that the design styles are applied.
      </p>
    </section>
  );
};
const addStyle = ReactDOM.createRoot(document.getElementById("root"));
addStyle.render(<ExternalCss />);