// Defining variables

// Welcome Screen Variables
var welcomeOpen = document.getElementById("welcome-icon");
var welcomeClose = document.getElementById("welcome-close")
var welcomeScreen = document.getElementById("welcome");

// Projects Screen Variables
var projectsScreen = document.getElementById("projects");
var projectsOpen = document.getElementById("projects-icon");
var projectsClose = document.getElementById("projects-close");

// Hardware Section

var completedHardwareButton = document.getElementById("hardware-complete");
var inprogHardwareButton = document.getElementById("hardware-inprogress");
var incompleteHardwareButton = document.getElementById("hardware-incomplete");

var completedSectionHardware = document.getElementById(completedHardwareButton.id + "-section");
var inprogSectionHardware = document.getElementById(inprogHardwareButton.id + "-section");
var incompleteSectionHardware = document.getElementById(incompleteHardwareButton.id + "-section");

// Software Section
var completedSoftwareButton = document.getElementById("software-complete");
var inprogSoftwareButton = document.getElementById("software-inprogress");
var incompleteSoftwareButton = document.getElementById("software-incomplete");

var completedSectionSoftware = document.getElementById(completedSoftwareButton.id + "-section");
var inprogSectionSoftware = document.getElementById(inprogSoftwareButton.id + "-section");
var incompleteSectionSoftware = document.getElementById(incompleteSoftwareButton.id + "-section");

// Games Section
var completedGamesButton = document.getElementById("games-complete");
var inprogGamesButton = document.getElementById("games-inprogress");
var incompleteGamesButton = document.getElementById("games-incomplete");

var completedSectionGames = document.getElementById(completedGamesButton.id + "-section");
var inprogSectionGames = document.getElementById(inprogGamesButton.id + "-section");
var incompleteSectionGames = document.getElementById(incompleteGamesButton.id + "-section");

// Interests Screen Variables
var interestsScreen = document.getElementById("interests");
var interestsOpen = document.getElementById("interests-icon");
var interestsClose = document.getElementById("interests-close");

// Socials Screen Variables
var socialsScreen = document.getElementById("socials");
var socialsOpen = document.getElementById("socials-icon");
var socialsClose = document.getElementById("socials-close");

// File Explorer Screen Variables
var fileExplorerScreen = document.getElementById("file-explorer");
var fileExplorerOpen = document.getElementById("file-explorer-icon");
var fileExplorerClose = document.getElementById("file-explorer-close");

// Settings Screen Variables
var settingsScreen = document.getElementById("settings");
var settingsOpen = document.getElementById("settings-icon");
var settingsClose = document.getElementById("settings-close");

// Taskbar Area Variables
var timeAndDateSection = document.getElementById("time-and-date");
var taskbar = document.getElementById("taskbar");

// Z-index variable
var zIndex = 2;

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

// Socials Window Code
dragElement(socialsScreen);
socialsClose.addEventListener("click", function() {
  closeWindow(socialsScreen);
});
socialsOpen.addEventListener("click", function() {
  openWindow(socialsScreen);
});

// Settings Window Code
dragElement(settingsScreen);
settingsClose.addEventListener("click", function() {
  closeWindow(settingsScreen);
});
settingsOpen.addEventListener("click", function() {
  openWindow(settingsScreen);
});
function closeWindow(element){
  element.style.display = "none";
}
function openWindow(element) {
  zIndex += 1;
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.zIndex = zIndex;
}


// Hardware Button Event Listeners
inprogHardwareButton.addEventListener("click", function(){
  selectSelection(inprogSectionHardware,inprogHardwareButton);
});
completedHardwareButton.addEventListener("click", function() {
  selectSelection(completedSectionHardware, completedHardwareButton)
});
incompleteHardwareButton.addEventListener("click", function(){
  selectSelection(incompleteSectionHardware, incompleteHardwareButton)
});
// In Progress Button Event Listeners
inprogSoftwareButton.addEventListener("click", function(){
  selectSelection(inprogSectionSoftware,inprogSoftwareButton);
});
completedSoftwareButton.addEventListener("click", function() {
  selectSelection(completedSectionSoftware, completedSoftwareButton)
});
incompleteSoftwareButton.addEventListener("click", function(){
  selectSelection(incompleteSectionSoftware, incompleteSoftwareButton)
});
// Games Button Event Listeners
inprogGamesButton.addEventListener("click", function(){
  selectSelection(inprogSectionGames,inprogGamesButton);
});
completedGamesButton.addEventListener("click", function() {
  selectSelection(completedSectionGames, completedGamesButton)
});
incompleteGamesButton.addEventListener("click", function(){
  selectSelection(incompleteSectionGames, incompleteGamesButton)
});

// Variables for currently selected tab for each project type section
// Hardware Variables
var currentlySelectedHardware = completedHardwareButton;
var currentlyOpenSection = completedSectionHardware;
// Software Variables
var currentlySelectedSoftware = completedSoftwareButton;
var currOpenSoftware = completedSectionSoftware;
// Game Variables
var currentlySelectedGames = completedGamesButton;
var currOpenGames = completedSectionGames;

// Function to change style and section shown when function is called
function selectSelection(element, button){
  // If/else statement checks what section the element is
  if (element.id.includes("hardware")){
    // Removes currently selected class from previously selected button
    // Changes variable to recently tapped and adds class to the button argument
    currentlySelectedHardware.classList.remove("currently-selected");
    currentlySelectedHardware = button;
    currentlySelectedHardware.classList.add("currently-selected");

    // Makes the Section disappear, makes current section variable element argument,
    // Changes display to block
    currentlyOpenSection.style.display = "none";
    currentlyOpenSection = element;
    currentlyOpenSection.style.display = "block";

  } else if (element.id.includes("software")){
    currentlySelectedSoftware.classList.remove("currently-selected");
    currentlySelectedSoftware = button;
    currentlySelectedSoftware.classList.add("currently-selected");

    currOpenSoftware.style.display = "none";
    currOpenSoftware = element;
    currOpenSoftware.style.display = "block";

  } else if (element.id.includes("games")){
    currentlySelectedGames.classList.remove("currently-selected");
    currentlySelectedGames = button;
    currentlySelectedGames.classList.add("currently-selected");

    currOpenGames.style.display = "none";
    currOpenGames = element;
    currOpenGames.style.display = "block";
  }

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