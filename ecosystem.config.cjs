// module.exports = {
//   apps: [{
//     name: 'traqeo',
//     script: 'serve',
//     // args: `-s ${process.env.BUILD_DIR || 'dist'} -l ${process.env.APP_PORT || 8000}`,
//     args: `dist 8003 --spa --name traqeo`,
//     cwd: '/var/www/traqeo',
//     instances: 1,
//     autorestart: true,
//     watch: false,
//     max_memory_restart: '500M',
//     env: {
//       NODE_ENV: 'production',
//       PORT: 8003
//     },
//     out_file: `/var/www/traqeo/pm2-out.log`,
//     error_file: `/var/www/traqeo/pm2-error.log`,
//     merge_logs: true
//   }]
// }

module.exports = {
  apps: [
    {
      name: "traqeo",
      script: "serve",
      cwd: "/var/www/traqeo",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",

      // ✅ PM2 serve is configured via these env vars (NOT PORT, NOT args)
      env: {
        NODE_ENV: "production",
        PM2_SERVE_PATH: "/var/www/traqeo/dist",     // change to /var/www/traqeo/build if CRA
        PM2_SERVE_PORT: 8003,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/var/www/traqeo/dist/index.html" // change accordingly
      },

      out_file: "/var/www/traqeo/pm2-out.log",
      error_file: "/var/www/traqeo/pm2-error.log",
      merge_logs: true
    }
  ]
};
