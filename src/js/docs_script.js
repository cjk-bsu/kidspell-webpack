const VALID_EDITING_EXT_ID = "ocnjkingnoccghefojojhknfnpmegmnc";
// const VALID_EDITING_EXT_ID = chrome.runtime.id;

(() => { window._docs_annotate_canvas_by_ext = VALID_EDITING_EXT_ID; })();

// window._docs_annotate_canvas_by_ext = VALID_EDITING_EXT_ID;

console.log("reached here 2");

// chrome.scripting.executeScript({
//     target: {tabId : chrome.tabs.Tab()}
// })


// let  = document.querySelector("[class^='kix-page-paginated']");





let isRefreshFired = false;
let currentCursor;
let currentCursorBbox;
let currentX;
let currentY;
let currentWindowRect;
let currentWindowText;

// let cursor = document.querySelector('#kix-current-user-cursor-caret');
// let cursorBbox = cursor.getBoundingClientRect();
// let x = Math.floor(cursorBbox.right);
// let y = Math.floor(cursorBbox.top);
// console.log("x = ", x);
// console.log("y = ", y);
// const rect = this.getRect(x, y);

const getCursor = () => {
    currentCursor = document.querySelector('#kix-current-user-cursor-caret');
}

const getCursorBbox = () => {
    if (currentCursor != null) {
        currentCursorBbox = currentCursor.getBoundingClientRect();
    } else {
        return;
    }
}

const getXY = () => {
    if (currentCursorBbox != null) {
        currentX = Math.floor(currentCursorBbox.right);
        currentY = Math.floor(currentCursorBbox.top);
        console.log("x = ", currentX);
        console.log("y = ", currentY);
    } else {
        return;
    }
}

const getRect = (x, y) => {
    //     if (!this.styleElement) {
    //         this.styleElement = document.createElement("style");
    //         this.styleElement.id = "enable-pointer-events-on-rect";
    //         this.styleElement.textContent = [
    //             ".kix-canvas-tile-content{pointer-events:none!important;}",
    //             "#kix-current-user-cursor-caret{pointer-events:none!important;}",
    //             ".kix-canvas-tile-content svg>g>rect{pointer-events:all!important; stroke-width:7px !important;}",
    //         ].join("\n");

    //         const parent = (document.head || document.documentElement)
            
    //         if (parent !== null) {
    //             parent.appendChild(this.styleElement);
    //         }
    //     }

    // this.styleElement.disabled = false;
    // const rect = document.elementFromPoint(x, y);
    // this.styleElement.disabled = true;

    // return rect;
};

const updateCursorVals = () => {
    getCursor();
    getCursorBbox();
    getXY();
}

updateCursorVals();

window.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        updateCursorVals();
        isRefreshFired = true;
    } else {
        return
    }
});

setTimeout(function() {
    if (!isRefreshFired) {
        updateCursorVals();
    } else {
        isRefreshFired = false;
    }
}, 3000);








































































































































































// let appViewEditor = document.querySelector("[class='kix-appview-editor']");

// // Retrieve the currently visible page
// let visiblePage = appViewEditor.querySelector("[class^='.kix-page-paginated:not([style*=\"display: none\"])']");

// // Check if a visible page is found
// if (visiblePage) {
//     // Get the bounding box of the visible page
//     const boundingBox = visiblePage.getBoundingClientRect();

//     // Determine the dimensions and position of the visible portion within the page
//     const visiblePortion = {
//         top: Math.max(boundingBox.top, 0),
//         left: Math.max(boundingBox.left, 0),
//         width: Math.min(boundingBox.width, window.innerWidth),
//         height: Math.min(boundingBox.height, window.innerHeight),
//     };

//     console.log('Visible portion:', visiblePortion);
//     // Perform your logic based on the visible portion
// } else {
//     console.log('No visible page found');
// }













// function updateCursorVals() {
//     currentCursor = document.querySelector("[id='kix-current-user-cursor-caret']");
//     currentCursorBbox = currentCursor.getBoundingClientRect();
//     currentWindowX = Math.floor(currentCursorBbox.right);
//     currentWindowY = Math.floor(currentCursorBbox.top);
//     currentWindowRect = getRect(currentWindowX, currentWindowY);
//     currentWindowText = getTextInRect(currentWindowRect);
// };

