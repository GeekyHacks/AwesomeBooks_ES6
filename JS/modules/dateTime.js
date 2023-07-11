import { DateTime } from "../../../../../AwesomeBooks_ES6/node_modulesluxon/buildes6luxon.js";

const dateLine = document.querySelector(".dayDate");
const navBar = document.querySelector("nav");
export default displayDate = () => {
  const dt = DateTime.now();
  const f = { month: "long", day: "numeric" };
  dt.setLocale("en-US").toLocaleString(f);
  dateLine.innerHTML = `${dt}`;
  navBar.appendChild(dateLine);
};

// var dt = DateTime.now();
// var f = {month: 'long', day: 'numeric'};
// dt.setLocale('fr').toLocaleString(f)      //=> '14 septembre'
// dt.setLocale('en-GB').toLocaleString(f)   //=> '14 September'
// dt.setLocale('en-US').toLocaleString(f)

// export let displayDate = () => {
//   const stringDate = new Date();
//   const date = stringDate.toLocaleDateString('en-us', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });
//   const time = stringDate.toLocaleTimeString();
//   dateLine.innerHTML = `${date} ${time}`;
//   navBar.appendChild(dateLine);
// };
