module.exports = {
  root: process.cwd() + '/public',
  port: 5000,
  logLevel: 'dev',
  staticOptions: {
    extensions: ['html'],
    maxAge: '31556926'
  }
}
