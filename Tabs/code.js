const itemClicked = document.querySelectorAll(".item");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");
const tabs = [tab1, tab2, tab3, tab4];

itemClicked.forEach((item, index) => {
  item.addEventListener("click", () => {
    itemClicked.forEach((el) => el.classList.remove("clicked"));
    item.classList.add("clicked");

    // pestañas
    tabs.forEach((tab) => (tab.style.display = "none"));

    // Mostrar la pestaña correspondiente al item clickeado
    if (tabs[index]) {
      tabs[index].style.display = "block";
    }
  });
});

tabs.forEach((tab, index) => {
  tab.style.display = index === 0 ? "block" : "none";
});
