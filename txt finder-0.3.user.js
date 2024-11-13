// ==UserScript==
// @name         txt finder
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Automatically find and log message texts on OnlyFans
// @author       You
// @match        https://onlyfans.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function extractMessageTexts() {
        document.querySelectorAll('.b-chat__message__text').forEach((messageNode) => {
            // Variable to store the message type
            let messageType = "";
            // Check if the message has a specific class, like `m-message-content-bg` (text message) or `m-photo` (photo message)
            if (messageNode.classList.contains('m-message-content-bg')) {
                messageType = "Text message";
            } else if (messageNode.classList.contains('m-photo')) {
                messageType = "Photo message";
            }
            // Log the type of message
            if (messageType) {
                console.log(`${messageType} found:`, messageNode);
            }
            // Extract and log the text content if a <p> tag exists within the message element
            const messageTextElement = messageNode.querySelector('p');
            if (messageTextElement) {
                const messageText = messageTextElement.textContent;
                console.log("Message Text:", messageText);
            } else {
                console.log("No text content found in this message element.");
            }
        });
    }

    // Run the script when the page has finished loading
    document.addEventListener('DOMContentLoaded', extractMessageTexts());

})();
