window.addEventListener("load", () => {
  const form = document.querySelector("#new-form");
  const input = document.querySelector("#new-input");
  const list_el = document.querySelector(".tasks");

  form.addEventListener("submit", (e) => {
    console.log("Submit");
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("please fill out Task!");
      return;
    }

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const content_element = document.createElement("div");
    content_element.classList.add("content");

    task_element.appendChild(content_element);

    const input_element = document.createElement("input");
    input_element.classList.add("text");
    input_element.type = "text";
    input_element.value = task;
    input_element.setAttribute("readonly", "readonly");
    content_element.appendChild(input_element);

    const button_elements = document.createElement("div");
    button_elements.classList.add("buttons");

    const edit_elements = document.createElement("button");
    edit_elements.classList.add("edit");
    edit_elements.innerHTML = "Edit";

    const delete_elements = document.createElement("button");
    delete_elements.classList.add("delete");
    delete_elements.innerHTML = "Delete";

    button_elements.appendChild(edit_elements);
    button_elements.appendChild(delete_elements);

    task_element.appendChild(button_elements);

    list_el.appendChild(task_element);
    input.value = "";

    edit_elements.addEventListener("click", () => {
      if (edit_elements.innerText.toLowerCase() == "edit") {
        input_element.removeAttribute("readonly");
        input_element.focus();
        edit_elements.innerText = "Save";
      } else {
        input_element.setAttribute("readonly", "readonly");
        edit_elements.innerText = "Edit";
      }
    });

    delete_elements.addEventListener("click", () => {
      list_el.removeChild(task_element);
    });
  });
});
