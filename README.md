# Code Audition for GameFlow Interactive

#### Interview demonstration exercise

#### By Holly Wilkalis

## Description

This is a one-state component with class listing and search/filter tools for a performing arts school.


## Process

I chose to use Angular2 for this project since it allowed some room for later expansion should I decide to continue using it for practice. I was also able to reuse some code from another recent project to save some setup time.

I determined that the primary user for this particular view would be current or prospective students who would be likely to be interested in narrowing down the list of current classes by the experience level, by type of class, or by the class day, and I designed the filters accordingly. (Since this was meant to be a one-state component, the search filters don't function at this time.) In setting up the course list, I tried to keep the data structure fairly granular to permit the addition of later search filters.

The master class list is stored in the app.component.ts file for reusability, and the edit-session component loops through this list to generate the course view shown. With this setup, the course data can be used elsewhere on the site fairly easily. For instance, it could also be connected to a back end course management interface where school staff (the other main users for this project) could add or update courses without having to touch the page code. 


## Setup/Installation Requirements

* In terminal, navigate to location where files will be saved
* To clone, run command $ git clone https://github.com/hollywilkalis/gameflow.git
* Change into project directory $ cd angular-tap-list
* Run command $ npm install
* To serve application, run $ ng serve and navigate to `http://localhost:4200/`


## Support and contact details

Holly Wilkalis, holly.wilkalis@gmail.com


## Technologies used

This project uses npm, Angular 2, Bootstrap 4.0, and some custom CSS.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.






### License: *MIT*

Copyright (c) 2018 **Holly Wilkalis**
