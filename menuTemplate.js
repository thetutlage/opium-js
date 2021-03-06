const { app } = require('electron')

const menuTemplate = [
  {
    label: 'View',
    submenu: [
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()

  menuTemplate.unshift({
    label: name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  })
}

module.exports = menuTemplate
