self.addEventListener('install', (event) => {

})

self.addEventListener('activate', (event) => {

})

self.addEventListener('fetch', (event) => {

})

self.addEventListener('message', (event) => {

})

console.log("service worker -- version: 1");











// if (navigator.serviceWorker) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker
//             .register('/service_worker.js')
//             .then(reg => console.log('Service Worker Registered'))
//             .catch(err => console.log(
//                   `Service Worker Installation Error: ${err}}`));
//     });
// };

// var cacheName = 'kidspell-cache';
// var cacheAssets = [

// ];
  
// self.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open(cacheName)
//         .then(cache => {
//             console.log(`Service Worker: Caching Files: ${cache}`);
//             cache.addAll(cacheAssets)
//                 .then(() => self.skipWaiting())
//         })
//     );
// });

// self.addEventListener('activate', e => {
//     console.log('Service Worker: Activated');
//     e.waitUntil(
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(
//                     cache => {
//                         if (cache !== cacheName) {
//                             console.log('Service Worker: Clearing Old Cache');
//                             return caches.delete(cache);
//                         }
//                     }
//                 )
//             )
//         })
//     );
// });
  
// self.addEventListener('fetch', e => {
//     console.log('Service Worker: Fetching');
//     e.respondWith(
//         fetch(e.request)
//         .then(res => {
//             const resClone = res.clone();
//             caches.open(cacheName)
//                 .then(cache => {
//                     cache.put(e.request, resClone);
//                 });
//             return res;
//         }).catch(
//             err => caches.match(e.request)
//             .then(res => res)
//         )
//     );
// });

// Import the Docs API client library.
// const docs = require("google-apps-script").Docs;

// Get the current tab's document ID.
// const documentId = chrome.tabs.activeTab.document.id;

// Get the document's content as JSON.
// const response = await docs.documents().get(documentId).execute();

// Parse the JSON object.
// const content = JSON.parse(response.content);

// Do something with the content.
// console.log(content);

// var authToken = null;

// chrome.identity.getAuthToken({ interactive: true }, (accessToken) => {
//     console.log(accessToken);
//     authToken = accessToken
    // getDocumentContent("1n7N_WFHrqxCwgwctzlq2oFPcIKAdAsq7m_tB4hf1cMw");
// });

// export { getAuthToken };

// async function getAuthToken() {
//     await chrome.identity.getAuthToken({ interactive: true }, (accessToken) => {
//         console.log(accessToken);
//         return(accessToken);
//         // getDocumentContent("1n7N_WFHrqxCwgwctzlq2oFPcIKAdAsq7m_tB4hf1cMw");
//     });
// }

// async function getDocumentContent(documentId) {
//     let result;
//     let url = `https://docs.googleapis.com/v1/documents/${documentId}`

//     try {
//         await fetch(`https://docs.googleapis.com/v1/documents/${documentId}`, {
//             method: "GET",
//             headers: {
//                 'Authorization': `Bearer ${authToken}`
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             result = data.body
//             result = data;

            // const docContent = JSON.parse(data);

            // result = docContent;
  
            // Extract the text content from the parsed object
        //     const textContent = docContent.reduce((acc, val) => {
        //         if (val.paragraph && val.paragraph.elements) {
        //         const elements = val.paragraph.elements;
        //         for (let i = 0; i < elements.length; i++) {
        //             if (elements[i].textRun) {
        //             acc += elements[i].textRun.content;
        //             }
        //         }
        //         }
        //         result = acc;
        //     }, '');
//         })
//         .catch(function(error) {
//             result = error;
//         });
//     } catch(error) {
//         result = error;
//     }



//     console.log(result);
//     return(result)
// }



// function loadGoogleAPI() {
//     const script = document.createElement('script');
//     script.src = 'https://apis.google.com/js/api.js';

//     script.onload = function() {
//         gapi.load('client', function() {
//             gapi.client.init({
//                 apiKey: chrome.runtime.getManifest().oauth2.api_key,
//                 clientId: chrome.runtime.getManifest().oauth2.client_id,
//                 discoveryDocs: ['https://docs.googleapis.com/$discovery/rest?version=v1'],
//                 scope: chrome.runtime.getManifest().oauth2.scopes.join(' ')
//             });
//         });
//     };

//     document.head.appendChild(script);
// }

// loadGoogleAPI();



// chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
//     if (request.action === 'getTabUrl') {
//         let [tabs] = await chrome.tabs.query({ active: true, currentWindow: true });
//         sendResponse({ url: tabs[0].url });
//             // sendResponse({ progress: "working on it..." });
//         // });
//     };
//     // return true;
// });


// const manifest = chrome.runtime.getManifest();

// var accessToken = null;
// var refreshToken = null;

// const clientID = manifest.oauth2.client_id;
// const scopes = manifest.oauth2.scopes.join(' ');
// const redirectURL = chrome.identity.getRedirectURL("index.html");
// const authURL = "https://accounts.google.com/o/oauth2/v2/auth?" +
//                 `&client_id=${encodeURIComponent(clientID)}` +
//                 "&access_type=offline" +
//                 "&response_type=code" +
//                 "&nonce=" +
//                 `&redirect_uri=${encodeURIComponent(redirectURL)}` +
//                 `&scope=${encodeURIComponent(scopes)}`;




// let authURL = 'https://accounts.google.com/o/oauth2/v2/auth';
// const redirectURL = chrome.identity.getRedirectURL("auth");
// const redirectURL = "https://" + chrome.runtime.id + ".chromiumapp.org";
// const encodedRedirectURL = encodeURIComponent(chrome.identity.getRedirectURL(""));
// const redirectURL = "https://www.google.com/"
// const tokenURL = 'https://oauth2.googleapis.com/token';
// const clientId = manifest.oauth2.client_id;
// const scope = manifest.oauth2.scopes.join(' ');
// const encodedScope = encodeURIComponent(manifest.oauth2.scopes[0]);


// const auth_params = {
//     client_id: manifest.oauth2.client_id,
//     redirect_uri: redirectURL,
//     response_type: 'code',
//     access_type: 'offline',
//     scope: manifest.oauth2.scopes,
// };




// const clientId = 'YOUR_CLIENT_ID';
// const clientSecret = 'YOUR_CLIENT_SECRET';
// const redirectUri = 'YOUR_REDIRECT_URI';
// const scope = 'https://www.googleapis.com/auth/your_scope';
// const tokenUrl = 'https://oauth2.googleapis.com/token';


// let authURL = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectURL)}&scope=${encodeURIComponent(scope)}&response_type=code`;
// let authURL = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scope}&response_type=code`;
// let authURL = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectURL)}&scope=${encodeURIComponent(scope)}&response_type=code`;
// let authURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=${encodeURIComponent(scope)}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectURL)}`;
// let authURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=${encodedScope}&client_id=${clientId}&redirect_uri=${encodedRedirectURL}`;
// let authURL = `https://accounts.google.com/o/oauth2/v2/auth?scope=${encodeURIComponent(scope)}&access_type=offline&response_type=code&redirect_uri=${encodeURIComponent(redirectURL)}&client_id=${clientId}`


// const manifest = chrome.runtime.getManifest();

// var accessToken = null;
// var refreshToken = null;
// var expiresIn = null;

// const clientID = manifest.oauth2.client_id;
// const clientSecret = manifest.oauth2.client_secret;
// const scopes = manifest.oauth2.scopes.join(' ');
// const redirectAuthURL = chrome.identity.getRedirectURL("auth?&");
// const tokenURL = "https://oauth2.googleapis.com/token";
// const authURL = "https://accounts.google.com/o/oauth2/v2/auth?" +
//                 `&client_id=${encodeURIComponent(clientID)}` +
//                 "&access_type=offline" +
//                 "&response_type=code" +
//                 "&nonce=" +
//                 `&redirect_uri=${encodeURIComponent(redirectAuthURL)}` +
//                 `&scope=${encodeURIComponent(scopes)}`;

// const getNewTokens = async () => {
//     if (accessToken == null && refreshToken == null) {
//         // let authToken;

//         // await chrome.identity.getAuthToken({ interactive: true }, (accessToken) => {
//         //     console.log("AuthToken: ", accessToken);
//         //     authToken = accessToken;
//         // });

//         // console.log("Redirect URL: ", redirectURL);
//         // console.log("Scopes: ", scopes);

//         await chrome.identity.launchWebAuthFlow({url: authURL, interactive: true}, async (responseURL) => {
//             // (console.log("responseURL: ", responseURL))
//             let urlParams = new URLSearchParams(responseURL);

//             // for (const [key, value] of urlParams.entries()) {
//             //     console.log(`${key}, ${value}`);
//             //   }

//             let authorizationCode = urlParams.get('code');
//             // console.log("authorizationCode: ", authorizationCode);

//             if (authorizationCode) {
//                 const tokenReqData = {
//                     code: authorizationCode,
//                     client_id: clientID,
//                     client_secret: clientSecret,
//                     redirect_uri: encodeURIComponent(redirectAuthURL),
//                     grant_type: 'authorization_code'
//                 };

//                 console.log("tokenReqData: ", tokenReqData);

//                 await fetch(tokenURL, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded'
//                     },
//                     body: new URLSearchParams(tokenReqData)
//                 })
//                 .then(response => response.json())
//                 .then(data => {
                    
//                     console.log("tokenData: ", JSON.stringify(data));
                    

//                     accessToken = data.access_token;
//                     refreshToken = data.refresh_token;
        
//                     console.log('Access Token: ', accessToken);
//                     console.log('Refresh Token: ', refreshToken);
//                 })

//             } else {
//                 console.log("Error retrieving authorization code in getNewTokens()");

//             };
//         })

//     } else {


//     }

// }





// getNewTokens();



































// const VALID_EDITING_EXT_ID = "ocnjkingnoccghefojojhknfnpmegmnc";

// const GOOGLE_DOCS_SCRIPT = {
//     id: VALID_EDITING_EXT_ID,
//     matches: ["*://docs.google.com/*"],
//     allFrames: false,
//     runAt: "document_start",
//     world: "MAIN",
//     js: ["docs_script_temp.js"],
// };

// // /**
// //  * Checking if Google Chrome.
// //  */
// const registerScripting = async () => {
//     try {
//         if (typeof browser !== "undefined") {
//             await browser.scripting.registerContentScripts([GOOGLE_DOCS_SCRIPT])
//                 .then(console.log("registration complete"));
//         } else {
//             console.log("reached here 0");
//             await chrome.scripting.registerContentScripts([GOOGLE_DOCS_SCRIPT])
//                 .then(console.log(chrome.scripting.getRegisteredContentScripts()));
//         }
//     } catch (err) {
//         console.error(`Failed to register content scripts: ${err}`);
//     }
// }

// registerScripting();



























































// getting dictionary

var dictionary = {};

fetch('../resources/dictionary.txt')
    .then(response => response.text())
    .then(words => {
        dictionary = new Set(words.split('\n'))
    });


// //to review 


//Dictionary helper function
// function set_up_dictionary(text){
//     text.split(/\r?\n/).forEach(element => dictionary[element] = true);
//     console.log(dictionary);
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         chrome.tabs.sendMessage(
//             tabs[0].id, 
//             {
//                 todo: "set_dictionary", 
//                 dictionary: dictionary
//             }
//         );
//     }); 
// }








/**
 * Dictates all functions to occur on extension activation.
 */
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    await chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url) {
            setGoogleWorkspaceIDs(tab.url);
        } else {
            setGoogleWorkspaceIDs(null);
        };
    });
});

