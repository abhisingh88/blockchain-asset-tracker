var assetCount = 0;
$(document).ready(() => {
  // execut this function on page load
  renderPageContent();
});
function renderPageContent() {


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
  

console.log(AssetTrackerContract);


  AssetTrackerContract.methods.getAssetCount().call((error, response) => {
    if (error) console.log(error);
    else {
      assetCount = response;
      $("#count").html("Total " + response + " Assets");
      renderTable();
    }
  });

  function renderTable() {
    for (let i = 1; i <= parseInt(assetCount); i++) {
      AssetTrackerContract.methods.getAsset(i).call((error, response) => {
        if (error) console.log(error);
        else {
          let row =
            '<tr><th scope="row">' +
            i +
            "</th>" +
            "<td>" +
            response[0] +
            "</td>" +
            "<td>" +
            response[1] +
            "</td>" +
            "<td>" +
            response[2] +
            "</td>" +
            "<td>" +
            response[3] +
            "</td>" +
            "<td>" +
            response[4] +
            "</td></tr>";

          $("tbody").append(row);
        }
      });
    }
    $("#loading").hide();
  }
}

function createNewAsset() {
  let batchNo = "a";
  let name = "abhi";
  let desc = "something";
  let manufacturer = "me";
  let owner = "own";
  let status = "owner";

  console.log(batchNo);

  // send these values to the smart contract
  AssetTrackerContract.methods
    .createAsset(batchNo, name, desc, manufacturer, owner, status)
    .call()
    .then(result => {
      if (result.status === true) {
        alert("Success");
        console.log(result);
        $("#loading").show();
        $("tbody").html("");

        // render the table again
        renderPageContent();
        // clear the form
        $('input[name="batchNo"]').val("");
        $('input[name="name"]').val("");
        $('input[name="desc"]').val("");
        $('input[name="manufacturer"]').val("");
        $('input[name="owner"]').val("");
        $('input[name="status"]').val("");
      }
    });
  $("#exampleModal").modal("hide");
}

$("#exampleModal").on("shown.bs.modal", e => {
  // fill the modal form with fake data when modal is shown
  $('input[name="batchNo"]').val(faker.random.number().toString());
  $('input[name="name"]').val(faker.commerce.product());
  $('input[name="desc"]').val(faker.lorem.text());
  $('input[name="manufacturer"]').val(faker.company.companyName());
  $('input[name="owner"]').val(faker.company.companyName());
});

// Listen for events
// reload the ledger after any event

AssetTrackerContract.events.AssetTransfer((error, result) => {
  if (error) console.log(error);
  else {
    $("#count").html("");
    $("tbody").html("");
    renderPageContent();
  }
});
