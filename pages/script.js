// Defining variables

// Welcome Screen Variables
var welcomeOpen = document.getElementById("welcome-icon");
var welcomeClose = document.getElementById("welcome-close")
var welcomeScreen = document.getElementById("welcome");

// Projects Screen Variables
var projectsScreen = document.getElementById("projects");
var projectsOpen = document.getElementById("projects-icon");
var projectsClose = document.getElementById("projects-close");

// File Explorer Screen Variables
var fileExplorerScreen = document.getElementById("file-explorer");
var fileExplorerOpen = document.getElementById("file-explorer-icon");
var fileExplorerClose = document.getElementById("file-explorer-close");

// Interests Screen Variables
var interestsScreen = document.getElementById("interests");
var interestsOpen = document.getElementById("interests-icon");
var interestsClose = document.getElementById("interests-close");

// Taskbar Area Variables
var timeAndDateSection = document.getElementById("time-and-date");
var taskbar = document.getElementById("taskbar");


// Updates Time Section
setInterval(function(){
  var currentTime = new Date();
  var timeSection = document.getElementById("time");
  var dateSection = document.getElementById("date")

  timeSection.innerText = currentTime.toLocaleTimeString();
  dateSection.innerText = currentTime.toLocaleDateString();
  
}, 1000);



// Welcome Window Code
dragElement(welcomeScreen);
welcomeClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});
welcomeOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

// Projects Window Code
dragElement(projectsScreen);
projectsClose.addEventListener("click", function() {
  closeWindow(projectsScreen);
});
projectsOpen.addEventListener("click", function() {
  openWindow(projectsScreen);
});

// Interests Window Code
dragElement(interestsScreen);
interestsClose.addEventListener("click", function() {
  closeWindow(interestsScreen);
});
interestsOpen.addEventListener("click", function() {
  openWindow(interestsScreen);
});


// File Explorer Window Code
dragElement(fileExplorerScreen);
fileExplorerClose.addEventListener("click", function() {
  closeWindow(fileExplorerScreen);
});
fileExplorerOpen.addEventListener("click", function() {
  openWindow(fileExplorerScreen);
});



function closeWindow(element){
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "block"
}

// Code from Stardance Jam

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}