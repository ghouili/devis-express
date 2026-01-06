module.exports = {
  apps: [{
    name: 'taqeo',
    script: 'serve',
    // args: `-s ${process.env.BUILD_DIR || 'dist'} -l ${process.env.APP_PORT || 8000}`,
    args: `dist 8003 --spa --name taqeo`,
    cwd: '/var/www/taqeo',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 8003
    },
    out_file: `/var/www/taqeo/pm2-out.log`,
    error_file: `/var/www/taqeo/pm2-error.log`,
    merge_logs: true
  }]
}
