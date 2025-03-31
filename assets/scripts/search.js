const products = [
    // ———————————————————————————
    // Наборы на девичник
    // ———————————————————————————
    {
      id: 1,
      category: "bachelorette",
      title: "Набор воздушных шаров на девичник №8",
      price: 3050,
      description: `Стильный набор для незабываемого девичника! Он создаст особую атмосферу и подарит море ярких эмоций.
  В набор входят:
  Фигурка «стрелочка»
  Связка из 10 латексных шаров
  Ленты
  Пакеты`,
  url: 'product-page.html?id=1',
      images: [
        "../../assets/photos/bachelorette/bachelorette-01.jpeg"
      ]
    },
    {
      id: 2,
      category: "bachelorette",
      title: "Шар-бум со сменой фамилии на девичник",
      price: 2650,
      description: `Добавьте интриги на девичнике: шар-бум со сменой фамилии! Яркое решение для неожиданных сюрпризов.
  В набор входят:
  Латексный шар 60 см с надписью, внутри которого фольгированное сердце с новой фамилией
  Иголочка с лентами
  Гирлянда на лентах
  Грузик
  Пакет`,
  url: 'product-page.html?id=2',
      images: [
        "../../assets/photos/bachelorette/bachelorette-02.jpeg"
      ]
    },
    {
      id: 3,
      category: "bachelorette",
      title: "Набор воздушных шаров на девичник №9",
      price: 3500,
      description: `Оригинальный набор воздушных шаров подчеркнёт торжественность вашего девичника. Сердца и фигурка «кольцо» добавят особый шарм!
  В набор входят:
  10 фольгированных сердец 45 см
  Фигурка «кольцо»
  Грузики
  Пакет`,
  url: 'product-page.html?id=3',
      images: [
        "../../assets/photos/bachelorette/bachelorette-03.jpeg"
      ]
    },
  
    // ———————————————————————————
    // Наборы для мальчиков
    // ———————————————————————————
    {
      id: 4,
      category: "boy",
      title: "Набор воздушных шаров для мальчика №16",
      price: 4550,
      description: `Яркий набор для маленького любителя пикселей! Отличный выбор для незабываемого детского праздника.
  В набор входят:
  Цифра метровая
  Фигурка «пиксельный человечек»
  Связка из 10 шаров: 2 фольгированных круга, 2 с конфетти, 3 хром серебро, 3 латекс однотонные
  Грузики
  Пакеты`,
  url: 'product-page.html?id=4',
      images: [
        "../../assets/photos/for-boy/for-boy-01.jpeg"
      ]
    },
    {
      id: 5,
      category: "boy",
      title: "Набор воздушных шаров для мальчика №17",
      price: 2950,
      description: `Создайте атмосферу геймерской вечеринки! Набор с фигуркой «джойстик» и хром-шарами удивит всех гостей.
  В набор входят:
  Звезда 75 см с надписью
  Связка из 7 шаров: фигурка «джойстик», 3 хром серебро, 3 латекс однотонные
  Грузики
  Пакеты`,
  url: 'product-page.html?id=5',
      images: [
        "../../assets/photos/for-boy/for-boy-02.jpeg"
      ]
    },
    {
      id: 6,
      category: "boy",
      title: "Набор воздушных шаров для мальчика №18",
      price: 5150,
      description: `Стильный набор для мальчика: метровая цифра и яркие шары. Подарит радость и праздничное настроение.
  В набор входят:
  Цифра метровая
  Звезда 90см с надписью
  Связка из 10 латексных шаров: 2 фольгированных круга, 8 латекс однотонные
  Грузики
  Пакеты`,
  url: 'product-page.html?id=6',
      images: [
        "../../assets/photos/for-boy/for-boy-03.jpeg"
      ]
    },
  
    // ———————————————————————————
    // Наборы для девочек
    // ———————————————————————————
    {
      id: 7,
      category: "girl",
      title: "Набор воздушных шаров для девочки №10",
      price: 3150,
      description: `Нежный набор для маленькой принцессы! Бантики и шары создадут волшебную атмосферу праздника.
  В набор входят:
  Цифра метровая с бантиками
  Связка из 9 латексных шаров с бантиками
  Грузики
  Пакеты`,
  url: 'product-page.html?id=7',
      images: [
        "../../assets/photos/for-girl/for-girl-01.jpeg"
      ]
    },
    {
      id: 8,
      category: "girl",
      title: "Набор воздушных шаров для девочки №11",
      price: 6100,
      description: `Большой «стеклянный» шар и разноцветные шары – идеальное решение для девичьего торжества.
  В набор входят:
  Большой «стеклянный» шар 60 см с надписью
  Связка из 10 шаров: 2 баблс 45см, 3 фольгированных шара, 5 латексных шаров
  Грузики
  Пакеты`,
  url: 'product-page.html?id=8',
      images: [
        "../../assets/photos/for-girl/for-girl-02.jpeg"
      ]
    },
    {
      id: 9,
      category: "girl",
      title: "Набор воздушных шаров для девочки №12",
      price: 5150,
      description: `Фигурка «бабочка» и прозрачные шары сделают день незабываемым! Прекрасный подарок для девочки.
  В набор входят:
  Фигурка «бабочка»
  2 связки по 7 шаров: 2 прозрачных «Bubble» 45см, 3 сердца, 9 латексных шаров
  Грузики
  Пакеты`,
  url: 'product-page.html?id=9',
      images: [
        "../../assets/photos/for-girl/for-girl-03.jpeg"
      ]
    },
  
    // ———————————————————————————
    // Наборы для мужчин
    // ———————————————————————————
    {
      id: 10,
      category: "man",
      title: "Набор воздушных шаров для мужчины №19",
      price: 4750,
      description: `Солидный набор для настоящего мужчины: «стеклянный» шар и хром-золото. Добавит элегантности в праздник.
  В набор входят:
  Большой «стеклянный» шар 60см с надписью
  Связка из 10 шаров: 2 фольгированные звезды, 3 хром золото, 5 латекс однотонные
  Грузики
  Пакеты`,
  url: 'product-page.html?id=10',
      images: [
        "../../assets/photos/for-man/for-man-01.jpeg"
      ]
    },
    {
      id: 11,
      category: "man",
      title: "Набор воздушных шаров для парня №20",
      price: 4500,
      description: `Фигурка кота в колпаке и связка сердец – необычное решение для весёлого сюрприза мужчине.
  В набор входят:
  Фигурка кот в колпаке
  Связка из 10 сердец 45см
  Грузики
  Пакеты`,
  url: 'product-page.html?id=11',
      images: [
        "../../assets/photos/for-man/for-man-02.jpeg"
      ]
    },
    {
      id: 12,
      category: "man",
      title: "Набор воздушных шаров для мужчины №21",
      price: 5450,
      description: `Две метровые цифры и звезда с фото подчеркнут важность события! Стильный набор для мужчины.
  В набор входят:
  Две метровые цифры
  Звезда 90 см с надписью и фото
  Связка из 5 латексных шаров
  Грузики
  Пакеты`,
  url: 'product-page.html?id=12',
      images: [
        "../../assets/photos/for-man/for-man-03.jpeg"
      ]
    },
  
    // ———————————————————————————
    // Наборы для женщин/девушек
    // ———————————————————————————
    {
      id: 13,
      category: "woman",
      title: "Набор воздушных шаров для девушки №13",
      price: 2750,
      description: `Универсальный набор для девушки: латексный шар и связка шаров. Подойдёт для любого торжества.
  В набор входят:
  Латексный шар 60 см с надписью
  Связка из 6 латексных шаров
  Грузики
  Пакет`,
  url: 'product-page.html?id=13',
      images: [
        "../../assets/photos/for-woman/for-woman-02.jpeg"
      ]
    },
    {
      id: 14,
      category: "woman",
      title: "Набор воздушных шаров для девушки №14",
      price: 5850,
      description: `Большой «стеклянный» шар и сочетание латексных и Bubble-шаров – отличный способ удивить любимую.
  В набор входят:
  Большой «стеклянный» шар 60 см с надписью
  Связка из 10 шаров: 2 «Bubble» 45см, 2 сердца, 6 латексных шаров
  Грузики
  Пакеты`,
  url: 'product-page.html?id=14',
      images: [
        "../../assets/photos/for-woman/for-woman-03.jpeg"
      ]
    },
    {
      id: 15,
      category: "woman",
      title: "Набор воздушных шаров для девушки №15",
      price: 2950,
      description: `Изящный Bubble с декором и 7 шаров подарят романтическое настроение и яркие эмоции.
  В набор входят:
  Шар «Bubble» 50-55 см с декором
  Связка из 7 латексных шаров
  Грузики
  Пакеты`,
  url: 'product-page.html?id=15',
      images: [
        "../../assets/photos/for-woman/for-woman-01.jpeg"
      ]
    },
  
    // ———————————————————————————
    // Гендер-пати (шары на определение пола)
    // ———————————————————————————
    {
      id: 16,
      category: "gender-party",
      title: "Шар на определение пола ребёнка №23",
      price: 2900,
      description: `Загадочный шар на определение пола ребёнка! Подарит незабываемый момент открытия для всей семьи.
  В набор входят:
  Большой шар 60 см с наполнением (конфетти, перья) в цвет пола ребенка
  Декор в виде пушистого хвоста
  Иголочка на лентах
  Грузик
  Пакет`,
  url: 'product-page.html?id=17',
      images: [
        "../../assets/photos/gender-party/gender-party-02.jpeg"
      ]
    },
    {
      id: 17,
      category: "gender-party",
      title: "Шар на определение пола ребёнка №24",
      price: 2500,
      description: `Компактный шар с наполнением для гендер-пати. Удивите близких радостным сюрпризом.
  В набор входят:
  Большой шар 60 см с наполнением (конфетти, перья) в цвет пола ребенка
  Иголочка на лентах
  Грузик
  Пакет`,
  url: 'product-page.html?id=17',
      images: [
        "../../assets/photos/gender-party/gender-party-01.jpeg"
      ]
    },
    {
      id: 18,
      category: "gender-party",
      title: "Набор воздушных шаров для гендер пати №25",
      price: 5150,
      description: `Большой шар и 2 связки шаров: идеальное решение для эффектного раскрытия пола малыша.
  В набор входят:
  Большой шар 60 см с наполнением (конфетти, перья) в цвет пола ребенка
  2 связки по 7 латексных шаров
  Грузики
  Пакеты`,
  url: 'product-page.html?id=18',
      images: [
        "../../assets/photos/gender-party/gender-party-03.jpeg"
      ]
    },
  
    // ———————————————————————————
    // Наборы на выписку
    // ———————————————————————————
    {
      id: 19,
      category: "newborn",
      title: "Набор воздушных шаров на выписку №1",
      price: 4950,
      description: `Набор для выписки, наполненный нежностью. Большой шар с надписью и облачко порадуют счастливых родителей.
  В набор входят:
  Большой латексный шар с надписью
  Фигурка «облачко»
  Связка из 5 шаров (2 сердца с надписью + 3 латексных однотонных)
  Пакеты для транспортировки`,
  url: 'product-page.html?id=19',
      images: [
        "../../assets/photos/newborn/newborn-01.jpeg"
      ]
    },
    {
      id: 20,
      category: "newborn",
      title: "Набор воздушных шаров на выписку №2",
      price: 6500,
      description: `Яркий Bubble с шариками и фигурки-игрушки: слоник, воздушный шар. Идеально для встречи новорождённого.
  В набор входят:
  «Bubble» с шариками внутри и надписью
  Фигурка «слоник»
  Фигурка «воздушный шар»
  Связка из 10 шаров
  Оформленные грузики
  Пакеты`,
  url: 'product-page.html?id=20',
      images: [
        "../../assets/photos/newborn/newborn-03.jpeg"
      ]
    },
    {
      id: 21,
      category: "newborn",
      title: "Набор воздушных шаров на выписку №3",
      price: 4450,
      description: `Bubble с конфетти и фигурка «малыш на облачке» – создайте праздничную атмосферу в день выписки.
  В набор входят:
  «Bubble» с конфетти и надписью
  Фигурка «малыш на облачке»
  10 латексных шаров
  Грузики
  Пакеты`,
  url: 'product-page.html?id=21',
      images: [
        "../../assets/photos/newborn/newborn-02.jpeg"
      ]
    },
  
    // ———————————————————————————
    // Наборы на 14 февраля
    // ———————————————————————————
    {
      id: 22,
      category: "valentines",
      title: "Набор воздушных сердец на 14 февраля №4",
      price: 6750,
      description: `Выразите чувства: большой шар-сердце и целая связка фольгированных сердец! Романтика в каждом шарике.
  В набор входят:
  Большое сердце 75 см
  15 фольгированных сердец 45 см
  Грузики
  Пакеты`,
  url: 'product-page.html?id=22',
      images: [
        "../../assets/photos/valentines-day/valentines-day-03.jpeg"
      ]
    },
    {
      id: 23,
      category: "valentines",
      title: "Набор воздушных шаров на 14 февраля №5",
      price: 5700,
      description: `Сердце 90 см (с фото и надписью) и связка из 10 сердечек – идеальный сюрприз на День влюблённых.
  В набор входят:
  Сердце 90 см (с фото и надписью)
  Связка из 10 фольгированных сердец
  Грузики
  Пакеты`,
  url: 'product-page.html?id=23',
      images: [
        "../../assets/photos/valentines-day/valentines-day-02.jpeg"
      ]
    },
    {
      id: 24,
      category: "valentines",
      title: "Набор воздушных сердец на 14 февраля №6",
      price: 3500,
      description: `Простой, но трогательный набор из 10 фольгированных сердец. Станет приятным признанием в чувствах.
  В набор входят:
  10 фольгированных сердец 45 см
  Грузик
  Пакет`,
  url: 'product-page.html?id=24',
      images: [
        "../../assets/photos/valentines-day/valentines-day-01.jpeg"
      ]
    }
  ];
  
  
  const searchInput = document.getElementById("searchInput");
  const searchIcon = document.getElementById("searchIcon");
  const resultsDiv = document.getElementById("results");
  
  searchInput.addEventListener('keypress', (event) => {
      if (event.key === "Enter") {
          const searchInput = document.getElementById("searchInput").value;
          const results = searchProducts(searchInput);
          displayResults(results);
      }
  });
  
  searchIcon.addEventListener("click", () => {
      searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
      if (searchInput.style.display === 'block') {
          searchInput.focus();
      }
  })
  
  
  window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
          searchInput.style.display = 'flex'; 
      } else {
          searchInput.style.display = 'none'; 
      }
  });
  
  function searchProducts(term) {
      return products.filter(product => 
          product.title.toLowerCase().includes(term) || 
          product.category.toLowerCase().includes(term)
      );
  }
  
  function displayResults(results) {
      resultsDiv.innerHTML = ""; 
      if (results.length === 0) {
          resultsDiv.innerHTML = "<p>Ничего не найдено.</p>";
          return;
      }
  
      results.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.className = "product";
          productDiv.innerHTML = `<h3>${product.title}</h3><p>${product.description}</p>`;
          
          
          productDiv.onclick = function() {
              window.location.href = product.url;
          };
  
          resultsDiv.appendChild(productDiv);
      });
  }
  
      // Получение ID из URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  
  // Получение данных о товаре по его ID
  function getProductById(id) {
      return products.find(product => product.id === parseInt(id));
  }
  
  // Отображение информации о товаре на странице
  const product = getProductById(productId);
  if (product) {
      document.getElementById('product-title').innerText = product.title;
      document.getElementById('product-description').innerText = product.description;
  }