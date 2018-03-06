export default ({ store, route }) => {
  store.commit('closenav')
  if (route.name !== 'index') {
    store.commit('setroute', route.path.replace(/(\/[^/]*).*/, '$1').substring(1))
  } else {
    store.commit('setroute', 'index')
  }
}
