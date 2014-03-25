module.exports = {
  ip : process.env.OPENSHIFT_NODEJS_IP || "localhost",
  port : process.env.OPENSHIFT_NODEJS_PORT || 4000,
  mongoUser : process.env.OPENSHIFT_MONGODB_DB_USERNAME || "admin",
  mongoPass : process.env.OPENSHIFT_MONGODB_DB_PASSWORD || "R8zNXjmZMS5A",
  mongoHost : process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1", 
  mongoPort : process.env.OPENSHIFT_MONGODB_DB_PORT || 27017, 
  appname : process.env.OPENSHIFT_APP_NAME || "shane"
} 