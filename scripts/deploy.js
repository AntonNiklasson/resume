#! /usr/bin/env node

const exec = require("ssh-exec")

const user = "root"
const host = "95.85.43.196"
const path = "/var/www/cv.antonniklasson.se"
const branch = "2.0"

const script = `
	cd ${path};

	git checkout ${branch};
	git fetch origin;
	git reset --hard origin/${branch};

	yarn
	yarn prod:build
`

;(async () => {
  await exec(script, `${user}@${host}`).pipe(process.stdout)
})()
