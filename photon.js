// var Particle = require('particle-api-js');
var particle = new Particle();

var token;

particle.login({username: 'cortlandmorse@gmail.com', password: 'rubberwalrusprotectors'}).then(
  function(data) {
    token = data.body.access_token;
    console.log('Accessed token');
  },
  function (err) {
    console.log('Could not log in.', err);
  }
);

window.setTimeout(listMyDevices, 3000);

function listMyDevices() {
    var devicesPr = particle.listDevices({ auth: token });

    devicesPr.then(
        function(devices){
        console.log('Devices: ', devices);
    },
        function(err) {
            console.log('List devices call failed: ', err);
        }
    );

    // Get attributes of device

    var devicesPr = particle.getDevice({ deviceId: '3c0023000c47363433353735', auth: token });

    devicesPr.then(
        function(data){
            console.log('Device attrs retrieved successfully:', data);
        },
        function(err) {
            console.log('API call failed: ', err);
        }
    );


    setInterval(getVariable, 2000);
}



function getVariable() {
    var information2 = document.getElementById("info2");
    particle.getVariable({ deviceId: '3c0023000c47363433353735', name: 'temp', auth: token }).then(function(data) {
        console.log("Information Retrieved");
        information2.innerText = data.body.result;
        }, function(err) {
            console.log('An error occurred while getting attrs:', err);
        });

}