/**
 * Dictates all functions to occur on tab changes.
 */
chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.active && change.url) {
        setGoogleWorkspaceIDs(tab.url);
    } else {
        setGoogleWorkspaceIDs(null);
    };
});

/**
 * Dictates all functions to occur when focus returns to a Chrome window.
 */
// chrome.windows.onFocusChanged.addListener(async () => {
//     await chrome.tabs.get(activeInfo.tabId, (tab) => {
//         if (tab.url) {
//             setGoogleWorkspaceIDs(tab.url);
//         } else {
//             setGoogleWorkspaceIDs(null);
//         };
//     });
// });


// processing extension authentication

var authToken = null;

/**
 * Retrieves and sets the chrome.identity auth token every time it is called and prompts user
 * login if required.
 */
const getAuthToken = async () => {
    await chrome.identity.getAuthToken({ interactive: true }, (accessToken) => {
        console.log("AuthToken: ", accessToken);
        authToken = accessToken;
    });
};









getAuthToken();










// parsing URL for Google Workspace IDs

var currentURL = null;
var docID = null;
var spreadsheetID = null;
var sheetID = null
var presentationID = null;
const docRegEx = new RegExp("/document/d/([a-zA-Z0-9-_]+)");
const spreadsheetRegEx = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)");
const sheetRegEx = new RegExp("[#&]gid=([0-9]+)");
const presentationRegEx = new RegExp("/presentation/d/([a-zA-Z0-9-_]+)");

