export async function addRow(first, last, age, eyeColor, email, address, company) {

    if (!document.getElementsByTagName) return;

    const tabBody = document.getElementsByTagName("tbody").item(0);
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const cell6 = document.createElement("td");
    const cell7 = document.createElement("td");

    const textnode1 = document.createTextNode(first);
    const textnode2 = document.createTextNode(last);
    const textnode3 = document.createTextNode(age);
    const textnode4 = document.createTextNode(eyeColor);
    const textnode5 = document.createTextNode(email);
    const textnode6 = document.createTextNode(address);
    const textnode7 = document.createTextNode(company);

    cell1.appendChild(textnode1);
    cell2.appendChild(textnode2);
    cell3.appendChild(textnode3);
    cell4.appendChild(textnode4);
    cell5.appendChild(textnode5);
    cell6.appendChild(textnode6);
    cell7.appendChild(textnode7);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);

    tabBody.appendChild(row);
}

// this function adds a row (witch contains the passed params) in the tbody tag
