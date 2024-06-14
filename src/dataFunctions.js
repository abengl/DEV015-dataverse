// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export function filterData(data, filterBy, value) {
  return data.filter((obj) => obj.facts[filterBy] === value)
}

