[Web Poker Planning](http://tehsis.com.ar/pokerplanning/)![travis](https://travis-ci.org/tehsis/webplanningcards.svg?branch=master)
=
A set of cards for a [poker planning](https://en.wikipedia.org/wiki/Planning_poker) session.

Building instructions
-

In order to build this app, you must be sure to have the grunt-cli and bower globally installed 
on your system:

```bash
$npm install -g grunt-cli bower
```

Then fetch the dependencies

```bash
$npm install
$bower install
```

Finally, build:

```bash
$grunt
```

The generated files are located at www/ just open www/index.html to get the app running.

Development notes for future releases
- 

* The layout is handled by css' flexboxes. This is not well supported yet and fails on recently older versions of chrome and firefox.

* The set of cards can be customized at /src/javascripts/providers/cards/ In future versions would be nice to have lot of card's sets to allow users to change them.

* It would be nice if you can handle 'planning sessions' and sycronize the estimations with Trello.
