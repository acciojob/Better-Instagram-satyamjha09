// Select all the divs that have the "image" class
const images = document.querySelectorAll(".image");

// This variable will hold a reference to the div being dragged
let draggedItem = null;

// Add event listeners to each of the 6 divs
images.forEach((image) => {
  // When you start dragging an element
  image.addEventListener("dragstart", (event) => {
    draggedItem = event.target;

    // (Optional) Add a temporary visual cue
    event.target.classList.add("selected");
  });

  // When the dragged element is over another droppable target
  image.addEventListener("dragover", (event) => {
    // By default, dropping is not allowed in most browsers, so we preventDefault
    event.preventDefault();
  });

  // When the dragged element leaves the original element
  image.addEventListener("dragleave", (event) => {
    // (Optional) Remove the visual cue if you don’t want it to remain
    event.target.classList.remove("selected");
  });

  // When the element is dropped on another element
  image.addEventListener("drop", (event) => {
    event.preventDefault();

    // Remove the selected class from both the dragged and the drop target
    draggedItem.classList.remove("selected");
    event.target.classList.remove("selected");

    // If the dropped target is the same as the dragged element, do nothing
    if (draggedItem === event.target) return;

    // Swap the background images
    const tempBg = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = event.target.style.backgroundImage;
    event.target.style.backgroundImage = tempBg;
  });

  // When the drag ends, clean up (remove the visual cue, etc.)
  image.addEventListener("dragend", () => {
    images.forEach((img) => img.classList.remove("selected"));
    draggedItem = null;
  });
});
