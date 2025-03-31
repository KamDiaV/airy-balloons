# Airy Balloons

**Airy Balloons** — это проект сайта по продаже и доставке воздушных шаров, оформленный как SPA/лендинг с дополнительным функционалом (каталог товаров, корзина, оформление заказа и т. д.). Сайт разворачивается на **Netlify** и использует **Serverless-функции** для обработки заказов.

---

## Содержание

- [Особенности проекта](#особенности-проекта)
- [Технологический стек](#технологический-стек)
- [Netlify и деплой](#netlify-и-деплой)

---

## Особенности проекта

- **Адаптивная верстка:** Mobile-first подход с поддержкой различных разрешений экранов.
- **Каталог товаров:** Отображение карточек товаров, фильтрация по категориям.
- **Корзина:** Добавление, удаление товаров и подсчет итоговой суммы.
- **Оформление заказа:** Форма с валидацией данных и отправкой на серверную часть.
- **Отзывы и блок "О нас":** Разделы с информацией о компании и отзывы клиентов.
- **Контактная информация и карта:** Интерактивная карта и данные для связи.
- **Netlify Functions:** Интеграция serverless-функций для обработки заказов.

---

## Технологический стек

- **HTML5** и **CSS3** (с использованием SCSS/препроцессоров, normalize.css)
- **JavaScript (ES6+)** для динамичного взаимодействия на фронтенде
- **Node.js** для реализации Netlify Functions (Serverless)
- **Netlify** для хостинга и деплоя сайта
- **node-fetch** для выполнения HTTP-запросов в serverless-функциях (настроен для CommonJS)
- **Git** и **GitHub** для контроля версий
- **npm** для управления зависимостями и скриптами сборки

---

## Netlify и деплой

- **Netlify** используется для хостинга.
- Файл **netlify.toml** содержит конфигурацию сборки и указание на корневую директорию или папку сборки.
- Папка **netlify/functions** содержит serverless-функции, которые автоматически разворачиваются как AWS Lambda.
- При пуше изменений в основную ветку, Netlify автоматически деплоит обновленную версию сайта.

---

**Приятной разработки!**

Если у вас возникли вопросы или предложения по улучшению проекта, пожалуйста, создайте issue или pull request на GitHub.
