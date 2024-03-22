import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/options.css';
 
const popup = (
    <div className="container" id="container">
        <div className="header">
            <h1 id="header"> Hello World!</h1>
        </div>
        <div className="tempBody">
            <p>
                Hello again!
            </p>
        </div>
    </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(popup);