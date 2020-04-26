const { app, BrowserWindow } = require('electron')
const ipc = require('electron').ipcMain;

// 保持对window对象的全局引用
let win

//接收
ipc.on('news',function(data) { 
    //接收到消息后的执行程序
    console.log(data);
});

function createWindow () {
  // 创建浏览器窗口。
  win = new BrowserWindow({ width: 1080, height: 760 })

  // 然后加载应用的 index.html。
  win.loadFile('index.html')

  // 打开开发者工具
   win.webContents.openDevTools()
//win.setMenu(null)

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    win = null
  })
}


// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})