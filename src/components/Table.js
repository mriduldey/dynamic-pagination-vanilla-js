import propsToString from "../utils/propsToString";

export default function Table(props) {
  const properties = propsToString(props);

  return `<table ${properties}>
    <thead>
      <th>x</th>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
    </thead>
    <tbody>
      <template id="row">
        <tr>
          <td class="record"></td>
          <td class="name"></td>
          <td class="email"></td>
          <td class="actions"></td>
        </tr>
      </template>
    <tbody>
  </table>`;
}
