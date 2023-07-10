import { displayDate } from './modules/dateTime.js';
import { addBook, contact, listpage } from './modules/navBar.js';

export const main = document.querySelector('main');

const onLoading = () => {
  displayDate();
  setInterval(displayDate, 1000);
  listpage();
};
onLoading();

// Single page app

export const showPopWin = () => {
  const popWin = document.createElement('div');
  popWin.className = 'pop-win';
  main.appendChild(popWin);

  popWin.innerHTML = `
    <div class="msg-win">
      <h3>New book successfully added</h3>
    </div>
    `;
  setTimeout(() => popWin.remove(), 2000);
};
// contact page

// the following can be done for links click

const links = document.querySelectorAll('.link'); /// create array of element objects
links.forEach((link) => {
  link.addEventListener('click', function handleClick() {
    if (this.id === 'listBtn') {
      listpage();
    }
    if (this.id === 'addNewBook') {
      addBook();
    }
    if (this.id === 'contactBtn') {
      contact();
    }
    return link;
  });
});

