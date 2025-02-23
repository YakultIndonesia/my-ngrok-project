#!/bin/bash

# Pastikan server berjalan dulu
nohup node server.js &

# Jalankan Ngrok pada port 8080
ngrok http 8080
