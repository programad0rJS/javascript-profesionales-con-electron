const { app, BrowserWindow } = require('electron');


let AppWindow;

function CrearVentana() {
    AppWindow = new BrowserWindow({
        width: 999,
        height: 999,
        /*minWidth: 300,
        minHeight: 300,
        center: true,
        show: false*/

    });


    AppWindow.on('closed', () => {
        AppWindow = null
    });

    AppWindow.loadFile('index.html');

    AppWindow.once('ready-to-show', () => {
        AppWindow.show();
    });

}

app.on('ready', CrearVentana)