
yarn build

docker build -t qklfe . -f docker_build/release

docker tag qklfe lscnb/qklfe

docker push lscnb/qklfe

# 得先登录
sudo docker pull lscnb/qklfe

# local run
# 8085 -> 80
 docker run  --network qkl --name qklfe -d -p 8085:80 lscnb/qklfe


# run remote if first time 443 80都映射一下
sudo docker run  --network qkl --name qklfe -d -p 443:443 -p 80:80 lscnb/qklfe

# run remote if not first time
sudo docker stop qklfe && sudo docker rm qklfe &&  sudo docker run --network qkl --name qklfe -d -p 443:443 -p 80:80 lscnb/qklfe


# 总结远程部署
sudo docker pull lscnb/qklfe:latest && sudo docker stop qklfe && sudo docker rm qklfe &&  sudo docker run --name qklfe -d -p 443:443 -p 80:80 lscnb/qklfe


# log
sudo docker logs -f --until=2s qklfe