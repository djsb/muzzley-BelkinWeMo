## Muzzley-BelkinWeMo

This is a demo using Muzzley - http://www.muzzley.com - to interface with a Belkin WeMo switch using wemoNode framework;

### Purpose

This demo:
  * single purpose is to demonstrate how to interface with the Belkin WeMo using your smartphone through the cloud or locally;
  * it's up to you to have the creativity of new interacting scenarios;
  * you can create your own mobile interfaces (refer to muzzley.com documentation);
  * you might use Muzzley to create logic to switch on / off the WeMo without a smartphone interface (eg: trigger the switch based on some remote logic);

### Testing Environment

The demo was put together with the following hardware:
  * Belkin WeMo switch (locally configured on your Wifi Network) - you can extend this demo and use Muzzley to configure the WeMo device through the wemoNode framework;
  * Smartphone running Muzzley App (iOS or Android);
  * A raspberry pi or any other computer running node.js;

This demo was developed to support:
  * Muzzley human interface for the Internet of Things - http://www.muzzley.com/


### Getting started

Clone this demo from this git repo

  <pre><code>git clone https://github.com/djsb/muzzley-BelkinWeMo.git</code></pre>

### Usage

#### Installing Packages, using the dependencies listed in the current directory's package.json

    npm install

#### Configuring

This demo requires you to do 2 steps before using it:
  * have the Belkin WeMo connected to your WiFi network - don't worry, it will be auto detected;
  * create an unique App Token on http://www.muzzley.com
      1) register; 2) My Apps; 3) Create App and save the Generated Token for next step; 4) Edit Muzzley-BelkinWeMo.js file and change the TOKEN var;

  note: if you don't want a dynamic activity - the code you use to pair - you can setup a static activity on muzzley.com selfcare and add it to the Muzzley-BelkinWeMo.js

### TODO
Some ideas to extend this demo based on existing Muzzley API:
  * Access control based on user identification;
  * Support the first setup of the Belkin WeMo - where it is not already connected to the WiFi;
  * Create a custom interface using Muzzley Custom Virtual Interfaces for the smartphone;
  * Add a first running configuration interface;

### Credits
Thank you to:
  - Muzzley, for the IoT interface - http://www.muzzley.com
  - wemoNode framework - https://npmjs.org/~bgpaglia

This demo is general purpose. Check http://www.muzzley.com for further reference.