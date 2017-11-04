var express = require('express');

var app = express();

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
  //var employeersFile = path.resolve(__dirname, 'employees.json');

  var employees = [
    {
      id: 1,
      firstName: 'Tom',
      lastName: 'Figness',
      position: 'admin', // Admin, Developer, Manager, Tester, HR,
      role: 'user', // User, Admin,
      experience: 26, // (in months),
      shortDescription: 'Kind of tricky mate',
      longDescription: 'Firstly...'
    },
    {
      id: 2,
      firstName: 'Ben',
      lastName: 'Boldon',
      position: 'developer',
      role: 'admin',
      experience: 6,
      shortDescription: 'Kind of tricky mate',
      longDescription: 'Firstly...'
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Velton',
      position: 'manager',
      role: 'user',
      experience: 1,
      shortDescription: 'Kind of tricky mate',
      longDescription: 'Firstly...'
    }
  ];

  try {
    // var fileContents = fs.readFileSync(employeersFile, 'utf8');
    // var employeers = JSON.parse(fileContents);

    // res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: employees, status: 0}));
  } catch (err) {
    res.send(JSON.stringify({error: err, status: 100}));
  }
})


app.listen(3000);