/**
 * Takes the active tab's URL and sets Google Workspace ID from the URL or resets IDs to null.
 */
const setGoogleWorkspaceIDs = (currentURL) => {
    if (currentURL == null) {
        docID = null;
        spreadsheetID = null;
        sheetID = null
        presentationID = null;
        console.log("docID: " + docID);
        docContentWords = null;
    } else if (currentURL.match(docRegEx) != null) {
        docID = currentURL.match(docRegEx)[1];
        spreadsheetID = null;
        sheetID = null;
        presentationID = null;
        console.log("docID: " + docID);
        // console.log("spreadsheetID: " + spreadsheetID)
        // console.log("sheetID: " + sheetID)
        // console.log("presentationID: " + presentationID)
    } else if (currentURL.match(spreadsheetRegEx) != null) {
        spreadsheetID = currentURL.match(spreadsheetRegEx)[1];
        docID = null;
        presentationID = null;
        if (currentURL.match(sheetRegEx) != null) {
            sheetID = currentURL.match(sheetRegEx)[1];
        };
        // console.log("docID: " + docID);
        // console.log("spreadsheetID: " + spreadsheetID)
        // console.log("sheetID: " + sheetID)
        // console.log("presentationID: " + presentationID)
    } else if (currentURL.match(presentationRegEx) != null) {
        presentationID = currentURL.match(presentationRegEx)[1];
        docID = null;
        spreadsheetID = null;
        sheetID = null;
        // console.log("docID: " + docID);
        // console.log("spreadsheetID: " + spreadsheetID)
        // console.log("sheetID: " + sheetID)
        // console.log("presentationID: " + presentationID)
    } else {
        docID = null;
        spreadsheetID = null;
        sheetID = null
        presentationID = null;
        console.log("docID: " + docID);
        docContentWords = null;
        // console.log("spreadsheetID: " + spreadsheetID)
        // console.log("sheetID: " + sheetID)
        // console.log("presentationID: " + presentationID)
    };
};

