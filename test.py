from web3 import Web3

w3 = Web3(Web3.HTTPProvider('http://10.100.2.44:8545'))

# Get information about the latest block
block = w3.eth.getBlock('latest')
print('latest', block['number'])
