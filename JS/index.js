import displayDate from "./modules/dateTime.js";
import {
  addBook, contact, listpage,
} from "./modules/navBar.js";

const onLoading = () => {
  displayDate();
  setInterval(displayDate, 1000);
  listpage();
};
onLoading();

const links = document.querySelectorAll(".link"); /// create array of element objects
links.forEach((link) => {
  link.addEventListener("click", function handleClick() {
    if (this.id === "listBtn") {
      listpage();
    }
    if (this.id === "addNewBook") {
      addBook();
    }
    if (this.id === "contactBtn") {
      contact();
    }
    return link;
  });
});
