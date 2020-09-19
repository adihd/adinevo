const exec = require('child_process').exec;
const path = require("path");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


const url = require("url");
const isDev = require("electron-is-dev");

console.log('==============')
let mainWindow
let child

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, `../build/index.html`),
        protocol: "file:",
        slashes: true
      })
  );
  // mainWindow.loadURL(
  //   isDev
  //     ? "http://localhost:3000"
  //     :  url.format({
  //         pathname: path.join(__dirname, `/public/index.html`),
  //         protocol: "file:",
  //         slashes: true
  //       })
  // );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    child.kill()
    app.quit()
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});


child = exec(path.join(__dirname, `../build/test.exe`));

