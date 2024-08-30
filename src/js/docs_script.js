// ==UserScript==
// @name        docs_script
// @version     1.0
// @match       https://docs.google.com/document/d/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

// const VALID_EDITING_EXT_ID = "ocnjkingnoccghefojojhknfnpmegmnc";
// const VALID_EDITING_EXT_ID = chrome.runtime.id;

// window._docs_annotate_canvas_by_ext = VALID_EDITING_EXT_ID;


// const VALID_EDITING_EXT_ID = "ocnjkingnoccghefojojhknfnpmegmnc";
const VALID_EDITING_EXT_ID = "hoinenocdmfldbigmcpmnbdchckgbcho";
// // const VALID_EDITING_EXT_ID = chrome.runtime.id;

// (() => { window._docs_annotate_canvas_by_ext = VALID_EDITING_EXT_ID; })();



// let isRefreshFired = false;
// let currentCursor;
// let currentCursorBbox;
// let currentX;
// let currentY;
// let currentWindowRect;
// let currentWindowText;

// const getCursor = () => {
//     currentCursor = document.querySelector('#kix-current-user-cursor-caret');
// }

// const getCursorBbox = () => {
//     if (currentCursor != null) {
//         currentCursorBbox = currentCursor.getBoundingClientRect();
//     } else {
//         return;
//     }
// }

// const getXY = () => {
//     if (currentCursorBbox != null) {
//         x = Math.floor(currentCursorBbox.right);
//         y = Math.floor(currentCursorBbox.top);
//         console.log("x = ", x);
//         console.log("y = ", y);
//         return x, y; 
//     } else {
//         return;
//     }
// }

// const getRect = (x, y) => {
//     if (x == null || y == null) {
//         return;
//     }
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

//     if (!this.styleElement) {
//         styleElement = document.createElement("style");
//         styleElement.id = "enable-pointer-events-on-rect";
//         styleElement.textContent = [
//             ".kix-canvas-tile-content{pointer-events:none!important;}",
//             "#kix-current-user-cursor-caret{pointer-events:none!important;}",
//             ".kix-canvas-tile-content svg>g>rect{pointer-events:all!important; stroke-width:7px !important;}",
//         ].join("\n");

//         const parent = (document.head || document.documentElement)
            
//         if (parent !== null) {
//             parent.appendChild(this.styleElement);
//         }
//     }

//     this.styleElement.disabled = false;
//     const rect = document.elementFromPoint(x, y);
//     this.styleElement.disabled = true;

//     return rect;
// };

// const getCaretIndex = (rect, x, y) => {
    // const text = rect.getAttribute('aria-label');
    // const textNode = document.createTextNode(text);
    // const textElement = this.createTextOverlay(rect, text, textNode);

    // if (!text || !textElement || !textNode) return null;

    // let range = document.createRange();
    // let start = 0;
    // let end = textNode.nodeValue.length;

    // while (end - start > 1) {
    //     const mid = Math.floor((start + end) / 2);
    //     range.setStart(textNode, mid);
    //     range.setEnd(textNode, end);
    //     const rects = range.getClientRects();
    //     if (this.isPointInAnyRect(x, y, rects)) {
    //         start = mid;
    //     } else {
    //         if (x > range.getClientRects()[0].right) {
    //             start = end;
    //         } else {
    //             end = mid;
    //         }
    //     }
    // }

    // const caretIndex = start;
    // textElement.remove();
    // return caretIndex;
// }

// const createTextOverlay = (rect, text, textNode) => {
    // if (!rect || rect.tagName !== 'rect') return {};

    // const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    // const transform = rect.getAttribute('transform') || '';
    // const font = rect.getAttribute('data-font-css') || '';

    // textElement.setAttribute('x', rect.getAttribute('x'));
    // textElement.setAttribute('y', rect.getAttribute('y'));
    // textElement.appendChild(textNode);
    // textElement.style.setProperty('all', 'initial', 'important');
    // textElement.style.setProperty('transform', transform, 'important');
    // textElement.style.setProperty('font', font, 'important');
    // textElement.style.setProperty('text-anchor', 'start', 'important');

    // rect.parentNode.appendChild(textElement);

    // const elementRect = rect.getBoundingClientRect();
    // const textRect = textElement.getBoundingClientRect();
    // const yOffset = ((elementRect.top - textRect.top) + (elementRect.bottom - textRect.bottom)) * 0.5;
    // textElement.style.setProperty('transform', `translate(0px,${yOffset}px) ${transform}`, 'important');

    // return textElement;
