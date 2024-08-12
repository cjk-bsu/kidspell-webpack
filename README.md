# Kidspell Chrome Extension

## An application to help kids with spelling! Developed by the CAST team at Boise State University.

## Overview

###

## Setting Up the Development Environment
### 1. Clone this project into a local directory from its main repository.

### 2. In the terminal, use the `$ npm init` command in the the main  project directory to initiate npm package management with the following specifications:
- package name: default
- version number: default or as appropriate
- git repository: leave blank
- keywords: leave blank
- license: default (MIT) or as appropriate

    #### Press <kbd>Enter</kbd> to select `yes` and complete initialization.

### 3. Also in the main project directory, install necessary module and package dependencies with all but react and react-dom as dev dependencies.
- #### Packages
    - react
    - react-dom
    - webpack
    - webpack-cli
    - html-webpack-plugin
    - copy-webpack-plugin
    - webpack-merge
    - @babel/core
    - babel-loader
    - @babel/preset-env
    - @babel/preset-react
    - style-loader
    - css-loader
    - file-loader

    #### The following terminal commands can be utilized to install the above dependendies:

    To install react:
    
        $ npm install react react-dom

    <br />

    To install webpack:

        $ npm install webpack webpack-cli html-webpack-plugin copy-webpack-plugin webpack-merge --save-dev

    <br />

    To install babel:

        $ npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

    <br />

    To install additional necessary dependencies:

        $ npm install style-loader css-loader file-loader --save-dev

    <br />

### 4. Generate a distribution file to load for testing or publish to the web store following the steps as detailed in the [Generating a Distribution File](#generating-a-distribution-file) section below.

<br />

### 5. On [Google's Cloud Console](https://console.cloud.google.com/), update the existing OAuth 2.0 Client ID Credentials to the recognize the newly generated Chrome Extension ID or create new OAuth 2.0 Client ID Credentials and update the current Client ID in the `manifest.json` file.

#### <ins>**UPDATE EXISTING OAuth 2.0 CLIENT CREDENTIALS**</ins>

1. #### Open the previously created, applicable OAuth 2.0 Client ID in the editing pane.

2. #### Change the Item ID to reflect the new Chrome Extension ID.
    
    This Chrome Extension ID can be found in `Details` tab of the loaded Chrome Extension on the `My Extensions` page in Google Chrome and is  generated once the `dist` directory of an unpacked extension is loaded. More on generating said directory is below.

3. #### Press <kbd>SAVE</kbd> to keep the changes and continue using the same Client ID credentials, no changes to the `manifest.json` file required.

#### However, if generating a new extension instance (e.g. if the original extension instance is not owned by the user's Google Account) or publishing on the Chrome Web Store, the following process will need to be followed to generate new Client ID Credentials and update them in the `manifest.json` file, locally only.

#### <ins>**CREATING NEW OAuth 2.0 CLIENT CREDENTIALS**</ins>

1. #### Create new OAuth Client ID.
    - #### Type: Chrome Extension
    - #### Name: User Choice
    - #### Item ID: Chrome Extension ID 

        As above, this Chrome Extension ID can be found in `Details` tab of the loaded Chrome Extension on the `My Extensions` page in Google Chrome and is  generated once the `dist` directory of an unpacked extension is loaded. More on generating said directory is below.

    - #### <ins>**IF PUBLISHING To Google Chrome Web Store:**</ins> 

        App ownership can be verified to the applicable Google account hosting the Chrome Extension, once published.

    - #### Press <kbd>SAVE</kbd> to generate the new credentials.

2. #### Update existing Client ID in `manifest.json` file.

    Replace the string in the `client_id` section under the `oauth2` header of the `manifest.json` file with the Client ID generated after the step above.

    <ins>**NOTE:**</ins> A new distribution file will need to be generated after updating the OAuth 2.0 Client ID for the extension to be functional.

<br />

### After following the steps above, the Chrome Extension `dist` directory should be ready for testing or publishing, provided it is complete and functional.

<br />

## Generating a Distribution File

### Utilizing Webpack to export all packages and source code files allows two methods for creating distribution files that can be uploaded for testing or published for download. The following command will list both available types of run commands:

    $ npm run

### Running either command listed will generate a usable `dist` directory within the primary home project directory that can then be uploaded and distributed.

### To generate a development version of the extension that will provide error messages with greater details and further feedback for troubleshooting and errorhandling, the following command should be run:

    $ npm run watch

### To generate a production version of the extension with simplified, more obfuscated code base and pared down error messages for final deployment and publishing, run the following command:

    $ npm run build

### Either command will need to be re-run after any alterations or edits are made to the source code and the `dist` directory will have to be reuploaded to reflect those changes in a web browser. Re-running the build command will completely overwrite the previously generated destination `dist` folder. The previous version of the directory will be lost but can be regenerated by reverting back to the code state as it was when it was generated.

### <ins>**NOTE:**</ins> Running the latter, full build command will generate a more reliable, more stable, implementable operating version of the extension.

### <ins>**IMPORTANT:**</ins> Because Webpack is used to export all packages and source code files once they are compiled as vanilla JS files, all package, file, variable, class, and path references must match the post-export, output `dist` directory schema. That is to say, for example, despite the relative file paths between `manifest.json` and `/src` files in the original project directory, the path references must be written in the code, pre-export, to reflect their location, post-export, in the final `dist` directory. As stated, this includes export settings in the Webpack config files, all inter-file references, etc.