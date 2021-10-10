import { addRow } from "./addRow.js";
import { getData } from "./getData.js";

export const addRows = async (url, params) => {
  const data = await getData(url, params); // get data from the url and the passed params
  // for each element of the data add a row
  data.forEach(element => {
    addRow(element.name.first, element.name.last, element.age, element.eyeColor, element.email, element.address, element.company)
  });
}

// this function populate rows of the docuement from the url and the passed params
