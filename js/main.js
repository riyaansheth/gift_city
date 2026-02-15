const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

const card = document.getElementById("companyCard");

if (card) {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
}
