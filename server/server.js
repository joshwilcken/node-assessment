const express = require('express'),
      app = express(),
      usersCtrl = require('./controllers/usersCtrl'),
      bodyParser = require('body-parser'),
      port = 3000

app.use(bodyParser.json())





// Endpoints:
app.get('/api/users', usersCtrl.allUsers);
app.get('/api/users/:id', usersCtrl.userid);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.notAdmins);
app.get('/api/user_type/:type', usersCtrl.getByType);
app.put('/api/users/:id', usersCtrl.updateUser);
app.post('/api/users', usersCtrl.addUser);
app.delete('/api/users/:id', usersCtrl.deleteUser);










app.listen(port, () => console.log(`Listening on ${port}`))
