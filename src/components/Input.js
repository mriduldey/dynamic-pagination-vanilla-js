import propsToString from "../utils/propsToString";

export default function Input(props) {
  const properties = propsToString(props);

  return `<input ${properties} />`;
}
