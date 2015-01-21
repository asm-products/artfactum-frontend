/*
 * Stores are simple data buckets which manages data.
 */
 
var Store = Flux.createStore({
  data: null,
  setData: function (data) {
    this.data = data;
    this.emit('change');
  },
  actions: {
    'incoming-data': 'setData'
  }
});
var store = new Store();

/*
 * Dispatchers are simple action dispatchers for stores.
 * Stores handle the related action.
 */
var Dispatcher = Flux.createDispatcher({
  setData: function (data) {
    this.dispatch('incoming-data', data);
  },
  getStores: function () {
    return {increment: store};
  }
});

/*
 * Action Creators are simple controllers. They are simple functions.
 *  They talk to dispatchers. They are not required.
 */
var Actions = {
  setData: function (data) {
    Dispatcher.setData(data);
  }
};

// The data cycle.
store.onChange(function () {
  // End of data cycle.
  document.getElementById('result').innerText = store.store.data;
});

document.getElementById('dataChanger').onclick = function () {
  // Start data cycle:
  Actions.setData(Math.random());
};

