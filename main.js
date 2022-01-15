const btn = document.getElementsByClassName("add-btn")[0];
const todoApp = document.getElementById("todo-app");
const todo = document.getElementById("todo");

// let list;
// let comp;

btn.addEventListener("click", () => {
    const text = document.getElementById("add-area").value;
    if (text === "") {
        alert("空です");
    } else {
        let list = document.createElement("li");
        let comp = document.createElement("button");
        list.textContent = text;
        comp.textContent = "完了";
        todo.appendChild(list);
        list.appendChild(comp);
        document.getElementById("add-area").value = "";
        comp.addEventListener("click", () => {
            list.textContent = "";
        });
    }
});