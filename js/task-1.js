const list = document.querySelector("ul#categories");
console.log(`Number of categories: ${list.children.length}`);

const items = list.children;
for (const item of items) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}
