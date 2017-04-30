# mark

## How to set up
* Set up [react-native](https://facebook.github.io/react-native/docs/getting-started.html) for Android.
* Clone this repository.
    * `git clone https://github.com/megatricycle/mark.git`
* Install dependencies.
    * `cd mark`
    * `npm install`

## How to run
* Physically plug in your mobile device with a USB cable. Be sure it is set on developer mode.
* Reverse ports.
    * `adb reverse tcp:8081 tcp:8081`
* Start the react-native packager.
    * `npm start`
* Open another terminal. Install the app on your device.
    * `react-native run-android`
