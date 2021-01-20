- Go to https://www.raspberrypi.org and click Software to Download raspbian OS.
- I am using Raspberrypi 3 and 8 GB sd card
- I am suing Linux OS to install Raspbian to my RaspberryPi
- I wrote a bash script to speed up update process. Open the terminal and write 
      - nano update
      - and paste  
                     #!/bin/sh
                      sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y && sudo apt autoremove -y

      - for save and exit ctrl+x and y and enter

- For terminal installation dd bs=4M if=2020-12-02-raspios-buster-armhf-lite.img |pv| dd of=/dev/sdb conv=fsync
- pv for preview. If you get error, install pv by apt install pv -y
