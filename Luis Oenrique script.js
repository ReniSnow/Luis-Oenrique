const articleKnowMore = document.querySelector(".know_more");
const articleService = document.querySelector(".services");
const articlePortfolio = document.querySelector(".portfolio");
// const articleContact = document.querySelector(".contact");

const btnKnowMore = document.querySelector("button");

const about = document.querySelector("a[href='#about']");
const service = document.querySelector("a[href='#service']");
const portfolio = document.querySelector("a[href='#portfolio']");
// const contact = document.querySelector("a[href='#contact']");

function scrollKnowMore() {
  articleKnowMore.scrollIntoView({ block: "center", behavior: "smooth" });
}

btnKnowMore.addEventListener("click", scrollKnowMore);
about.addEventListener("click", scrollKnowMore);

function scrollService() {
  articleService.scrollIntoView({ block: "center", behavior: "smooth" });
}

service.addEventListener("click", scrollService);

function scrollPortfolio() {
  articlePortfolio.scrollIntoView({ block: "center", behavior: "smooth" });
}

portfolio.addEventListener("click", scrollPortfolio);

// function scrollContact() {
//   articleContact.scrollIntoView({ block: "center", behavior: "smooth" });
// }

// contact.addEventListener("click", scrollContact);
