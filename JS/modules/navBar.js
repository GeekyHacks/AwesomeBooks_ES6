import { container, displayBooks } from "./displayBooks.js";
import { Book } from "./books.js";

export const main = document.querySelector("main");

export const showPopWin = () => {
  const popWin = document.createElement("div");
  popWin.className = "pop-win";
  main.appendChild(popWin);

  popWin.innerHTML = `
      <div class="msg-win">
        <h3>New book successfully added</h3>
      </div>
      `;
  setTimeout(() => popWin.remove(), 2000);
};

const contact = () => {
  container.innerHTML = `<h2>Contact Information</h2>
    <h3>Reach out to us whenever you have any question or wanna say 'Hello!'</h3>
    <ul>
      <li>Author:geekyhacks22@gmail.com</li>
      <li>Phone:0032112321</li>
      <li>Adress:Zaid Street, Sana'a, Yemen</li>
    </ul>`;
  main.appendChild(container);
};

// List page
const listpage = () => displayBooks(container);
// addnew page
const addBook = () => {
  container.innerHTML = `
  <h2 class="hline">Add New Book</h2>
   
    <form action="" class="bookForm">
      <input required id="title" type="text" placeholder="Title" />
     <input required id="author" type="text" placeholder="Author" />
     <button class="button" id="btn" type="submit">Add</button>
    </form>`;
  main.appendChild(container);
  const addBtn = document.querySelector("#btn");
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  // Declare an data object to store userinput
  let formData = {
    Title: "",
    Author: "",
  };

  // Declare the userinput as a data and match it with dataobject
  const formUserInput = (data) => {
    titleInput.value = data.Title;
    authorInput.value = data.Author;
  };

  titleInput.addEventListener("input", () => {
    formData.Title = titleInput.value;
    localStorage.setItem("formData", JSON.stringify(formData));
  });

  authorInput.addEventListener("input", () => {
    formData.Author = authorInput.value;
    localStorage.setItem("formData", JSON.stringify(formData));
  });

  // Store all user input one by one
  if (localStorage.getItem("formData")) {
    formData = JSON.parse(localStorage.getItem("formData"));
    formUserInput(formData);
  }

  addBtn.addEventListener("click", (event) => {
    const title = titleInput.value;
    const author = authorInput.value;
    if (title === "" || author === "") {
      return null;
    }

    Book.addBook(title, author);
    localStorage.removeItem("formData");
    titleInput.value = "";
    authorInput.value = "";
    showPopWin();
    addBook();
    return event.preventDefault();
  });
};

export { listpage, contact, addBook };
