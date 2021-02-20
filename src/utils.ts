export function andify(list) {
  return list.reduce(function(acc, item, index) {
    if (!acc) {
      return item
    }

    return (acc = `${acc}${
      index < list.length - 1 ? `, ${item}` : `, and ${item}`
    }`)
  }, "")
}

export function formatExperienceTime({ from, to = null }) {
  const fromString = `${from.month}.${from.year}`
  const toString = to ? `${to.month}.${to.year}` : ""

  return `${fromString} - ${toString}`
}
