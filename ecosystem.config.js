module.exports = {
  apps: [
    {
      name: "liqud-bot",
      script: "./src/app.ts",
      watch: "false",
      args: [
        "https://bsc-dataseed2.binance.org",
        "0x67464d0947CfCA965A1ac2dded97b8C3c9921865",
        "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb",
        "1000"
      ],
      interpreter: "node_modules/.bin/ts-node",
      max_memory_restart: "1G",
      max_restarts: 10,
      node_args: "--require=tsconfig-paths/register",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}
