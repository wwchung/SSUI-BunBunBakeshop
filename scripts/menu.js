let rowOneItems = ["Original", "Blackberry", "Walnut"];
let rowTwoItems = ["Gluten Free", "Pumpkin Spice", "Caramel Pecan"];

function loadPage() {
    let rowOne = document.getElementsByClassName("menu-row")[0];

    rowOneItems.forEach(item => {
        let child = buildItem(item);
        rowOne.appendChild(child);
    });
    
    let rowTwo = document.getElementsByClassName("menu-row")[1];

    rowTwoItems.forEach(item => {
        let child = buildItem(item);
        rowTwo.appendChild(child);
    });
}

function buildItem(data) {
    let html = data.toLowerCase().replace(" ", "-") + ".html";
    let jpg = data.toLowerCase().replace(" ", "-") + ".jpg";
    let name = data;
    
    let item = document.createElement("a");
    item.classList.add("item");
    item.href = "./menu/" + html;

    let itemImage = document.createElement("img");
    itemImage.src = "./images/" + jpg;
    item.appendChild(itemImage);

    let itemName = document.createElement("h2");
    itemName.textContent = name;
    item.appendChild(itemName);

    return item;
}