// function getRect(x, y) {
//         if (!this.styleElement) {
//             this.styleElement = document.createElement("style");
//             this.styleElement.id = "enable-pointer-events-on-rect";
//             this.styleElement.textContent = [
//                 ".kix-canvas-tile-content{pointer-events:none!important;}",
//                 "#kix-current-user-cursor-caret{pointer-events:none!important;}",
//                 ".kix-canvas-tile-content svg>g>rect{pointer-events:all!important; stroke-width:7px !important;}",
//             ].join("\n");

//             const parent = (document.head || document.documentElement)
            
//             if (parent !== null) {
//                 parent.appendChild(this.styleElement);
//             }
//         }

//     this.styleElement.disabled = false;
//     const rect = document.elementFromPoint(x, y);
//     this.styleElement.disabled = true;

//     return rect;
// };

// function getCaretIndex(rect, x, y) {
//     const text = rect.getAttribute('aria-label');
//     const textNode = document.createTextNode(text);
//     const textElement = this.createTextOverlay(rect, text, textNode);

//     if (!text || !textElement || !textNode) return null;

//     let range = document.createRange();
//     let start = 0;
//     let end = textNode.nodeValue.length;

//     while (end - start > 1) {
//         const mid = Math.floor((start + end) / 2);
//         range.setStart(textNode, mid);
//         range.setEnd(textNode, end);
//         const rects = range.getClientRects();
//         if (this.isPointInAnyRect(x, y, rects)) {
//             start = mid;
//         } else {
//             if (x > range.getClientRects()[0].right) {
//                 start = end;
//             } else {
//                 end = mid;
//             }
//         }
//     }

//     const caretIndex = start;
//     textElement.remove();
//     return caretIndex;
// };

// function createTextOverlay(rect, text, textNode) {
//     if (!rect || rect.tagName !== 'rect') return {};

//     const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//     const transform = rect.getAttribute('transform') || '';
//     const font = rect.getAttribute('data-font-css') || '';

//     textElement.setAttribute('x', rect.getAttribute('x'));
//     textElement.setAttribute('y', rect.getAttribute('y'));
//     textElement.appendChild(textNode);
//     textElement.style.setProperty('all', 'initial', 'important');
//     textElement.style.setProperty('transform', transform, 'important');
//     textElement.style.setProperty('font', font, 'important');
//     textElement.style.setProperty('text-anchor', 'start', 'important');

//     rect.parentNode.appendChild(textElement);

//     const elementRect = rect.getBoundingClientRect();
//     const textRect = textElement.getBoundingClientRect();
//     const yOffset = ((elementRect.top - textRect.top) + (elementRect.bottom - textRect.bottom)) * 0.5;
//     textElement.style.setProperty('transform', `translate(0px,${yOffset}px) ${transform}`, 'important');

//     return textElement;
// };
    
// function isPointInAnyRect(x, y, rects) {
//     for (const rect of rects) {
//         if (x >= Math.floor(rect.left) && x <= Math.floor(rect.right) &&
//             y >= Math.floor(rect.top) && y <= Math.floor(rect.bottom)) {
//             return true;
//         }
//     }
//     return false;
// };



// function getTextInRect(rect) {
//     const text = rect.getAttribute('aria-label');

//     return text;
// }








// updateCursorVals();

// document.body.addEventListener('keydown', function(event) {
//     if (event.key === ' ') {
//         updateCursorVals();
//         isRefreshFired = true;
//     }
// });

// setTimeout(function() {
//     if (!isRefreshFired) {
//         updateCursorVals();
//     } else {
//         isRefreshFired = false;
//     }
// }, 3000);




// if (currentCaret != null) {
//     currentCaretBbox = currentCaret.getBoundingClientRect();
// }

// if (currentCaretBbox != null) {
//     currentWindowX = Math.floor(currentCaretBbox.right);
//     currentWindowY = Math.floor(currentCaretBbox.top);
// }
// if (currentWindowX != null && currentWindowY != null) {
//     currentWindowRect = this.getRect(currentWindowX, currentWindowY);
// }


