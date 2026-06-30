// Small inline loading spinner used inside buttons while a request is in flight.
// `light` swaps the arc to white for use on dark/teal button backgrounds.
function Spinner({ light = false, size = "md" }) {
  const classes = ["spinner"];
  if (light) classes.push("light");
  if (size === "lg") classes.push("lg");

  return <span className={classes.join(" ")} aria-hidden="true" />;
}

export default Spinner;
