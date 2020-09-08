cd '/root/lucy-homepage' || exit
git pull

# deploy frontend portion
cd '/root/lucy-homepage' || exit
npm install
npm run build
sudo rm -rf /var/www/html/lucy/
sudo cp -r build/ /var/www/html/lucy/
sudo service nginx reload
