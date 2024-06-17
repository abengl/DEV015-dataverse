export function filterData(data, filterBy, value) {
  const dataCopy = data.map((obj) => obj);
  return dataCopy.filter((obj) => obj.facts[filterBy] === value)
}

export function sortData(data, sortBy, sortOrder) {
  const dataCopy = data.map((obj) => obj);
  if (sortOrder === "asc") {
    return dataCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy])); 
  }
  else if (sortOrder === "desc") {
    return dataCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
}