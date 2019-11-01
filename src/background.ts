chrome.contextMenus.create({
    title: 'Close other tabs',
    contexts: ['all'],
    onclick: (_info, _tab) => {
      closeOtherTabs();
    },
});

function closeOtherTabs() {
  chrome.tabs.query({active: false, currentWindow: true}, tabs => {
    chrome.tabs.remove(tabs.map(t => t.id as number));
  });
}
