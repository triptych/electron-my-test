const { app, BrowserWindow } = require('electron')

function createWindow () {
    // create the browser window
    let win = new BrowserWindow({
        width: 800,
        height: 600, 
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app
    win.loadFile('index.html')

    // open the devtools
    win.webContents.openDevTools()

    // emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

app.on('ready', createWindow)