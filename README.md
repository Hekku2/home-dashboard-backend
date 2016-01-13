# Backend for angular-sailsjs-boilerplate

This frontend code is used on [home-dashboard](https://github.com/Hekku2/home-dashboard)

## Installation
First of all you have to install npm, node.js / io.js and sails to your box. Installation instructions can be 
found [here](http://sailsjs.org/get-started).

After that make sure that you have all necessary components installed by running following commands in your shell:

```
npm --version
node --version
sails --version
```

And after that you can run actual backend install by following command in source root folder:

```
npm install
```

## Configuration
Backend needs some configurations before you can actually run it properly. Although you can skip this section if you
want to, in this case sails will use its defaults to run application. 

There is an example of backend configuration file on following path:

```
/config/local_example.js
```

Just copy this file to ```/config/local.js``` and make necessary changes to it. Note that this ```local.js``` file is 
in ```.gitignore``` so it won't go to VCS at any point.

## Application start
You can start this backend application as the same way as any sails / node application. This can be done by following
commands:

```
sails lift
```
OR
```
node app.js
```

This will start sails.js server on defined port. By default this is accessible from http://localhost:1337 url. If you 
try that with your browser you should only see page that contains ```Not Found message``` on it. This means that 
everything is ok.

## License
The MIT License (MIT)

Based on tarlepp's [angular-sailsjs-boilerplate-backend](https://github.com/tarlepp/angular-sailsjs-boilerplate-backend)
