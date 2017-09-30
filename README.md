# SHIELD_UI


Go to https://github.com/cgross/generator-cg-angular to install required componets (Getting Started)

Directory Layout 

app.less ....................... main app-wide styles
app.js ......................... angular module initialization and route setup
index.html ..................... main HTML file
Gruntfile.js ................... Grunt build file
/admin ......................... example admin module folder
  admin.js ..................... admin module initialization and route setup
  admin.less ................... admin module LESS
  /admin-directive1 ............ angular directives folder
    admin-directive1.js ........ example simple directive
    admin-directive1-spec.js.... example simple directive unit test
  /admin-directive2 ............ example complex directive (contains external partial)
    admin-directive2.js ........ complex directive javascript
    admin-directive2.html ...... complex directive partial
    admin-directive2.less ...... complex directive LESS
    admin-directive2-spec.js ... complex directive unit test
  /admin-partial ............... example partial
    admin-partial.html ......... example partial html
    admin-partial.js ........... example partial controller
    admin-partial.less ......... example partial LESS
    admin-partial-spec.js ...... example partial unit test
/search ........................ example search component folder
  my-filter.js ................. example filter
  my-filter-spec.js ............ example filter unit test
  /search-partial .............. example partial
    search-partial.html ........ example partial html
    search-partial.js .......... example partial controller
    search-partial.less ........ example partial LESS
    search-partial-spec.js ..... example partial unit test
/service ....................... angular services folder
    my-service.js .............. example service
    my-service-spec.js ......... example service unit test
    my-service2.js ............. example service
    my-service2-spec.js ........ example service unit test
/img ........................... images (not created by default but included in /dist if added)
/dist .......................... distributable version of app built using grunt and Gruntfile.js
/bower_component................ 3rd party libraries managed by bower
/node_modules .................. npm managed libraries used by grunt


Creating components -
yo cg-angular:directive my-awesome-directive
yo cg-angular:partial my-partial
yo cg-angular:service my-service
yo cg-angular:filter my-filter
yo cg-angular:module my-module
yo cg-angular:modal my-modal

