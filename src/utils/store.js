export default function Store(callback) {
  let array = [];

  Object.defineProperty(this, "array", {
    get: function () {
      return array;
    },
    set: function (value) {
      array = value;
      callback(array);
    }
  });
}
