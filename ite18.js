  const btn = document.getElementById("btn");
  const body = document.body;

  btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      btn.textContent = "Light Mode";
    } else {
      btn.textContent = "Dark Mode";
    }
  });

  const about =document.getElementById("about");
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  

  editBtn.addEventListener("click", () => {
    about.setAttribute("contenteditable", "true");
    about.focus();
    editBtn.style.display = "none";
    saveBtn.style.display = "inline";
  } );

  saveBtn.addEventListener("click", () => {
    about.setAttribute("contenteditable", "false");
    editBtn.style.display = "inline";
    saveBtn.style.display = "none";
  });
