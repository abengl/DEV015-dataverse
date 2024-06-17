export function filterData(data, filterBy, value) {
  return data.filter((obj) => obj.facts[filterBy] === value);
}

export function sortData(data, sortBy, sortOrder) {
  const dataCopy = data.map((obj) => obj);

  if (sortOrder === "asc") {
    return dataCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder === "desc") {
    return dataCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
}

export function computeStats(data) {
  const dataCopy = data.map((obj) => obj);
  return dataCopy.reduce((topObjects, currentObject) => {
    return topObjects
      .concat(currentObject)
      .sort(
        (a, b) =>
          parseFloat(b.facts["percentageOfUsers"]) -
          parseFloat(a.facts["percentageOfUsers"])
      )
      .slice(0, 3);
  }, []);
}
