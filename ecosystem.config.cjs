module.exports = {
  apps: [
    {
      name: "magister-landing-page",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3020",
      cwd: "/var/www/estude.institutomagisterpi.com.br",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3020,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3020,
      },
    },
  ],
};
