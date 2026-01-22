let productsContainer = document.getElementById("productsContainer");

let jsonDoc;
document
  .getElementById("inputFile")
  .addEventListener("change", async function (event) {
    const file = event.target.files[0];

    if (!file) {
      console.log("file not found");
      return;
    }

    try {
      let jsonText = await file.text();
      jsonDoc = JSON.parse(jsonText);
    } catch (error) {
      console.log(error);
    }

    loadInitiaData(jsonDoc.products);
  });



function loadInitiaData(products) {

//   const products = jsonDoc.products;

  for (let product of products) {
    const newDiv = document.createElement("div");
    newDiv.class = "product";
    newDiv.innerHTML = `
                <img src='${product.url}'>
                <h4>${product.name}</h4>
                <p>Price : ${product.price}$</p>
                <p>Category : ${product.category}</p>
                <p>In Stock : ${product.stock}</p>
                `;
    productsContainer.append(newDiv);
  }


}
