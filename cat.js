const products = [
  { name: 商品1, link: "commodity1.html" },
  { name: 商品2, link: "commodity2.html" },
  { name: 商品3, link: "commodity3.html" },
];
const carousel = document.getElementById("carousel");
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const link = document.createElement("a");
  link.href = product.link;
  link.textContent = product.name;
  carousel.appendChild(link);
  {
    const links = carousel.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetURL = event.target.href;
        console.log("點擊了連結，將跳轉到:" + targetURL);
        window.location.href = targetURL;
      });
    });
  }
}
