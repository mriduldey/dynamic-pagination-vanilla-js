import "./styles.css";
import Input from "./components/Input";
import Table from "./components/Table";
import getData from "./utils/dataFetch";
import Pagination from "./components/Pagination";

getData().then((data) => {
  document.querySelector("#app").innerHTML = Input({ id: "hihihi" })
    .concat(Table({ id: "table" }, data.slice(0, 10)))
    .concat(Pagination({}, data.length));
});
