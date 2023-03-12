
import os, re
from datetime import datetime
from pprint import pprint

# 导入Fabric API:
from fabric.api import *

env.hosts = ['43.154.160.30'] 
env.user = "ubuntu"
env.passwords = {'ubuntu@43.154.160.30:22': 'Love53.291.368'}
env.port = 22

_TAR_FILE = 'data_backup.tar.gz'

# 服务器，临时文件夹
_REMOTE_TMP_TAR = '/tmp/{}'.format(_TAR_FILE)

# 服务器，数据库文件
_REMOTE_DATA_DIR = '/srv/backend_data'

def _now():
    return datetime.now().strftime('%y-%m-%d_%H.%M.%S')

project_tag = 'qklfe'
project_tag_with_datetime = project_tag + _now()
docker_org = 'lscnb'
dockerfile_path = './docker_build/release'
network = 'qkl'
img_tag = _now()

_pjoin = os.path.join

def _current_path():
    return os.path.abspath('.')



def mkdir():
    sudo('sudo mkdir {}'.format(_REMOTE_DATA_DIR))

def build():
    """
        打包命令, window 下可以用git bash 执行 
    """
    #包含的文件
    includes = ['./data']

    #不包含的文件
    excludes = []

    #执行本地的命令
    local('rm -f dist/{}'.format(_TAR_FILE))
    with lcd(os.path.abspath('.')):
        cmd = ['tar', '--dereference', '-czvf', './dist/{}'.format(_TAR_FILE)]
        cmd.extend(['--exclude={}'.format(ex) for ex in excludes])
        cmd.extend(includes)
        local(' '.join(cmd))

def upload():

    newdir = 'data_backup-{}'.format(datetime.now().strftime('%y-%m-%d_%H.%M.%S'))
    # 删除已有的tar文件:

    sudo('rm -f {}'.format(_REMOTE_TMP_TAR))
    # 上传新的tar文件:
    path = os.path.join('dist', _TAR_FILE)
    # put('dist/{}'.format(_TAR_FILE), _REMOTE_TMP_TAR)
    put(path, _REMOTE_TMP_TAR)

    # 创建新目录:
    with cd(_REMOTE_DATA_DIR):
        sudo('sudo mkdir {}'.format(newdir))

    # 将上传的文件解压到新目录:
    with cd('{}/{}'.format(_REMOTE_DATA_DIR, newdir)):
        sudo('sudo tar -xzvf {}'.format(_REMOTE_TMP_TAR))

    # 重置软链接:
    with cd(_REMOTE_DATA_DIR):
        sudo('rm -f data_backup')
        sudo(f'ln -s {newdir} data_backup')
        sudo(f'chown {env.user}:{env.user} data_backup')
        sudo(f'chown -R {env.user}:{env.user} {newdir}')

def download():
    newdir = '{}'.format(datetime.now().strftime('%y-%m-%d_%H.%M.%S'))
    to = '{}/backup/{}'.format(_current_path(), newdir)
    local('mkdir {}'.format(to))
    with cd(_REMOTE_DATA_DIR + '/data_backup'):
        _from = 'data'
        get(_from, to)

def docker_build():
    cmd = f'docker build -t {project_tag} . -f {dockerfile_path}'
    local(cmd)

def docker_push():
    cmds = [
        f'docker tag {project_tag} {docker_org}/{project_tag}:{img_tag}',
        f'docker push {docker_org}/{project_tag}:{img_tag}'
    ]
    for cmd in cmds:
        local(cmd)
        
def docker_run_local():
    cmd = f'docker run  --network qkl --name qklfe -d -p 443:443 -p 80:80 lscnb/qklfe'
    local(cmd)

def docker_run_remote():
    cmds = [
        f'docker stop {project_tag}',
        f'docker rm {project_tag}',
        f'docker pull {docker_org}/{project_tag}:{img_tag}',
        f'sudo docker run --network {network} --name {project_tag} -d -p 443:443 -p 80:80 lscnb/qklfe:{img_tag}'
    ]
    for cmd in cmds:
        sudo(cmd)
        
def deploy():
    # docker_build()
    docker_push()
    docker_run_remote()