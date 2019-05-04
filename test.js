console.log('hello electorn');

const electorn = require('electron')
const app = electorn.app;
const BrowserWindow = electorn.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

function createWindow() { 
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join('build', 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => { 
    if (process.platform !== 'drawin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