var docContentWords = null;

async function getDocumentContent() {
    let result = null;
    if (authToken != null && docID != null) {
        let url = `https://docs.googleapis.com/v1/documents/${docID}`
        try {
            await fetch(url, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            })
            .then(response => response.json())
            .then(data => {

                var docContent = data.body.content;
            
                // // Extract pure text from google doc
                // const textContent = docContent.reduce((acc, val) => {
                //   if (val.paragraph && val.paragraph.elements) {
                //     const elements = val.paragraph.elements;
                //     for (let i = 0; i < elements.length; i++) {
                //       if (elements[i].textRun) {
                //         acc += elements[i].textRun.content;
                //       }
                //     }
                //   }
                //   return acc;
                // }, '');

                // // Do something with the text content
                // console.log(textContent);

                // var textArray = [];
            
                // docContent.forEach((content) => {
                //     if (content.paragraph && content.paragraph.elements) {
                //         const elements = content.paragraph.elements;
                //         elements.forEach((element) => {
                //             if (element.textRun) {
                //                 textArray.push(element.textRun.content);
                //             }
                //         });
                //     }
                // });
                
                // console.log(textArray);

                var wordArray = [];
            
                docContent.forEach((content) => {
                    if (content.paragraph && content.paragraph.elements) {
                        const elements = content.paragraph.elements;
                        elements.forEach((element) => {
                            if (element.textRun) {
                                const words = element.textRun.content.split(' ');
                                words.forEach((word) => {
                                    const strippedWord = word.replace(/[^a-zA-Z0-9]+$/, '');
                                    wordArray.push(strippedWord);
                                });
                            }
                        });
                    }
                });

                console.log(wordArray)

                docContentWords = wordArray;
            })
            .catch(error => {
                console.error("Error caught in getDocContent: ", error);
            });
        } catch(error) {
            console.error("Error caught in getDocContent: ", error);
        }};
};



function checkIfInDictionary() {
    if (docContentWords != null) {
        docContentWords.forEach(word => {
            if (!dictionary.has(word.toUpperCase())) {
                const url = `https://cast.boisestate.edu/test/splchk.php?word=${word}&max=5`
                fetch(url, {
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => {
                    console.log("incorrect word: " + data.original)
                    console.log("suggested corrections: " + data.suggestions)
                });
            };
        });
    };
};




// setInterval(getDocumentContent, 10000);
// setInterval(checkIfInDictionary, 5000);



// document.addEventListener('keydown', function(event) {
//     if (event.keyCode === 32) {
//         getDocumentContent();
//     };
// });










































// export { authToken, docID, spreadsheetID, sheetID, presentationID };