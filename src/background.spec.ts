import chrome from 'sinon-chrome'

import { expect } from 'chai'

const _global: any = global

describe('background.ts', () => {
  before(() => {
    _global.chrome = chrome
  })

  beforeEach(() => {
    chrome.flush()
  })

  it('should create a context menu', async () => {
    return import('./background').then(() => {
      expect(chrome.contextMenus.create.callCount).to.be.equal(1)
    })
  })

  after(() => {
    chrome.flush()
    delete _global.chrome
  })
})
