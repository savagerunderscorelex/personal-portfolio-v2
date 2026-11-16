// To make it more readable and easier to maintain, I will create a class based on windows for each section
class Window{
  // Buttons + Screen
  openButton;
  closeButton;
  screen;
  minimizeButton;
  taskbarButton;
  isMinimized;
  constructor (windowName){
    this.openButton = document.getElementById(windowName + "-icon");
    this.closeButton = document.getElementById(windowName + "-close");
    this.screen = document.getElementById(windowName);
    this.minimizeButton = document.getElementById(windowName + "minimize-close");
    this.taskbarButton = document.getElementById(windowName + "-taskbar-icon");
    this.isMinimized = false;
  }

  getScreen(){
    return this.screen;
  }
  getCloseButton(){
    return this.closeButton;
  }
  getOpenButton(){
    return this.openButton;
  }
  getMinimizeButton(){
    return this.minimizeButton;
  }
  getTaskbarButton(){
    return this.taskbarButton;
  }
}

class ProjectSection{
  // Each field is an array containing the button and the actual section.
  completed;
  inProgress;
  incomplete;
  constructor(type){
    this.completed = [document.getElementById(type + "-complete"), document.getElementById(type + "-complete-section")];
    this.inProgress = [document.getElementById(type + "-inprogress"), document.getElementById(type + "-inprogress-section")];
    this.incomplete = [document.getElementById(type + "-incomplete"), document.getElementById(type + "-incomplete-section")];
  }

  getCompletedButton(){
    return this.completed[0];
  }
  getCompletedSection(){
    return this.completed[1];
  }
  getInProgressButton(){
    return this.inProgress[0];
  }
  getInProgressSection(){
    return this.inProgress[1];
  }
  getIncompletedButton(){
    return this.incomplete[0];
  }
  getIncompletedSection(){
    return this.incomplete[1];
  }
}

// Windows
const welcomeWindow = new Window("welcome");
const projectsWindow = new Window("projects");
const interestsWindow = new Window("interests");
const fileExplorerWindow = new Window("file-explorer");
const socialsWindow = new Window("socials");
const settingsWindow = new Window("settings");

// Array for All Windows
const windows = [welcomeWindow, projectsWindow, settingsWindow, interestsWindow, fileExplorerWindow, socialsWindow];

// Project Window Sections
const hardwareSection = new ProjectSection("hardware");
const softwareSection = new ProjectSection("software");
const gamesSection = new ProjectSection("games");

// Array for Project Sections
const projectSections = [hardwareSection, softwareSection, gamesSection];

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

// Code for Functions applied for every window
windows.forEach((window) => {
  dragElement(window.getScreen());
  window.getCloseButton().addEventListener("click", () => {
    closeWindow(window.getScreen());
  });
  window.getOpenButton().addEventListener("click", () => {
    openWindow(window);
  });
  expandScreen(window.getScreen());
  window.getMinimizeButton().addEventListener("click", () => {
    changeTaskbarIcon(window);
  })
  window.getTaskbarButton().addEventListener("click", () => {
    reopenWindow(window);
  })
  dragElementMobile(window.getScreen())
});


projectSections.forEach((section) => {
  section.getCompletedButton().addEventListener("click", () => {
    selectSelection(section.getCompletedSection(), section.getCompletedButton())
  });
  section.getInProgressButton().addEventListener("click", () => {
    selectSelection(section.getInProgressSection(), section.getInProgressButton());
  });
  section.getIncompletedButton().addEventListener("click", () => {
    selectSelection(section.getIncompletedSection(), section.getIncompletedButton())
  });
});


// Variables for currently selected tab for each project type section
// Hardware Variables
var currentlySelectedHardware = hardwareSection.getCompletedButton();
var currentlyOpenSection = hardwareSection.getCompletedSection();

// Software Variables
var currentlySelectedSoftware = softwareSection.getCompletedButton();
var currOpenSoftware = softwareSection.getCompletedSection();

// Game Variables
var currentlySelectedGames = gamesSection.getCompletedButton();
var currOpenGames = gamesSection.getCompletedSection();


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
    currentlyOpenSection.style.display = "flex";

  } else if (element.id.includes("software")){
    currentlySelectedSoftware.classList.remove("currently-selected");
    currentlySelectedSoftware = button;
    currentlySelectedSoftware.classList.add("currently-selected");

    currOpenSoftware.style.display = "none";
    currOpenSoftware = element;
    currOpenSoftware.style.display = "flex";

  } else if (element.id.includes("games")){
    currentlySelectedGames.classList.remove("currently-selected");
    currentlySelectedGames = button;
    currentlySelectedGames.classList.add("currently-selected");

    currOpenGames.style.display = "none";
    currOpenGames = element;
    currOpenGames.style.display = "flex";
  }
  
}

// Expanded Screen function
function expandScreen(element){
  var isExpanded = false;
  if (document.getElementById(element.id + "full-split")){
    var button = document.getElementById(element.id + "full-split");
    button.onclick = enlargeScreen;
  }

  function enlargeScreen(){
    // This function will not work if the class attributes are not labeled !important
    // Since window styling is based on id which has more precedence
    isExpanded = !isExpanded;
    var parent = button.parentElement.parentElement;
    if (isExpanded){  
      parent.classList.add("expanded");
      button.firstElementChild.src = "./window-stack.svg";
    } else {
      parent.classList.remove("expanded");
      button.firstElementChild.src = "./window-fullscreen.svg";
    }
    
  }
}

// Function for taskbar icons 
function changeTaskbarIcon(window){
  window.getScreen().style.display = "none";
  window.isMinimized = !window.isMinimized;
  var taskbarIcon = window.getTaskbarButton();

  if (window.isMinimized){
    taskbarIcon.classList.add("minimized");
    taskbarIcon.classList.remove("opened-icons");
  } else {
    taskbarIcon.classList.remove("minimized");
    taskbarIcon.classList.add("opened-icons");    
  }
}

// Close Window Function
function closeWindow(element){
  element.style.display = "none";
  var taskbarI = document.getElementById(element.id + "-taskbar-icon");
  taskbarI.style.display = "none";
  taskbarI.classList.remove("opened-icons");
}
// Open Window Function
function openWindow(element) {
  zIndex += 1;
  element.getScreen().style.display = "flex";
  element.getScreen().style.flexDirection = "column";
  element.getScreen().style.zIndex = zIndex;
  taskbar.style.zIndex = zIndex;
  element.isMinimized = false;
  if(element.isMinimized == false){
    var taskbarIcon = element.getTaskbarButton();
    taskbarIcon.style.display = "block";
    taskbarIcon.classList.add("opened-icons"); 
  }
}

function reopenWindow(element){
  element.isMinimized = !element.isMinimized;
  if (element.isMinimized == false){
    element.getScreen().style.display = "flex";
    element.getScreen().style.flexDirection = "column";
    var taskbarIcon = element.getTaskbarButton();
    taskbarIcon.classList.remove("minimized");
    taskbarIcon.classList.add("opened-icons"); 
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

function dragElementMobile(element) {
  var box = document.getElementById(element.id + "-header");
  
  box.addEventListener('touchmove', function(e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  })
  
  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. */
  
  box.addEventListener('touchend', function(e) {
    // current box position.
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  })
  
}

