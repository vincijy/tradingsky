x

yarn build

docker build -t lsc_fe . -f docker_build/release

docker tag lsc_fe lianshucha/lsc_fe

docker push lianshucha/lsc_fe

# 得先登录
docker pull lianshucha/lsc_fe:latest

# 8085 -> 80
docker run --name lsc_fe -d -p 80:80 lianshucha/lsc_fe


# run remote
docker run --name pid_lsc_fe -d -p 80:80 lianshucha/lsc_fe