# How to install Raspbian on Raspberrypi

1. Go to https://www.raspberrypi.org and click Software to Download raspbian OS.
1. I am using Raspberrypi 3 and 8 GB sd card
1. I am suing Linux OS to install Raspbian to my RaspberryPi
1. I wrote a bash script to speed up update process. Open the terminal and write 
	* ```nano update```
    *and paste  
		```
		#!/bin/sh
		sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y && sudo apt autoremove -y 
		```

	* for save and exit ```ctrl+x and y and enter```
	* To run the script ```sudo sh update```
1. For terminal installation 
	* ```dd bs=4M if=2020-12-02-raspios-buster-armhf-lite.img |pv| dd of=/dev/sdb conv=fsync```
1. pv for preview. If you get error, install pv ```apt install pv -y```
