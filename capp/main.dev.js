/* eslint global-require: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow, ipcMain,dialog,BrowserView} from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import {generateRandomString} from './utils/date'
const os = require("os");
const fs = require("fs");
const path = require("path");

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow = null;
let workerWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};
/*Pdf settings*/
function pdfSettings() {
  var paperSizeArray = ["A4", "A5"];
  var option = {
      landscape: false,
      marginsType: 0,
      printBackground: false,
      printSelectionOnly: false,
      pageSize: paperSizeArray[0],
  };
return option;
}

/**
 * Add event listeners...
 */
ipcMain.on('print-pdf',function(event,content,fileName){
  let some= fileName;
  some=some.split('-');
  some.pop();
  let dir =app.getPath('home')+'/Documents/FormContent/'+some.join('');
  let path=dir+'/'+fileName.split('-').join('')+'.pdf';
  let view = new BrowserView()
  workerWindow.setBrowserView(view)
//view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
view.webContents.loadURL("data:text/html;charset=utf-8," + encodeURI(content))
  //window_to_PDF.loadURL("data:text/html;charset=utf-8," + encodeURI(content));
  view.webContents.on('did-finish-load', () => {
    view.webContents.printToPDF(pdfSettings(), function(err, data) {
      if (err) {
          //do whatever you want
          log.warn('cannot');
          return;
      }
      try{
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
      }
         if(fs.writeFileSync(path, data)){
         view.destroy();
         dialog.showMessageBox(mainWindow,{
           title:"Save Dialog Box",
           message:"Saved successfully in "+String(path),
           buttons:['Ok']
         });
         }
      }catch(err){
        log.warn('unable to save')
          //unable to save pdf..
      }
    })
  });
 
   
})
// when worker window is ready
app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });
  workerWindow = new BrowserWindow({show:false});

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
});
