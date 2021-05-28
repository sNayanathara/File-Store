pragma solidity ^0.5.0;

import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
    string public name = "Dapp Token Farm";
    address public owner; 
    DappToken public dappToken;
    DaiToken public daiToken;

    address[] public stakers;
    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(DappToken _dappToken, DaiToken _daiToken) public {
        dappToken = _dappToken;
        daiToken = _daiToken;
        owner = msg.sender; //the one who deploy the contract. Sign the owner upon deployment
    }

    // Stake Tokens(investor deposit his Dais to the smart contract)
    function stakeTokens(uint _amount) public {
        //core task of the function-->transfer the dai tokens from the investors wallet to this smart contract
        //investor take dai tokens and send them to the token farm
        //while these dai tokens live in the token farm(digital bank) they will earn dapp tokens

        //Require amount greater than 0
        require(_amount > 0, "amount cannot be 0");


        //Transfer Mock Dai tokens to this contract for staking
        daiToken.transferFrom(msg.sender, address(this), _amount); 

        //Update staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        //Add user to stakers array only if they haven't staked already
        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        //Update staking status
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;

    }

    // Unstaking Tokens(Withdraw)
    function unstakeTokens() public {

        //Fetch staking balance
        //this function base on the amount staked into the app
        uint balance = stakingBalance[msg.sender];

        //Require amount greater than 0
        require(balance > 0, "staking balance cannot be 0");

        //Transfer Mock Dai tokens back to the user from the app 
        daiToken.transfer(msg.sender, balance); 

        // Reset the staking balance
        stakingBalance[msg.sender] = 0;

        //Update staking status
        isStaking[msg.sender] = false;

    }





    // Issuing Tokens(Earning Interests)
    function issueTokens() public {

        //only the owner must be able to call this function
        //because we must not let anyone else issue tokens
        require(msg.sender == owner, "caller must be the owner");


        //loop throug all the people who has staked inside the stakers array and issue them
        //issue tokens to all stakers
        for (uint i=0; i<stakers.length; i++) {
            address recipient = stakers[i];
            uint balance = stakingBalance[recipient];
            if(balance > 0) {
                dappToken.transfer(recipient, balance);
            }

        }

    }

}