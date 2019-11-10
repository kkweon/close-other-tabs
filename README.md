# close-other-tabs

[![Build Status](https://travis-ci.com/kkweon/close-other-tabs.svg?branch=master)](https://travis-ci.com/kkweon/close-other-tabs)

<div align="center">
<img src="./assets/example.gif" width="80%">
</div>

"Close other tabs" disappeared since Chrome 78 canary build. So, I'm creating a new chrome extension to close all other tabs.

<div align="center">
<img src="./assets/screenshot.png" width="80%">
</div>

## BUILD

```
# npm install
npm run build
```

This command will create a directory **dist**, which can be loaded from [chrome://extensions](chrome://extensions).

## Install the extension from Chrome

1. Build the project by running `npm run build`
1. Go to **chrome://extensions**
1. Click **Load unpacked**
1. Point to **dist** directory

## BUILD zip file to publish

```
npm run zip
```

## References

<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
