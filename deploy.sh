#!/bash/bin

ssh -oStrictHostKeyChecking=no deploy@46.101.209.6 

rsync -r --delete-after /dist deploy@46.101.209.6:/var/www/iot-be 