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

	docker build -t resume .;
	docker stop resume-container || true;
	docker rm resume-container || true;
	docker run --rm -d -p 8001:80 --name resume-container resume;
`

;(async () => {
  await exec(script, `${user}@${host}`).pipe(process.stdout)
})()
