const { channels } = require('../../shared/constants');
// const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const { app, ipcMain, BrowserWindow } = require('electron');
// const path = require('path');
// const url = require('url');
// app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('remote-debugging-port', '5858');


let mainWindow;
app.on('ready', function () {

  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    allowRunningInsecureContent: true,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: false,
      sandbox: false,
      allowRunningInsecureContent: true,
      offscreen: false,
      webSecurity: false,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL('http://localhost:9001');

  // installExtension(REACT_DEVELOPER_TOOLS)
  //   .then((name) => console.log(`Added extension: ${name}`))
  //   .then((err) => console.log(`Error occurred: ${err}`));

});


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});


ipcMain.on(channels.APP_INFO, (event) => {
  event.sender.send(channels.APP_INFO, {
    appName: app.getName(),
    appVersion: app.getVersion(),
  })
});