function Form(props) {
  const form = {
    borderRadius: "10px 10px 10px 10px",
    padding: "0",
    width: props.width,
    height: props.height,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <form style={form} onSubmit={props.submit}>
      {props.children}
    </form>
  );
}
export default Form;
