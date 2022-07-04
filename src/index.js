import "./styles.css";
import Input from "./components/Input";
import Table from "./components/Table";

document.getElementById("app").innerHTML = Input({ id: "hihihi" }).concat(
  Table({ id: "table" })
);