// async function printText() {
//     if (currentWindowRect != null) {
//         currentWindowText = await getTextInRect(currentWindowRect);

//         console.log(currentWindowText);
//     }
// }

// printText();







        
// function getRect(x, y) {
//         if (!this.styleElement) {
//             this.styleElement = document.createElement("style");
//             this.styleElement.id = "enable-pointer-events-on-rect";
//             this.styleElement.textContent = [
//                 ".kix-canvas-tile-content{pointer-events:none!important;}",
//                 "#kix-current-user-cursor-caret{pointer-events:none!important;}",
//                 ".kix-canvas-tile-content svg>g>rect{pointer-events:all!important; stroke-width:7px !important;}",
//             ].join("\n");

//             const parent = (document.head || document.documentElement)
            
//             if (parent !== null) {
//                 parent.appendChild(this.styleElement);
//             }
//         }

//     this.styleElement.disabled = false;
//     const rect = document.elementFromPoint(x, y);
//     this.styleElement.disabled = true;

//     return rect;
// };

// function getCaretIndex(rect, x, y) {
//     const text = rect.getAttribute('aria-label');
//     const textNode = document.createTextNode(text);
//     const textElement = this.createTextOverlay(rect, text, textNode);

//     if (!text || !textElement || !textNode) return null;

//     let range = document.createRange();
//     let start = 0;
//     let end = textNode.nodeValue.length;

//     while (end - start > 1) {
//         const mid = Math.floor((start + end) / 2);
//         range.setStart(textNode, mid);
//         range.setEnd(textNode, end);
//         const rects = range.getClientRects();
//         if (this.isPointInAnyRect(x, y, rects)) {
//             start = mid;
//         } else {
//             if (x > range.getClientRects()[0].right) {
//                 start = end;
//             } else {
//                 end = mid;
//             }
//         }
//     }

//     const caretIndex = start;
//     textElement.remove();
//     return caretIndex;
// };
    
// function createTextOverlay(rect, text, textNode) {
//     if (!rect || rect.tagName !== 'rect') return {};

//     const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//     const transform = rect.getAttribute('transform') || '';
//     const font = rect.getAttribute('data-font-css') || '';

//     textElement.setAttribute('x', rect.getAttribute('x'));
//     textElement.setAttribute('y', rect.getAttribute('y'));
//     textElement.appendChild(textNode);
//     textElement.style.setProperty('all', 'initial', 'important');
//     textElement.style.setProperty('transform', transform, 'important');
//     textElement.style.setProperty('font', font, 'important');
//     textElement.style.setProperty('text-anchor', 'start', 'important');

//     rect.parentNode.appendChild(textElement);

//     const elementRect = rect.getBoundingClientRect();
//     const textRect = textElement.getBoundingClientRect();
//     const yOffset = ((elementRect.top - textRect.top) + (elementRect.bottom - textRect.bottom)) * 0.5;
//     textElement.style.setProperty('transform', `translate(0px,${yOffset}px) ${transform}`, 'important');

//     return textElement;
// };

// function isPointInAnyRect(x, y, rects) {
//     for (const rect of rects) {
//         if (x >= Math.floor(rect.left) && x <= Math.floor(rect.right) &&
//             y >= Math.floor(rect.top) && y <= Math.floor(rect.bottom)) {
//             return true;
//         }
//     }
//     return false;
// };

// function getSelectedLineOfText(page) {
//     const overlaps = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top
//     const selectionRects = $(".kix-canvas-tile-selection > svg > rect", page).get()
//       .map(el => el.getBoundingClientRect())
//     // Using text elements on that page and the selection rects, find the actual selected line of text.
//     const textElements $("svg > g[role=paragraph] > rect", page).get();

// const cursor = document.querySelector("#kix-current-user-cursor-caret");
// const cursorBbox = cursor.getBoundingClientRect();
// const x = Math.floor(cursorBbox.right);
// const y = Math.floor(cursorBbox.top);
// const rect = this.getRect(x, y);
