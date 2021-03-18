const fs = require('fs')
const core = require("@actions/core");

f = fs.readFileSync("check_runs_orig.json", 'utf8')

core.setOutput("data", JSON.stringify(f, null, 2));
