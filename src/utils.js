export function andify(list) {
  return list.reduce(function(acc, item, index) {
    if (!acc) {
      return item;
    }

    return (acc = `${acc}${
      index < list.length - 1 ? `, ${item}` : `, and ${item}`
    }`);
  }, "");
}
