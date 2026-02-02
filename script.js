
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
//   document.body.innerHTML = "<h1>YAYYY I LOVE YOUUU 💕🥹</h1>";
document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px;">
      <h1>YAYYY I LOVE YOUUU SOOO MUCHHH!!!🥹💕</h1>
      <img src="https://cdn.cdnstep.com/dpZgBZM9wQnOA4eB0zP8/cover-1.thumb256.png" width="300">
    </div>
    `;
});


// yesBtn.addEventListener("click", () => {
//   document.body.innerHTML = `
//     <div style="text-align:center; margin-top:50px;">
//       <h1>YAYYY I LOVE YOUUU 💕🥹</h1>
//       <img src="https://cdn.cdnstep.com/dpZgBZM9wQnOA4eB0zP8/cover-1.thumb256.png" width="300">
//     </div>
//   `;
// });