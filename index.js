const { app, BrowserWindow } = require('electron')

if (require("electron-squirrel-startup")) {
    app.quit();
}

function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        backgroundColor: '#282828',
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.webContents.setUserAgent("Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.77 Large Screen Safari/534.24 GoogleTV/092754")
    win.loadURL('https://youtube.com/tv')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
