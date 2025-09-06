import { app, BrowserWindow } from 'electron';

const isDev =
    (
        Number.parseInt(process.env.ELECTRON_IS_DEV, 10) === 1 ||
        !app.isPackaged
    ) &&
    !process.env.ELECTRON_IS_PROD;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        //webPreferences: {
        //    preload: path.join(__dirname, 'preload.js'),
        //},
    });

    if (isDev) {
        mainWindow.loadURL('http://localhost:1234');
    } else {
        mainWindow.loadURL(new URL('../dist/index.html', import.meta.url).href);
    }

    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
