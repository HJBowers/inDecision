TO DO:
##### Login Page
  - [x] Lat and long as local storage (must be found before form submits)

##### Form
<b>Client side:</b>
  - [x] Categories (or term, but I think Categories takes multiple arguments)
  - [x] Distance (AKA radius on server side)
  - [x] Lat
  - [x] Long
  - [x] Price (each number represents dollar signs: 1=$, 2=$$, 3=$$$. So "1, 3" = "$, $$$")
  - [x] Rating (will not be used as a param, but as an internal filter once response object is received)

<b>Server side:</b>
  - [x] Limit (max is 50)
  - [x] Sort_by (best match)
  - [x] Open_now (cannot be used with open_at)
  - [ ] Open_at (30-40 minutes after current time -- for a later iteration of the app)

##### Yelp API Results
  <!-- - [ ] Filter by rating (only results that have matched ratings) -->
  - [x] Randomly pick one places from filtered results
  - [x] Pull business name, location
  - [ ] Improve search terms to be more accurate with restaurant + bar

##### Lyft API call
  - [ ] Ride request using lat and long
  - [ ] Ride status/arrival time
  - [ ] Driver name/car
  - [ ] Price

##### Decide page
  - [ ] Name of business
  - [ ] Name of driver/car
  - [ ] Arrival time
  - [ ] Cost of ride

##### Routes
  - [ ] Login page the page only accessible
  - [ ] Auth code/state isn't used until form is submitted (to allow page reset without using/losing token)

##### Misc
  - [ ] Refactor using Axios  --> Ask an SEP the pros and cons of fetch vs axios
  - [ ] Error Handling
  - [ ] Pull out components
  - [ ] Reorganize functions so they all happen in order once form is submitted
  - [ ] Clean up code
  - [ ] Add notes
  - [ ] Make detailed Readme
  - [ ] Change all API keys/secrets
  - [ ] Deploy
  - [ ] Have container to extend to end of page
