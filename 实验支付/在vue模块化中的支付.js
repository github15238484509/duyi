import Web3 from "web3"
// 前替你要安装Web3 版本为0.20.7
var wallet = {
    // regAbi 合约链的方法
    regAbi: [
        {
            "constant": true,
            "inputs": [],
            "name": "tokenTwoTransfers",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getReserves",
            "outputs": [
                {
                    "name": "_reserve0",
                    "type": "uint112"
                },
                {
                    "name": "_reserve1",
                    "type": "uint112"
                },
                {
                    "name": "_blockTimestampLast",
                    "type": "uint32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "mainAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "tokenOneTransfers",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "lastOrderId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "remarks",
                    "type": "string"
                }
            ],
            "name": "rechargeOne",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenOneAddress",
                    "type": "address"
                },
                {
                    "name": "amountOne",
                    "type": "uint256"
                },
                {
                    "name": "_tokenTwoAddress",
                    "type": "address"
                },
                {
                    "name": "amountTwo",
                    "type": "uint256"
                },
                {
                    "name": "remarks",
                    "type": "string"
                }
            ],
            "name": "rechargeTwo",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "remarks",
                    "type": "string"
                }
            ],
            "name": "withdrawToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "orderInfos",
            "outputs": [
                {
                    "name": "userAddress",
                    "type": "address"
                },
                {
                    "name": "tokenOneAddress",
                    "type": "address"
                },
                {
                    "name": "amountOne",
                    "type": "uint256"
                },
                {
                    "name": "tokenTwoAddress",
                    "type": "address"
                },
                {
                    "name": "amountTwo",
                    "type": "uint256"
                },
                {
                    "name": "functionName",
                    "type": "string"
                },
                {
                    "name": "remarks",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_subcoinAddress",
                    "type": "address"
                }
            ],
            "name": "setSubcoinAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "subcoinAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "userAddress",
                    "type": "address"
                },
                {
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawalCoin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ],
    usdtAbi: [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "unfreeze",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "freezeOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "freeze",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        }
    ],
    tempDBAddress: "0x55d398326f99059ff775485246999027b3197955",//fuc的的代币地址  tempDBAddress  代币地址 就是就是一个合约的总地址 就是合约的总地址
    dappAddress: "0x6ca3a4f0dd91a65b77e6746c0a0403534c23d048",// 合约交互地址  dappAddress 转账地址
    web3: null,
    walletAddress: null,//当前用户的地址
    Balance: null,//用户的余额
    authBalance: null,//用户授权额度
    // 登录
    getEnable: function () {
        if (window.ethereum) {
            if (!this.walletAddress) {
                window.ethereum.enable().then((res) => {
                    this.walletAddress = res[0];//复制用户的地址
                    //查询用户的余额
                    this.getTokenBalance()
                    //获取用户的授权余额
                    this.getauthBalance()
                    alert(`链接成功`)
                }).catch(e => {
                    alert(`你取消了链接了${e}`)
                });
            } else {
                alert(`已经连接了，账户地址为:${this.walletAddress}`)
            }

        } else {
            alert("Please install metamask Wallet");
        }
    },
    // 获取用户余额
    getTokenBalance() {
        if (window.web3) {
            this.web3 = new Web3(window.web3.currentProvider);

            let ethContract = this.web3.eth.contract(this.usdtAbi); //所有代币的abi可以通用
            let functionInstance = ethContract.at(this.tempDBAddress); //切换不同的代币地址
            let fromAddress = this.web3.eth.accounts[0];

            functionInstance.balanceOf(fromAddress, (err, res) => { //balanceOf 调用合约的方法查看余额
                if (!err) {
                    this.Balance = res.toNumber() / Math.pow(10, 18)
                } else {
                    alert(err)
                }
            });
        }
    },
    // 获取授权余额
    getauthBalance() {
        if (window.web3) {
            let ethContract = this.web3.eth.contract(this.usdtAbi);
            let contractInstance = ethContract.at(this.tempDBAddress);
            let fromAddress = this.web3.eth.accounts[0];

            contractInstance.allowance(fromAddress, this.dappAddress, (err, res) => {
                if (!err) {
                    this.authBalance = res.toNumber() / Math.pow(10, 18);//nums 就是你的授权额度
                } else {
                    alert(err)
                }
            });
        }
    },
    // 用户授权余额
    getApprove(RechargeMoney) {
        if (window.web3) {
            this.web3.eth.getGasPrice((err, res) => {
                console.log(res);
            });

            let ethContract = this.web3.eth.contract(this.usdtAbi);
            let contractInstance = ethContract.at(this.tempDBAddress);
            var fromAddress = this.web3.eth.accounts[0];

            var amount = 100000000 * Math.pow(10, 18);
            contractInstance.approve(
                this.dappAddress,
                amount,
                {
                    gas: 500000,
                    gasPrice: 5000000000,
                    from: fromAddress,
                },
                (err, result) => {
                    if (!err && result) {
                        this.recharge(RechargeMoney);
                    } else {
                        alert("用户授权余额取消了")
                    }
                }
            );
        }
    },
    //参数为充值的金额
    recharge(RechargeMoney) {
        // 充值的金额大于当前的授权余额就去授权
        if (RechargeMoney > this.authBalance) {
            this.getApprove(RechargeMoney)
            return
        }

        // RechargeId 就是你和后台交互的这个订单的id  所以你需要请求一个后端的接口 获取这个id ，你可以看看在那个地方用获取这个id
        var RechargeId = 132;


        if (window.web3) {

            let ethContract = this.web3.eth.contract(this.regAbi);
            let contractInstance = ethContract.at(this.dappAddress); //
            let fromAddress = this.web3.eth.accounts[0];

            var amount = RechargeMoney * Math.pow(10, 18);
            contractInstance.rechargeOne(
                this.tempDBAddress,
                amount,
                RechargeId,
                {
                    gas: 500000,
                    gasPrice: 5000000000,
                    from: fromAddress,
                    value: 0,
                },
                (err, result) => {
                    console.log(result);
                    if (!err) {

                    } else {
                        alert("用户取消了交易")
                    }
                }
            );
        }
    }
}

export default wallet