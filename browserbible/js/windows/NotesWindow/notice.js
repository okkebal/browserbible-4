import { InfoWindow } from '../../ui/InfoWindow.js';

/**
 * Show a transient centered notice popup (non-blocking alert replacement)
 * @param {string} message - Text to display
 */
export function showNotice(message) {
  const notice = InfoWindow();
  notice.body.textContent = message;
  notice.on('hide', () => notice.destroy());
  notice.show().center();
}
