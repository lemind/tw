var express = require('express');
var path = require('path');
var fs = require("fs");
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + './../dist'));

app.get('/', function (req, res) {
  res.send(JSON.stringify({}));
})

app.get('/employees', function (req, res) {
  try {
    var employees = getEmployees();

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: employees, status: 0}));
  } catch (err) {
    res.send(JSON.stringify({error: err, status: 100}));
  }
})

app.patch('/employee/:id', function (req, res) {
  var newEmployee = req.body.employee;
  var employeeId = req.params.id;

  try {
    var currentEmployees = getEmployees();

    var newEmployees = currentEmployees.map((_employee) => {
      if (_employee.id === newEmployee.id) {
        return newEmployee;
      } else {
        return _employee;
      }
    });

    saveEmployees(newEmployees);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: newEmployee, status: 0}));
  } catch (err) {
    res.send(JSON.stringify({error: err, status: 101}));
  }
})

app.delete('/employee/:id', function (req, res) {
  var employeeId = req.params.id;

  try {
    var currentEmployees = getEmployees();

    var newEmployees = currentEmployees.filter((_employee) => {
      return _employee.id != employeeId
    });

    saveEmployees(newEmployees);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: { 'id': employeeId }, status: 0}));
  } catch (err) {
    res.send(JSON.stringify({error: err, status: 102}));
  }
})

var getEmployees = function () {
  var employeersFile = path.resolve(__dirname, 'employees.json');
  var fileContents = fs.readFileSync(employeersFile, 'utf8');
  return JSON.parse(fileContents);
}

var saveEmployees = function (employees) {
  var employeersFile = path.resolve(__dirname, 'employees.json');
  var newFileData = JSON.stringify(employees);
  fs.writeFile(employeersFile, newFileData, function(err) {
    if(err) {
      throw {type: 'Writing error', message: 'Saving into file error'};
    }
  });
}

app.listen(3000);
