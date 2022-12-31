image_version=`date +%Y%m%d%H%M`;
 echo $image_version;
 # cd vitepressimage
 git pull --rebase origin master;
 sudo docker stop vue2docker;
 sudo docker rmi -f vitepressimage;
 sudo docker build -t vitepressimage .;
 sudo docker images;
 sudo docker login;
 docker run -p 10002:80 -d --name vue2docker vitepressimage:latest;
 docker container list
  sudo docker logs vue2docker;
 #删除build过程中产生的镜像    
 #sudo docker image prune -a -f
  sudo docker rmi $(docker images -f "dangling=true" -q)
