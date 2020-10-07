# 2unify-app

**Cross-platform mobile app for 2unify.**

## Prerequisites

- I recommend watching the first 30 minutes of this tutorial. It goes over the configuration used for developing this app: https://www.youtube.com/watch?v=0-S5a0eXPoc&t=1567s
- Visual Studio Code: https://code.visualstudio.com/
- NodeJS (includes npm): https://nodejs.org/en/download/
- Android Studio (for Android Emulator): https://developer.android.com/studio
- Expo CLI: https://docs.expo.io/get-started/installation/
- Expo Android mobile app (via Google Play)

## Installation

1. Open project (git repo) folder in Visual Studio Code.
2. If not open by default, open Terminal (CTRL + `).
3. If using project for the first time, install all dependent node packages: `npm install`.
4. Start app via Expo: `npm start`.

- After this step, Expo Developer Tools will automatically open in Google Chrome. A scannable QR code should also appear in the Terminal of Visual Studio Code.

## Usage

There are 2 ways to access the 2unify app. The first way is to use an Android Emulator via Android Studio. The second way is to directly use it on an Android mobile device.

### Android Emulator

- Create a new Android Device Emulator via Android Studio's AVD Manager.
- Start the Android Emulator.
- Run the 2unify app on the Android Emulator, either from Expo Developer Tools in Google Chrome, or from Terminal in Visual Studio Code.

### Android Mobile Device

- Open Expo app on Android mobile device (can be installed from Google Play).
- Scan QR code available in Terminal of Visual Studio Code with Expo to run the 2unify app.

## Overview

This (frontend) app is built using React Native, and uses Redux for state management. The project is comprised of components, screens, and states. Components are the individual building blocks (i.e. buttons), which are composed together to create the various screens seen by users. There are 2 screens associated with this app. A simple `LandingScreen.js` with the 2unify text logo. This is the first screen that users will see upon opening the 2unify app. Afterwards, the `MainScreen.js` is displayed, which contains the `MainTuneButton.js`, `PowerOffButton.js`, `StopTuneButton.js`, and `Status.js` components. The conditional rendering of the buttons and status message are based on the `status` state. Changing this state will ultimately effect what is displayed in `MainScreen.js`.

## States

All states are currently defined in the Redux slice: `App.slice.js`. In fact, the only state defined is `status`. As mentioned above, changing the `status` state will affect what is displayed in `MainScreen.js`. Specifically, the `status` state controls the text displayed in the `Status.js` component, and also determines if `PowerOffButton.js` or `StopTuneButton.js` is rendered.

For more information on how to manage state with Redux, check out:

- Intro to Redux: https://redux.js.org/basics/basic-tutorial
- Redux Toolkit: https://redux.js.org/redux-toolkit/overview
- React Redux: https://react-redux.js.org/introduction/quick-start#:~:text=React%20Redux%20is%20the%20official,the%20store%20to%20update%20data.

## Next Steps

- Add `tunify-moving-background.mp4` as a video background to screens. Currently, the backgrounds for `MainScreen.js` and `LandingScreen.js` are static, using React Native's `ImageBackground` component.
- Connect the frontend to the backend.

## Contact

- Author and Maintainer: Joey Yang
- Email: joeyyang.ai@gmail.com
- GitHub: https://github.com/joeyjyyang
- LinkedIn: https://www.linkedin.com/in/joey-yang
