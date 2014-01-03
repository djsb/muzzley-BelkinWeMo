/*
  Muzzley Demo interfacing wemoNode controlling framework.
  */

// CHANGE HERE
// Create your own app token in Muzzley selfcare - http://www.muzzley.com
var options = {
  token:'-CHANGE-ME-HERE'
//  activityId: '85c530'
};

// muzzley setup
var muzzley = require('muzzley-client');

// wemoNode setup
var WemoNode = require('wemonode');
var wemoNode = WemoNode.WemoNode();
wemoNode.setBindAddress("0.0.0.0");

// global object to store the discovered Belkin WeMo
var obj;

muzzley.connectApp(options, function(err, activity) {

  wemoNode.on("device_found", function (object) {
    if (object.deviceType == 'socket'){
      obj=object;
      console.log(' - Detected new Belkin WeMo device: ' + object.id);
    }
  }.bind(this));

  wemoNode.on("device_lost", function (object) {
  }.bind(this));

  wemoNode.on("state_changed", function (object) {
    console.log(" - Detected change state on device " + object.id + ". New state is: " + object.binarystate);
    obj = object;
  }.bind(this));

  wemoNode.startDiscovery();

  if (err) return console.log("err: " + err);

  console.log('\n - Open Muzzley app on your smartphone and enter the following code to pair: ' + activity.activityId);

  activity.on('participantJoin', function(participant) {
    console.log('\n - New user paired: ' + participant.name);

    participant.changeWidget('switch', {isOn: obj.binarystate}, function(err) {
      if (err) return console.log("err: " + err );
      console.log(' - Transforming user smartphone into a switch with status: ' + obj.binarystate);

      participant.on('quit', function() {
        console.log(' - User has quit');
      });

      participant.on('action', function(action) {
        console.log('\n - Setting Belkin WeMo to state: ' + action.v)
        wemoNode.sendCommand("socket_setbinarystate", obj, {"binarystate": action.v});

      });
    });
  });
});
