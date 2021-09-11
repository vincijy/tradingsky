# fabfile.py
import os
from datetime import datetime
from pprint import pprint

# 导入Fabric API:
from fabric.api import *

# 将秘钥等放在外层的文件夹
os.sys.path.append(os.path.abspath(os.path.join('..', 'lsc_secrect')))
from fabfile_config import dev_config, prod_config

import os

_TAR_FILE = 'dist-www.tar.gz'

# 服务器，临时文件夹
_REMOTE_TMP_TAR = '/tmp/{}'.format(_TAR_FILE)

# 服务器，项目部署文件夹
_REMOTE_BASE_DIR = '/srv/lianshucha_fe'

_nginx = {
    'from': '{}/{}/{}/{}'.format(_REMOTE_BASE_DIR, 'www','conf', 'lianshucha.nginx.conf'),
    'to': '{}/{}'.format('/etc/nginx/conf.d', 'lianshucha.nginx.conf')
}

def set_env_prod():
    with open('fab_env.txt', 'w', encoding='utf-8') as f:
        f.write('prod')

def set_env_dev():
    with open('fab_env.txt', 'w', encoding='utf-8') as f:
        f.write('dev')

def get_env():
    try:
        with open('fab_env.txt', 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return ''

def pre_set_env():
    env_tag = get_env()
    if not env_tag:
        print('Please set env first')
        return
    
    if env_tag == 'dev':
        print('----------------')
        print('------DEV-------')
        
        env.user = dev_config['user']
        env.sudo_user = dev_config['sudo_user']
        env.hosts = dev_config['hosts']
        env.passwords = dev_config['passwords']

    elif env_tag == 'prod':
        print('----------------')
        print('------PROD------')
        env.user = prod_config['user']
        env.sudo_user = prod_config['sudo_user'] 
        env.hosts = prod_config['hosts']
        env.passwords = prod_config['passwords']
        
        env.use_ssh_config = True


pre_set_env()

def init():
    sudo('mkdir {}'.format(_REMOTE_BASE_DIR))

def build():
    """
        打包命令
    """
    #包含的文件
    includes = ['conf', 'build']

    #不包含的文件
    excludes = ['.*', '*.pyc', '*.pyo', "__pycache__", "*.js.map", "*.css.map"]

    #执行本地的命令
    # local('rm -f dist/{}'.format(_TAR_FILE))

    cmd = ['tar', '--dereference', '-czvf', './remote_dist/{}'.format(_TAR_FILE)]

    cmd.extend(['--exclude={}'.format(ex) for ex in excludes])
    cmd.extend(includes)
    local(' '.join(cmd))

def update_nginx_config():
    sudo('cat {} > {}'.format(_nginx['from'], _nginx['to']))


def restart():
   # #重启nginx服务器:
    with settings(warn_only=True): 
        sudo('nginx -c /etc/nginx/nginx.conf') 
        sudo('nginx -s reload')  

def deploy():

    newdir = 'www-{}'.format(datetime.now().strftime('%y-%m-%d_%H.%M.%S'))
    # 删除已有的tar文件:
    sudo('rm -f {}'.format(_REMOTE_TMP_TAR))
    # 上传新的tar文件:
    put('remote_dist/{}'.format(_TAR_FILE), _REMOTE_TMP_TAR)
    # 创建新目录:
    with cd(_REMOTE_BASE_DIR):
        sudo('mkdir {}'.format(newdir))

    # 将上传的文件解压到新目录:
    with cd('{}/{}'.format(_REMOTE_BASE_DIR, newdir)):
        sudo('tar -xzvf {}'.format(_REMOTE_TMP_TAR))

    # 重置软链接:
    with cd(_REMOTE_BASE_DIR):
        sudo('rm -f www')
        sudo('ln -s {} www'.format(newdir))
        sudo('chown root:root www')
        sudo('chown -R root:root {}'.format(newdir))
    restart();
   

def stop():
   # #重启Python服务和nginx服务器:
    with settings(warn_only=True):  
        sudo('nginx -s stop')
 
