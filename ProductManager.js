let productList = new Array("Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Mi 5s Plus", "Apple Iphone 8 Plus");
function displayTableFromArray(productList) {
    let str ="<table>"
    + "<caption>Display all product: </caption>"
    + "<tr>"
    + "<th width='30%'>&ensp;Product name</th>"
    + "<th>&ensp;</th>"
    + "<th>&ensp;</th>"
    + "</tr>";
    for (let i = 0; i < productList.length; i++) {
        str += `<tr>
                <td>${productList[i]}</td>
                <td><button id="edit" onclick="editProduct(${i})">Edit</button></td>
                <td><button id="delete" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`;
    }
    str += "</table>"
    document.getElementById("displayTable").innerHTML = str;
}

function addProduct() {
    let product = document.getElementById("newProduct").value;
    if (product !== '') {
        productList.push(product);
    }
    displayTableFromArray(productList);
}

function editProduct(index) {
    productList[index] = prompt("Content edited");
    displayTableFromArray(productList);
}

function deleteProduct(index) {
    productList.splice(index,1);
    displayTableFromArray(productList);
}

displayTableFromArray(productList);