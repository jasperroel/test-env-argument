import os

f = open("check_runs.json", "w")
f.write(os.environ['CHECK_RUNS'])
f.close()
