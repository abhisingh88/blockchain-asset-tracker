var contractABI = null;
var contractAddress = null;


$.ajax({
  url: "../build/contracts/AssetTracker.json",
  async: false,
  dataType: "json",
  success: function(json) {
    // console.log(json);
  console.log(window.location.pathname),
    assignVariable(json);
  }
});


function assignVariable(data) {
  console.log(data);
  contractABI = data.abi;
  contractAddress = data.networks[5777].address;
  
  console.log(contractABI);
  console.log(contractAddress);
}

contractABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "AssetStore",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "batchNo",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "manufacturer",
        "type": "string"
      },
      {
        "name": "statusCount",
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
    "name": "assetCount",
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "manufacturer",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "status",
        "type": "string"
      }
    ],
    "name": "AssetCreate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "newOwner",
        "type": "string"
      }
    ],
    "name": "AssetTransfer",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_batchNo",
        "type": "string"
      },
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_description",
        "type": "string"
      },
      {
        "name": "_manufacturer",
        "type": "string"
      },
      {
        "name": "_owner",
        "type": "string"
      },
      {
        "name": "_status",
        "type": "string"
      }
    ],
    "name": "createAsset",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
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
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getAsset",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
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
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_newOwner",
        "type": "string"
      },
      {
        "name": "_status",
        "type": "string"
      }
    ],
    "name": "transferAsset",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAssetCount",
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
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_statusCount",
        "type": "uint256"
      }
    ],
    "name": "getStatus",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
contractAddress = "0x50a586014a21f3496816aBfCdcCd74B0C2CeDf94";


if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProviders("http://127.0.0.1:7545"));
}


web3.eth.defaultAccount = web3.eth.accounts[0];


var fromAddress = "0xb0B652611efE41D0FC9E0DDb9041c51779695222";


const AssetTrackerContract = new web3.eth.Contract(
  contractABI,
  contractAddress,
  { from: fromAddress }
);
