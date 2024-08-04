export default class DocsOverlay {
    constructor() {
        this.currentCursor = null;
        this.currentCursorBbox = null;
        this.currentX, this.currentY = null, null;
        this.rect = null;
        this.styleElement = null;
        this.text = null;
        this.textNode = null;
        this.overlay = null;
        this.caretIndex = null;
    }

    getCursor = () => {
        console.log("reached here 3");
        return document.querySelector('#kix-current-user-cursor-caret');
    }

    getCursorBbox = () => {
        if (this.currentCursor != null) {
            console.log("reached here 4");
            return this.currentCursor.getBoundingClientRect();
        } else {
            return null;
        }
    }

    getXY = () => {
        if (this.currentCursorBbox != null) {
            console.log("reached here 5");
            console.log("x: ", Math.floor(this.currentCursorBbox.right));
            console.log("y: ", Math.floor(this.currentCursorBbox.top));
            return [Math.floor(this.currentCursorBbox.right), Math.floor(this.currentCursorBbox.top)];
        } else {
            return null;
        }
    }

    // getRect = () => {
    //     if (this.currentX == null || this.currentY == null) {
    //         return null;
    //     } else {
    //         console.log("reached here 6");

    //     }
    // }

    getRect = () => {
        if (this.currentX == null || this.currentY == null) {
            return null;
        } else {
            // if (this.styleElement == null) {
                console.log("reached here 6");
                this.styleElement = document.createElement("style");
                this.styleElement.id = "enable-pointer-events-on-rect";
                this.styleElement.textContent = [
                    ".kix-canvas-tile-content{pointer-events:none!important;}",
                    "#kix-current-user-cursor-caret{pointer-events:none!important;}",
                    ".kix-canvas-tile-content svg>g>rect{pointer-events:all!important; stroke-width:7px !important;}",
                ].join("\n");

                const parent = (document.head || document.documentElement)
                
                console.log("reached here 6.1");

                if (parent !== null) {
                    parent.appendChild(this.styleElement);
                }
            // }

            console.log("reached here 6.2");

            this.styleElement.disabled = false;
            const rect = document.elementFromPoint(this.currentX, this.currentY);
            this.styleElement.disabled = true;

            console.log("reached here 6.3");
            console.log("rect: ", rect);
            return rect;
        }
    }

    // getCaretIndex = (rect, x, y) => {
    //     if (rect == null || x == null || y == null) {
    //         return null;
    //     } else {
    //         const text = rect.getAttribute("aria-label");
    //         const textNode = document.createTextNode(text);
    //         const textElement = this.createTextOverlay(rect, text, textNode);
        
    //         if (!text || !textElement || !textNode) return null;
        
    //         let range = document.createRange();
    //         let start = 0;
    //         let end = textNode.nodeValue.length;
        
    //         while (end - start > 1) {
    //             const mid = Math.floor((start + end) / 2);
    //             range.setStart(textNode, mid);
    //             range.setEnd(textNode, end);
    //             const rects = range.getClientRects();
    //             if (this.isPointInAnyRect(x, y, rects)) {
    //                 start = mid;
    //             } else {
    //                 if (x > range.getClientRects()[0].right) {
    //                     start = end;
    //                 } else {
    //                     end = mid;
    //                 }
    //             }
    //         }
        
    //         const caretIndex = start;
    //         textElement.remove();
    //         return caretIndex;
    //     }
    // }

    // createTextOverlay = (rect, text, textNode) => {
    //     if (!rect || rect.tagName !== "rect") return {};
    
    //     const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    //     const transform = rect.getAttribute("transform") || "";
    //     const font = rect.getAttribute("data-font-css") || "";
    
    //     textElement.setAttribute("x", rect.getAttribute("x"));
    //     textElement.setAttribute("y", rect.getAttribute("y"));
    //     textElement.appendChild(textNode);
    //     textElement.style.setProperty("all", "initial", "important");
    //     textElement.style.setProperty("transform", transform, "important");
    //     textElement.style.setProperty("font", font, "important");
    //     textElement.style.setProperty("text-anchor", "start", "important");
    
    //     rect.parentNode.appendChild(textElement);
    
    //     const elementRect = rect.getBoundingClientRect();
    //     const textRect = textElement.getBoundingClientRect();
    //     const yOffset = ((elementRect.top - textRect.top) + (elementRect.bottom - textRect.bottom)) * 0.5;
    //     textElement.style.setProperty("transform", `translate(0px,${yOffset}px) ${transform}`, "important");
    
    //     return textElement;
    // }

    // createTextOverlay = (rect) => {
    //     if (rect == null) {
    //         return null;
    //     } else {
    //         console.log("reached here 7");
    //         this.text = rect.getAttribute("aria-label");
    //         this.textNode = document.createTextNode(text);

    //         console.log("reached here 7.1");

    //         const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    //         const transform = rect.getAttribute("transform") || "";
    //         const font = rect.getAttribute("data-font-css") || "";

    //         console.log("reached here 7.2");
        
    //         textElement.setAttribute("x", rect.getAttribute("x"));
    //         textElement.setAttribute("y", rect.getAttribute("y"));
    //         textElement.appendChild(textNode);
    //         textElement.style.setProperty("all", "initial", "important");
    //         textElement.style.setProperty("transform", transform, "important");
    //         textElement.style.setProperty("font", font, "important");
    //         textElement.style.setProperty("text-anchor", "start", "important");
        
    //         rect.parentNode.appendChild(textElement);
        
    //         const elementRect = rect.getBoundingClientRect();
    //         const textRect = textElement.getBoundingClientRect();
    //         const yOffset = ((elementRect.top - textRect.top) + (elementRect.bottom - textRect.bottom)) * 0.5;
    //         textElement.style.setProperty("transform", `translate(0px,${yOffset}px) ${transform}`, "important");
    //         textElement.style.setProperty("fill", "red", "important");
        
    //         return textElement;
    //     }
    // }

    // getCaretIndex = (rect, x, y) => {
    //     if (rect == null || x == null || y == null) {
    //         return null;
    //     } else {
    //         if (this.text == null || this.textElement == null || this.textNode == null) {
    //             return null;
    //         } else {
    //             let range = document.createRange();
    //             let start = 0;
    //             let end = this.textNode.nodeValue.length;
            
    //             while (end - start > 1) {
    //                 const mid = Math.floor((start + end) / 2);
    //                 range.setStart(this.textNode, mid);
    //                 range.setEnd(this.textNode, end);
    //                 const rects = range.getClientRects();
    //                 if (this.isPointInAnyRect(x, y, rects)) {
    //                     start = mid;
    //                 } else {
    //                     if (x > range.getClientRects()[0].right) {
    //                         start = end;
    //                     } else {
    //                         end = mid;
    //                     }
    //                 }
    //             }
            
    //             const caretIndex = start;
    //             // textElement.remove();
    //             return caretIndex;
    //         }
    //     }
    // }

//     getCaretIndex(rect, x, y) {
//         const text = rect.getAttribute("aria-label");
//         const textNode = document.createTextNode(text);
//         const textElement = this.createTextOverlay(rect, text, textNode);

//         if (!text || !textElement || !textNode) return null;

//         let range = document.createRange();
//         let start = 0;
//         let end = textNode.nodeValue.length;

//         while (end - start > 1) {
//             const mid = Math.floor((start + end) / 2);
//             range.setStart(textNode, mid);
//             range.setEnd(textNode, end);
//             const rects = range.getClientRects();
//             if (this.isPointInAnyRect(x, y, rects)) {
//                 start = mid;
//             } else {
//                 if (x > range.getClientRects()[0].right) {
//                     start = end;
//                 } else {
//                     end = mid;
//                 }
//             }
//         }

//         const caretIndex = start;
//         textElement.remove();
//         return caretIndex;
//     }
    
//    createTextOverlay(rect, text, textNode) {
//         if (!rect || rect.tagName !== 'rect') return {};

//         const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//         const transform = rect.getAttribute("transform") || '';
//         const font = rect.getAttribute("data-font-css") || '';

//         textElement.setAttribute("x", rect.getAttribute("x"));
//         textElement.setAttribute("y", rect.getAttribute("y"));
//         textElement.appendChild(textNode);
//         textElement.style.setProperty("all", "initial", "important");
//         textElement.style.setProperty("transform", transform, "important");
//         textElement.style.setProperty("font", font, "important");
//         textElement.style.setProperty("text-anchor", "start", "important");

//         rect.parentNode.appendChild(textElement);

//         const elementRect = rect.getBoundingClientRect();
//         const textRect = textElement.getBoundingClientRect();
//         const yOffset = ((elementRect.top - textRect.top) + (elementRect.bottom - textRect.bottom)) * 0.5;
//         textElement.style.setProperty("transform", `translate(0px,${yOffset}px) ${transform}`, 'important');

//         return textElement;
//     }

//     isPointInAnyRect(x, y, rects) {
//         for (const rect of rects) {
//             if (x >= Math.floor(rect.left) && x <= Math.floor(rect.right) &&
//                 y >= Math.floor(rect.top) && y <= Math.floor(rect.bottom)) {
//                 return true;
//             }
//         }
//         return false;
//     }  

    createOverlay = () => {
        console.log("reached createOverlay");
        this.currentCursor = this.getCursor();
        this.currentCursorBbox = this.getCursorBbox();
        let xy = this.getXY();
        if (xy != null) { 
            this.currentX = xy[0];
            this.currentY = xy[1];
        }
        console.log("currentX: ", this.currentX);
        console.log("currentY: ", this.currentY);
        this.rect = this.getRect();
        // this.overlay = this.createTextOverlay(this.rect);
        this.caretIndex = this.getCaretIndex(this.rect, this.currentX, this.currentY);

        return this.overlay;
    }
}