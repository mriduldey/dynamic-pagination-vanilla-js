import propsToString from "../utils/propsToString";

export default function Pagination(props, rowNumber) {
  const properties = propsToString(props);
  const getPageNumbers = () => {
    let pageNums = "";
    const numOfPage = Math.ceil(rowNumber / 10);
    for (let i = 1; i <= numOfPage; i++) {
      pageNums += `<span>${i}</span>`;
    }

    return pageNums;
  };

  return `<button><<</button>
  ${getPageNumbers()}
  <button>>></button>`;
}
