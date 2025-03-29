const rootGoods = document.getElementById("page-catalog");
class Goods {
  render() {
    let htmlCatalog = "";

    products.forEach(({ id, category, title, price, images }) => {
      htmlCatalog += `
        <li class="goods-element">
        <img class="goods-element__img" src ="${images}"/>
        <span class="goods-element__price">${price}</span>
        <span class="goods-element__title">${title}</span>
        <div class ="buttons">
        <button class="goods-element_btnInformation">Подробнее</button>
        <button class="goods-element_btnShopping">В корзину</button>
        </div>
        </li>`;
    });
    const html = `
    <ul class="goods-container">
    ${htmlCatalog}
    </ul>
    `;
    rootGoods.innerHTML = html;
  }
}
const goodsPage = new Goods();
goodsPage.render();
