const fs = require('fs')
const core = require("@actions/core");
const outputs = JSON.parse(core.getInput("data"));

fs.writeFileSync("check_runs.json", outputs)
