import { filterData, sortData } from "../src/dataFunctions.js";
import { data } from "./data.js";

/*
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
*/

describe("dataFunctions", () => {
  describe("dataFunctions.filterData", () => {
    it("should return 1 object for filterBy ='type' and value = 'Markup Language'", () => {
      expect(filterData(data, "type", "Markup Language").length).toBe(1);
    });
    it("should return 2 objects for filterBy = 'applicationField' and value = 'Data Science'", () => {
      expect(filterData(data, "applicationField", "Data Science").length).toBe(
        2
      );
    });
    it("should return an empty array for filterBy ='type' and value = 'Scripting Language'", () => {
      expect(filterData(data, "type", "Front-End Development")).toEqual([]);
    });
  });

  describe("dataFunctions.sortData", () => {
    it("should return 'Angular' as the first object name when sorting by filter type = 'Framework' and sortOrder = 'asc' ", () => {
      expect(sortData(data, "name", "asc")[0].name).toBe("Angular");
    });
    it("should return 'Vue.js' as the first object name when sorting by filter applicationField = 'Front-End Development' and sortOrder = 'desc' ", () => {
      expect(sortData(data, "name", "desc")[0].name).toBe("Vue.js");
    });
  });
});
