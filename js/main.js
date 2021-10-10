import { addRows } from "./addRows.js"

const urlSearchParams = new URLSearchParams(window.location.search); //
const params = Object.fromEntries(urlSearchParams.entries()); //

await addRows("data/datas.json", params); // adding rows in the html file from the json file and the passed params on the query 
