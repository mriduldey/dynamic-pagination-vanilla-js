import propsToString from "../utils/propsToString";

export default function Table(props, data) {
  const properties = propsToString(props);

  // dynamically get table headers
  const getHeaders = () =>
    Object.keys(data && data.length && data[0])
      .reduce(
        (previousVal, key) => (previousVal += `<th>${key.toUpperCase()}</th>`),
        ""
      )
      .concat("<th>ACTIONS</th>");

  // dynamically get table rows
  const getRows = () =>
    data.reduce(
      // map table rows
      (previousData, rowData) =>
        (previousData += `
      <tr> 
        <td>checkbox</td> 
        ${Object.entries(rowData).reduce(
          // map table data
          (previousVal, [key, value]) =>
            (previousVal += `<td class=${key}>${value}</td>`),
          ""
        )}
        <td>
          <button>Edit</button>
          <button>Del</button>
        </td>
      </tr>`),
      ""
    );

  return `<table ${properties}>
    <thead>
      <th>x</th>
      ${getHeaders()}
    </thead>
    <tbody>
        ${getRows()}
    <tbody>
  </table>`;
}
