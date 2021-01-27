#! /usr/bin/env node


// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Customer = require('./models/customer')
var Table = require('./models/table')
var Reservation = require('./models/reservation')
var TableInstance = require('./models/tableinstance')


var mongoose = require('mongoose');
const table = require('./models/table');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//var customers = []
var tables = []
var tableinstances = []
//var reservations = []




function tableCreate(seats, cb){
  tabledetail = {seats: seats}

  var table = new Table(tabledetail);

  table.save(function(err){
    if (err){
      cb(err, null)
      return
    }
    console.log('New Table: ' + table)
    tables.push(table)
    cb(null, table)
  });
}

function tableinstanceCreate(number, location, table, cb){
  tableinstancedetail = {number: number, location: location, table: table}

  var tableinstance = new TableInstance(tableinstancedetail);

  tableinstance.save(function(err){
    if (err){
      cb(err, null)
      return
    }
    console.log('New TableInstance: ' + tableinstance)
    tableinstances.push(tableinstance)
    cb(null, tableinstance)
  });
}





function createTables(cb){
  async.parallel([
    function(callback){
      tableCreate(2, callback)
    },
    function(callback){
      tableCreate(4, callback)
    },
    function(callback){
      tableCreate(6, callback)
    },
    function(callback){
      tableCreate(8, callback)
    }
  ],
   cb);
}

function createTableInstances(cb){
  async.parallel([
    function(callback){
      tableinstanceCreate(1, 'Window', tables[0], callback)
    },
    function(callback){
      tableinstanceCreate(2, 'Window', tables[0], callback)
    },
    function(callback){
      tableinstanceCreate(3, 'Wall', tables[0], callback)
    },
    function(callback){
      tableinstanceCreate(4, 'Window', tables[1], callback)
    },
    function(callback){
      tableinstanceCreate(5, 'Wall', tables[1], callback)
    },
    function(callback){
      tableinstanceCreate(6, 'Wall', tables[1], callback)
    },
    function(callback){
      tableinstanceCreate(7, 'Wall', tables[2], callback)
    },
    function(callback){
      tableinstanceCreate(8, 'Wall', tables[2], callback)
    },
    function(callback){
      tableinstanceCreate(9, 'Center', tables[2], callback)
    },
    function(callback){
      tableinstanceCreate(10, 'Center', tables[3], callback)
    },
    function(callback){
      tableinstanceCreate(11, 'Center', tables[3], callback)
    },
    function(callback){
      tableinstanceCreate(12, 'Center', tables[3], callback)
    },
  ],
   cb);
}



async.series([
    createTables,
    createTableInstances
],

// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+ tableinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



