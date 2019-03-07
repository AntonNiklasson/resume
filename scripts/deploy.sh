ssh root@95.85.43.196 <<'ENDSSH'
echo "1. Setting the workdir";
cd /var/www/cv.antonniklasson.se

echo "2. Fetching latest updates";
git fetch origin
git reset --hard origin/2.0

echo "3. Building docker image";
yarn docker:build

echo "4. Starting docker conatiner";
yarn docker:run
ENDSSH

