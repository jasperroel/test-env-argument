import os

f = open("check_runs.json", "w")
env = os.environ.copy()
f.write(env['CHECK_RUNS'])
f.close()
