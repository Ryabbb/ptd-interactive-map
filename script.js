// script.js

// Select all interactive regions
const regions = document.querySelectorAll(".ptd2-map-region");
const tooltip = document.getElementById("ptd2-map-tooltip");

regions.forEach((region) => {
  region.addEventListener("mouseenter", (e) => {
    // Show tooltip
    const title = region.getAttribute("title");
    tooltip.textContent = title;
    tooltip.classList.remove("hidden");
  });

  region.addEventListener("mousemove", (e) => {
    // Move tooltip with the cursor
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  region.addEventListener("mouseleave", () => {
    // Hide tooltip
    tooltip.classList.add("hidden");
  });
});
