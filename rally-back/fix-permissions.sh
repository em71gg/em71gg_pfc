#!/bin/sh
echo "Fixing permissions..."
mkdir -p storage/logs bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
chmod -R ug+rwx storage bootstrap/cache
