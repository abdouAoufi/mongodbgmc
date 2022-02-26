const container = document.querySelector(".container");
const Pcont = document.querySelector("contaner");
const name = document.getElementById("name");
const price = document.getElementById("price");
const desc = document.getElementById("desc");
const img = document.getElementById("img");
const btn = document.getElementById("btn");
const closeBtn = document.getElementById("close");
const result = document.getElementById("result");
const updateContainer = document.getElementById("parent");

// 

this.onload = () => {
    fetch("http://127.0.0.1:1337/product").then((res) =>
        res.json().then((data) => {
            data.products.forEach((singleProduct) => {
                const product = `
     <div class="product">
        <h3>${singleProduct.name}</h3>
        <img
          src=${singleProduct.img}
          alt=${singleProduct.name}
        />
        <h4 id="price">${singleProduct.price} DA</h4>
        <p>
          ${singleProduct.desc}
        </p>
      </div>
      `;
                const updateBtn = document.createElement("button");
                updateBtn.innerText = "update product";
                updateBtn.addEventListener("click", () => {
                    // alert(JSON.stringify(singleProduct, null, 2));
                    updateContainer.style.display = "grid"
                    name.value = singleProduct.name;
                    price.value = singleProduct.price;
                    img.value = singleProduct.img;
                    desc.value = singleProduct.desc;
                });
                const cont = document.createElement("div");
                cont.innerHTML = product;
                cont.append(updateBtn);
                container.append(cont);
            });
        })
    );
};

btn.addEventListener("click", () => {
    const payload = {
        name: name.value,
        price: price.value,
        desc: desc.value,
        img: img.value,
    };
    fetch("http://127.0.0.1:1337/product", {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) =>
        res.json().then((data) => {
            result.innerText = data.message;
        })
    );
});

closeBtn.addEventListener("click", () => {
    updateContainer.style.display = "none"
})