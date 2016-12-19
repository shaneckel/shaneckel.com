module.exports = {
  ip : process.env.OPENSHIFT_NODEJS_IP || "localhost",
  port : process.env.OPENSHIFT_NODEJS_PORT || 4000,
  appname : process.env.OPENSHIFT_APP_NAME || "shane"
}
