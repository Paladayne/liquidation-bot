module.exports = {
  apps: [
    {
      name: "liqud-bot",
      script: "./src/app.ts",
      watch: "false",
      interpreter: "node_modules/.bin/ts-node",
      max_memory_restart: "1G",
      max_restarts: 10,
      node_args: "--require=tsconfig-paths/register",
      env: {
        NODE_ENV: "production",
        NODE_ENDPOINT: "https://bsc-dataseed2.binance.org",
        MULTICALL_ADDRESS: "0x8BB95a1E0D9556997Ab9B56Fc3DE62B7110a95E8",
        ROUTER_ADDRESS: "0x168Ea9Cf517F29045098961423397dBC742cf264",
        SLEEP_TIME: "250",
        START_BLOCK: "6503236"
      }
    }
  ]
}
