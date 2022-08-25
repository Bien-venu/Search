// const dy = document.querySelectorAll("#see");
// const df = document.getElementById("search");
// const ins = document.getElementById("in");
// const btn = document.getElementById("btn");

// ins.addEventListener("keyup", () => {
//   for (i of dy) {
//     const eve = i.innerHTML;
//     const vali = ins.value;
//     {
//       eve.includes(vali) ? (i.style.display = "") : (i.style.display = "none");
//     }
//   }
// });

// btn.addEventListener("click", () => {
//   dy.forEach((e) => {
//     const eve = e.innerHTML;
//     const vali = ins.value;
//     {
//       eve.includes(vali) ? (e.style.display = "") : (e.style.display = "none");
//     }
//   });
// });

// btn.addEventListener("click", () => {
//   dy.forEach((e) => {
//     const eve = e.innerHTML;
//     const vali = ins.value;

//     {
//       eve == vali ? (e.style.display = "") : (e.style.display = "none");
//     }
//   });
// });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("yes sir") : reject(" ");
  }, 1000);
});

const didi = async () => {
  const re = await promise1;
  console.log(re);
};

didi();
