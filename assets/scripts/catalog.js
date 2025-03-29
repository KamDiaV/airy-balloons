// Находим контейнер каталога
const catalogEl = document.getElementById("catalog");

// Функция для рендера списка товаров
function renderCatalog() {
  // Очищаем контейнер каталога
  catalogEl.innerHTML = "";

  products.forEach((product) => {
    // Создаём обёртку для карточки
    const itemEl = document.createElement("div");
    itemEl.classList.add("catalog-item");

    // Определяем главное изображение
    const mainImage =
      product.images && product.images.length > 0
        ? product.images[0]
        : "assets/images/no-image.jpg";

    // Формируем HTML карточки
    itemEl.innerHTML = `
      <a href="product-page.html?id=${product.id}">
        <img
          src="${mainImage}"
          alt="${product.title}"
          class="item-image"
        />
      </a>
      <h2>${product.title}</h2>
      <p class="price">${product.price}₽</p>
      <a href="product-page.html?id=${product.id}" class="btn">Подробнее</a>
    `;

    // Добавляем карточку в контейнер
    catalogEl.appendChild(itemEl);
  });
}

// Запускаем рендер каталога
renderCatalog();
