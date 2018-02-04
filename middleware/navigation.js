export default ({ store, route }) => {
  store.commit('setroute', route.name)
}
