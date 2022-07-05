import "./styles.css";
import Input from "./components/Input";
import Table from "./components/Table";
import getData from "./utils/dataFetch";
import Pagination from "./components/Pagination";
import Store from "./utils/store";

function render(data) {
  document.querySelector("#app").innerHTML = Input({ id: "hihihi" })
    .concat(Table({ id: "table" }, data.slice(0, 10)))
    .concat(Pagination({}, data.length));
}

render([]);

getData().then((data) => {
  const store = new Store(render);
  store.array = data;

  data.splice(3, 23);
  store.array = data;
});
