const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const appliance = document.getElementById("appliance").value;
  const location = document.getElementById("customerLocation").value.trim();
  const issue = document.getElementById("issue").value.trim();

  const message = [
    "Hello Classic Home Services, I would like to request a service.",
    `Name: ${name}`,
    `Appliance/service: ${appliance}`,
    location ? `Area in Purnea: ${location}` : "",
    issue ? `Issue: ${issue}` : ""
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/919060159156?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
