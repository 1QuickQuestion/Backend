Backend
=======

## Getting started

1. Optionally Install Node Tools for Visual Studio 
1. git clone https://github.com/Xignal/Backend.git
1. cd ./Backend
1. npm install sails 
1. sails lift 
1. create a `config/local.js` config file with your DB settings, e.g.

```javascript
module.exports.connections = {
    
  someMongodbServer: {
        adapter: 'sails-mongo',
        host: 'locahost',
        port: 10001,
        user: '',
        password: '',
        database: ''
    }    
};
```

Hit F5 in Visual Studio if you want run and debug in the IDE.