// }

import DocsOverlay from './docs_overlay';
const docsOverlay = new DocsOverlay();

if (window.trustedTypes && window.trustedTypes.createPolicy) {
    window.trustedTypes.createPolicy('default', {
        createHTML: string => string,
        createScriptURL: string => string,
        createScript: string => string
    });
}

let textOverlay;

const updateOverlay = () => {
    if (docsOverlay != null) {
        textOverlay = docsOverlay.createOverlay();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let iframeLoaded = false;
    const observer = new MutationObserver(() => {
        if (!iframeLoaded) {
            let editingIFrame = document.querySelector("iframe[class*='docs-texteventtarget-iframe']");
            if (editingIFrame && editingIFrame.contentDocument) {
                console.log("loaded iframe");
                editingIFrame.contentDocument.addEventListener('keydown', function(event) {
                    if (event.code === 'Space') {
                        console.log("spacebar pressed");
                        updateOverlay();
                        getText();
                    }
                }, false);
                // editingIFrame.contentDocument.addEventListener('scroll', function(event) {

                // })
                iframeLoaded = true;
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

// document.addEventListener('DOMContentLoaded', function () {
//     let editingIFrame = document.querySelector("iframe[class*='docs-texteventtarget-iframe']");

//     if(editingIFrame != null) {
//         console.log("loaded iframe");
//         editingIFrame.contentDocument.addEventListener('keydown', function(event) {
//             if (event.code === 'Space') {
//                 console.log("spacebar pressed");
//                 // updateOverlay();
//             }
//         }, false);
//     };
// });

// setInterval(() => {
//     console.log("timeout")
//     getBbox();
// }, 10000);

// function getEditorBoundingBox() {
//     // Get the editor element
//     const editor = document.querySelector('.kix-appview-editor');
  
//     // Get the bounding box
//     const rect = editor.getBoundingClientRect();
  
//     // Return the coordinates and dimensions
//     console.log("x: ", rect.left, "y: ", rect.top, "width: ", rect.width, "height: ", rect.height);

//     // return {
//     //   x: rect.left,
//     //   y: rect.top,
//     //   width: rect.width,
//     //   height: rect.height
//     // };
//   }

console.log("docs_script -- version: 38");

// updateOverlay();





await new Promise(resolve => window.addEventListener('DOMContentLoaded', resolve));

// const contentFrame = document.querySelector('.docs-texteventtarget-iframe').contentDocument;

function getText() {
    console.log("getting text");
    const rects = document.querySelectorAll('div.kix-canvas-tile-content > svg > g > rect');
    console.log(Array.from(rects, r => r.ariaLabel).join('\n'));
    return Array.from(rects, r => r.ariaLabel).join('\n');
}

// function getSelection() {
//     const contentDiv = contentFrame.querySelector('div[aria-label="Document content"]');
//     contentDiv.dispatchEvent(new Event('copy'));
//     const nodes = contentDiv.firstChild?.children || [];
//     return Array.from(nodes, c => c.innerText).join('\n');
// }

// function insertText(text) {
//     for (let i=0; i < text.length; i++){
//         const keyEvent = new KeyboardEvent("keypress", {charCode: text.codePointAt(i)})
//         contentFrame.dispatchEvent(keyEvent);
//     }
// }

// window.docs_script = {getText}

let docContentWords = null;
let wordArray = [];

function getWords() {
    let docWords = getText().split(' ');

    docWords.forEach((word) => {
        const strippedWord = word.replace(/[^a-zA-Z0-9]+$/, '');
        wordArray.push(strippedWord);
    });

    console.log(wordArray);

    docContentWords = wordArray;

    // checkIfInDictionary();
}

// function checkIfInDictionary() {
//     if (docContentWords != null) {
//         docContentWords.forEach(word => {
//             chrome.runtime.sendMessage(VALID_EDITING_EXT_ID, { action: "checkWord", word: word }, function(data) {
//                 console.log("incorrect word: " + data.original);
//                 console.log("suggested corrections: " + data.suggestions);
//             });
//         });
//     };
// };



getWords();
























































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
