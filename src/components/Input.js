export default function Input(props) {
  const properties = Object.entries(props)
    .filter(([, propValue]) => Boolean(propValue))
    .reduce(
      (initialValue, [key, value]) => (initialValue += `${key}=${value} `),
      ""
    );

  return `<input ${properties} />`;
}
