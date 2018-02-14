# inDecision
An app that calls a Lyft to take you to a randomly selected restaurant or bar.


### Installation Instructions:

Install node modules:
<br>
`$ npm install `

Run development build:
<br>
`$ npm run heroku-postbuild`

Run App:
<br>
`$ npm start`



Sticking points:
  serviceWorker causing the page to be cached, even after the port was changed, and the server shut down. After terminating the serviceWorker, it would refresh again. The "registerServiceWorker" file needed to be removed from our react index.js file.

  Lyft's oauth requires the entire URL for the redirect to work.
