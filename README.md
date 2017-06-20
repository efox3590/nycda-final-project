# nycda-final-project: Speech to text (speech recognition)
App transcribe audio streams into text that can display to the user or act upon as command input. 

# Installation Instructions
## Clone Project
``$ git clone [this_repo] && cd [this_repo]``

## Install Modules
``$ npm install``

## Run Server
``node server``

## Server
Navagate to http://localhost/3000 to launch

# How this works

### Note:
* The Microsoft Speech Service returns only one recognition phrase result for all recognition modes. There is a maximum limit of 15 seconds for any single utterance.

### Sample Responses
The payload result:
``{
  "RecognitionStatus": "Success",
  "DisplayText": "Remind me to buy cat food",
  "Offset": "1236645672289",
  "Duration": "1236645672289"
}``

It is defaulted to only display the ``DisplayText`` for this application.

# Web Dev Tools
* microsoft-speech-browser-sdk
* express
* Node js

# API Framework
Microsoft's WebSocket Speech Recognition API
https://azure.microsoft.com/en-us/

# FE Framework
HTML5 UP! https://html5up.net/


