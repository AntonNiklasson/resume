ssh root@95.85.43.196 <<'ENDSSH'
cd /var/www/cv.antonniklasson.se
git fetch origin
git reset --hard origin/2.0
yarn
yarn prod:build
ENDSSH

