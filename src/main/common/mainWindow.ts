import { BrowserWindow } from 'electron';
import winPosition from './getWinPosition';

function mainWindowShowAndHide(mainWindow: BrowserWindow) {
  // const currentShow = mainWindow.isVisible() && mainWindow.isFocused();
  const currentShow = mainWindow.isVisible();
  if (currentShow) return mainWindow.hide();
  const { x: wx, y: wy } = winPosition.getPosition();
  mainWindow.setAlwaysOnTop(false);
  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.focus();
  mainWindow.setVisibleOnAllWorkspaces(false, {
    visibleOnFullScreen: true,
  });
  mainWindow.setPosition(wx, wy);
  mainWindow.show();
}

export { mainWindowShowAndHide };
