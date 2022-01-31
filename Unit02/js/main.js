document.querySelector("header > h1").innerText = "Inspector Clouseau";
document.querySelector("header > h2").innerText =
  "This is Chief Inspector Clouseau speaking on the phone";

function reDisplay() {
//Code to display the window properties 
  let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`;
  let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`;
  let url = `The URL for this page is: ${window.location.href}`;
  let myWindow = (document.querySelector("#myWindow").innerText =
    windowSizes + "\n" + offset + "\n" + url);

//Code to display document properties. 
  let documentTitle = `The document title is: ${document.title}`;
  let documentLastUpdate = `This document was last updated on: ${document.lastModified}`;
  let myDocument = (document.querySelector("#myDocument").innerText =
  documentTitle + "\n" + documentLastUpdate);
}
reDisplay();