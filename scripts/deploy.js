ssh root@95.85.43.196 <<'ENDSSH'
cd /var/www/cv.antn.se;
git fetch origin
git reset --hard origin/master
yarn
yarn prod:build
ENDSSH
