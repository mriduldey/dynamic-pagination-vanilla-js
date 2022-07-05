import "./styles.css";
import Input from "./components/Input";
import Table from "./components/Table";
import getData from "./utils/dataFetch";
import Pagination from "./components/Pagination";
import Store from "./utils/store";

function render(data) {
  document.querySelector("#app").innerHTML = Input({
    id: "search-input",
    placeholder: "Search"
  })
    .concat(Table({ id: "table" }, data.slice(0, 10)))
    .concat(Pagination({}, data.length));
}

render([]);

getData().then((data) => {
  const store = new Store(render);
  store.array = data;

  const input = document.querySelector("#search-input");
  input.addEventListener("input", function (e) {
    const text = e.target.value.toLocaleLowerCase().trim();
    console.log("text", text);
    const filteredData = data.filter((row) =>
      Object.values(row).toLocaleString().toLocaleLowerCase().includes(text)
    );
    console.log("filtered data", filteredData);
    store.array = filteredData;
  });
});
