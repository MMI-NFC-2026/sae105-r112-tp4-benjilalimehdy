// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");
const tousLesDetails = accordeon.querySelectorAll("details");

accordeon.querySelectorAll("summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const detailsClique = summary.parentElement;
    tousLesDetails.forEach((det) => {
      if (det !== detailsClique) {
        det.open = false;
      }
    });
  });
});
