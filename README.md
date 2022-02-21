# Installation

Download this repository.
Inside the main folder, run the following command:

### `npm install`

to install all dependencies, then run the following command:

### `npm start`

to run the application.
The application should run on the 'http://localhost:3000/' url.

# Additional notes

Due to some CORS policy problems with https://jsonplaceholder.typicode.com, and relatively small Users database, i decided to use https://myfakeapi.com/ API,
as it doesn't cause problem with CORS and have better nickname suggestions.

Moreover, I also allowed myself to update all the packages that were stated inside package.json.

I decided that autocompletion will perform only if the typed part of a nickname fits to the beginning of a nickname. If You want to change this behavior,
and compare any part of the string, there is a need of changing second if-statement to '!== -1' from '=== 0' in the getAutocompleteNicknameList() function in
'src/functions/autocomplete.js'.
