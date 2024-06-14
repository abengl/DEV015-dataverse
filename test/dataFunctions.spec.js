import { filterData } from "../src/dataFunctions.js";
import { data } from "./data.js";

// console.log(data);

describe("filterData", () => {
  it('return filters data by applicationField "Data Science"', () => {
    const filteredData = filterData(data, 'applicationField', 'Data Science');
    // console.log(filteredData)
    expect(filteredData.some(obj => obj.id === "python")).toBe(true);
  });
});

describe('filterdata', () => {
  it('return filters data by applicationField 0', () => {
    const filteredData = filterData(data, 'applicationField', '');
    expect(filteredData.length).toBe(0);
  });
});


/*
describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
