function login() {
    const password = document.getElementById("adminPass").value;
    if (password === "admin123") {
      document.getElementById("adminContent").style.display = "block";
      loadHistory();
    } else {
      alert("Incorrect password!");
    }
  }
  
  function loadHistory() {
    const history = JSON.parse(localStorage.getItem("calcHistory") || "[]");
    const list = document.getElementById("historyList");
    list.innerHTML = "";
    history.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
  
  function clearHistory() {
    localStorage.removeItem("calcHistory");
    loadHistory();
  }
  