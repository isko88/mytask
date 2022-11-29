const deleteIcons = document.querySelectorAll(".task svg");
deleteIcons.forEach(el => {
    el.addEventListener("click", function (e) {
        e.target.parentElement.remove()
    })
})

const addtolistBtn = document.querySelector(".addtolist-btn");
addtolistBtn.onclick = () => console.log("Okay")


const downSort = document.querySelector(".sort-icon svg:first-child");
const upSort = document.querySelector(".sort-icon svg:last-child");
const todoList = document.querySelector(".to-do-list");

downSort.addEventListener("click", function () {
    this.classList.toggle("show");
    upSort.classList.toggle("show");
    //
    const tasks = [...document.querySelectorAll(".task")];
    tasks.sort((a, b) => {
        return parseInt(b.innerText) - parseInt(a.innerText);
    })
    todoList.replaceChildren(...todoList.children, ...tasks)
})
upSort.addEventListener("click", function () {
    this.classList.toggle("show");
    downSort.classList.toggle("show");
    //
    const tasks = [...document.querySelectorAll(".task")];
    tasks.sort((a, b) => {
        return parseInt(a.innerText) - parseInt(b.innerText);
    })
    todoList.replaceChildren(...todoList.children, ...tasks)
})