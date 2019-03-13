const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // e carrega index.html do app.
  win.loadFile('./dist/index.html')
}

app.on('ready', createWindow);