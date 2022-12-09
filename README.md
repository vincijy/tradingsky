x

yarn build

docker build -t lsc_fe . -f docker_build/release

docker tag lsc_fe lianshucha/lsc_fe

docker push lianshucha/lsc_fe

# 得先登录
docker pull lianshucha/lsc_fe:latest

# local run
# 8085 -> 80
docker run --name lsc_fe -d -p 8085:80 lianshucha/lsc_fe


# run remote if first time 443 80都映射一下
sudo docker run --name pid_lsc_fe -d -p 443:443 -p 80:80 lianshucha/lsc_fe

# run remote if not first time
sudo docker stop pid_lsc_fe && sudo docker rm pid_lsc_fe &&  sudo docker run --name pid_lsc_fe -d -p 443:443 -p 80:80 lianshucha/lsc_fe


# 总结远程部署
sudo docker pull lianshucha/lsc_fe:latest && sudo docker stop pid_lsc_fe && sudo docker rm pid_lsc_fe &&  sudo docker run --name pid_lsc_fe -d -p 443:443 -p 80:80 lianshucha/lsc_fe