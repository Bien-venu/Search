const dy = document.querySelectorAll("#see");
const df = document.getElementById("search");
const firstInput = document.getElementById("in");
const theBtn = document.getElementById("btn");
const secondInput = document.getElementById("didi");

firstInput.addEventListener("keyup", () => {
  for (i of dy) {
    const eve = i.innerHTML;
    const vali = firstInput.value.toLowerCase();
    {
      eve.includes(vali) ? (i.style.display = "") : (i.style.display = "none");
    }
  }
});
theBtn.addEventListener("click", () => {
  dy.forEach((e) => {
    const eve = e.innerHTML;
    const vali = secondInput.value.toLowerCase();
    {
      eve.includes(vali) ? (e.style.display = "") : (e.style.display = "none");
    }
  });
});