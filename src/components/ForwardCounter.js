import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter("up");

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
