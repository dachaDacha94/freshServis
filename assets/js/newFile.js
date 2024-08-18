document.querySelectorAll("answer__accordeon").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    console.log(content);
  });
});
