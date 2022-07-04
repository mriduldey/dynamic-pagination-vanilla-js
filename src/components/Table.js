import propsToString from "../utils/propsToString";

export default function Table(props, data) {
  console.log(data);
  const properties = propsToString(props);

  return `<table ${properties}>
    <thead>
      <th>x</th>
      ${Object.keys(data[0]).map((key) => `<th>${key}</th>`)}
    </thead>
    <tbody>
        ${data.slice(0, 2).map(
          (rowData) => `
          <tr>
            <td>checkbox</td>
            ${Object.entries(rowData).map(
              ([key, value]) => `<td class=${key}>${value}</td>`
            )}
          </tr>
        `
        )}
    <tbody>
  </table>`;
}
