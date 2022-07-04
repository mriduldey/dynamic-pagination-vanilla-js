export default function propsToString(props) {
  return Object.entries(props)
    .filter(([, propValue]) => Boolean(propValue))
    .reduce(
      (initialValue, [key, value]) => (initialValue += `${key}=${value} `),
      ""
    );
}
