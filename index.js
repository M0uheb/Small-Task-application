function verif() {
  const input = document.getElementById("tache");
  const tach = input.value.trim();
  console.log("Tâche saisie :", tach);

  if (tach.length === 0 || !alpha(tach)) {
    alert("Tâche invalide, saisissez de nouveau !");
    input.style.backgroundColor = "red";
    return false;
  } else {
    input.style.backgroundColor = "";
    addTask(tach);
    return false; // Empêche le rechargement de la page
  }
}

function alpha(ch) {
  ch = ch.trim();
  let i = 0;
  while (
    i < ch.length &&
    ch[i].toUpperCase() >= "A" &&
    ch[i].toUpperCase() <= "Z"
  ) {
    i += 1;
  }
  return i >= ch.length;
}

function addTask(tach) {
  const list = document.getElementById("list");
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.type = "checkbox";

  const taskNumber = list.getElementsByTagName("li").length + 1;
  const text = document.createTextNode(" " + taskNumber + ". " + tach);

  li.appendChild(input);
  li.appendChild(text);
  list.appendChild(li);

  document.getElementById("tache").value = "";
}

function deleteTask() {
  const numInput = document.getElementById("numtach");
  const numtach = parseInt(numInput.value);
  const list = document.getElementById("list");
  const items = list.getElementsByTagName("li");

  const index = numtach - 1;

  if (!isNaN(index) && index >= 0 && index < items.length) {
    list.removeChild(items[index]);
    renumberTasks();
  } else {
    alert("Numéro de tâche invalide !");
  }

  numInput.value = "";
}

function renumberTasks() {
  const items = document.getElementById("list").getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    const textNode = items[i].childNodes[1];
    const taskText = textNode.textContent.trim().split(". ")[1];
    textNode.textContent = " " + (i + 1) + ". " + taskText;
  }
}
function deleteAll() {
  document.getElementById("list").innerHTML = "";
}
