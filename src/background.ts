chrome.contextMenus.create({
  contexts: ['all'],
  onclick: closeOtherTabs,
  title: 'Close other tabs',
})

export function closeOtherTabs(
  _info: chrome.contextMenus.OnClickData,
  _tab: chrome.tabs.Tab,
) {
  chrome.tabs.query(
    { active: false, currentWindow: true },
    (tabs: chrome.tabs.Tab[]) => {
      chrome.tabs.remove(tabs.map(t => t.id as number))
    },
  )
}
