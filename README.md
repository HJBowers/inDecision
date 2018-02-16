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

  Front end/backend language errors:
    import vs require and the trickle-down effect (all subfiles must have the same language)


Interesting questions to ask SEPs:
  Which is more efficient for manipulating data: frontend vs backend (i.e. filtering yelp results to pull a single business from 50)
  Scaleability: as the number of users increase, the data should be processed on the front end so that the server isn't slowed down by lots of calls. However, it means the user will have to wait slightly longer for all their data to be received, especially if they have a slow connection.

  User has fast connection = send more data
  User has slow connection / fewer users = process data server side
