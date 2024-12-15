const searchInput = document.querySelector("[data-js-search]");
const searchButton = document.querySelector("[data-js-search-button]");
const cardWrapper = document.querySelector(".section__main-list");
const films = [
  {
    id: 0,
    title: "Марсианин 1",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    poster: "wrapper.jpeg",
  },
  {
    id: 1,
    title: "Марсианин 2",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    poster: "wrapper.jpeg",
  },
  {
    id: 2,
    title: "Марсианин 3",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    poster: "wrapper.jpeg",
  },
  {
    id: 3,
    title: "Марсианин 4",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    poster: "wrapper.jpeg",
  },
  {
    id: 4,
    title: "Марсианин 5",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    poster: "wrapper.jpeg",
  },
  {
    id: 5,
    title: "Марсианин 6",
    originalTitle: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    poster: "wrapper.jpeg",
  },
];

const renderCard = (array) => {
  cardWrapper.innerHTML = "";

  array.forEach((card) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <li class="section__main-item">
          <a href="${card.link}" class="section__main-link">
              <img
                src="./images/${card.poster}"
                alt=""
                class="section__main-poster"
                width="264"
                height="376"
                loading="lazy"
              />
              <h2 class="section__main-film-title">
                <strong>${card.title}</strong>, ${card.originalTitle}
              </h2>
              <p class="section__main-film-description">
              ${card.category}
              </p>
              <span class="section__main-film-rating">${card.rating}</span>
            </a>
          </li>
        `
    );
  });
};

searchButton.addEventListener("click", () => {
  renderCard(films.filter((card) => card.title.includes(searchInput.value)));
});

renderCard(films);
