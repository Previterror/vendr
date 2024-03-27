import { Snack } from './models/Vendr.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  money = 0

  snacks = [
    new Snack({
      name: 'Snakers',
      price: 2.25,
      imgURL: 'https://em-content.zobj.net/source/skype/289/chocolate-bar_1f36b.png',
    }),
    new Snack({
      name: 'Dwux',
      price: 1.50,
      imgURL: 'https://em-content.zobj.net/source/skype/289/candy_1f36c.png',
    }),
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())