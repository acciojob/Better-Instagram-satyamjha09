// Grab all draggable "image" elements
const images = document.querySelectorAll(".image");

// We'll store a reference to the item being dragged
let draggedItem = null;

images.forEach((image) => {
  // Drag Start
  image.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    event.target.classList.add("selected");
  });

  // Allow Drop (Drag Over)
  image.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  // Drag Leave
  image.addEventListener("dragleave", (event) => {
    event.target.classList.remove("selected");
  });

  // Drop
  image.addEventListener("drop", (event) => {
    event.preventDefault();
    // Remove highlight from both the dragged item and the drop target
    draggedItem.classList.remove("selected");
    event.target.classList.remove("selected");

    // If the dragged item and drop target are the same, do nothing
    if (draggedItem === event.target) return;

    // Swap backgrounds
    const tempBg = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = event.target.style.backgroundImage;
    event.target.style.backgroundImage = tempBg;
  });

  // Drag End (cleanup)
  image.addEventListener("dragend", () => {
    images.forEach((img) => img.classList.remove("selected"));
    draggedItem = null;
  });
});
