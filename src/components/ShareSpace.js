import React, { Component } from 'react'
import dai from '../dai.png'

class ShareSpace extends Component {

    render() {
        return (
            <div id="content" className="mt-3">

                <table className="table table-borderless text-muted text-center">
                    <thead>
                        <tr>
                            {/* <th scope="col">Staking Balance</th> */}
                            {/* <th scope="col">Reward Balance</th> */}
                            <th scope="col">Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td> */}
                            <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</td>
                        </tr>
                    </tbody>
                </table>

                <div className="card mb-4">

                    <div className="card-body">

                        <form className="mb-3" onSubmit={(event) => {
                            event.preventDefault()
                            let amount
                            amount = this.input.value.toString()
                            amount = window.web3.utils.toWei(amount, 'Ether')
                            this.props.stakeTokens(amount)
                        }}>
                            <div>
                                {/* <label className="float-left"><b>Stake Tokens</b></label> */}
                                <label className="float-left"><b>Share Space</b></label>
                                <span className="float-right text-muted">
                                    Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg">SHARE SPACE</button>
                            <div className="input-group mb-4">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <img src={dai} height='32' alt="" />
                                        &nbsp;&nbsp;&nbsp;Total Disk Space Shared
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    ref={(input) => { this.input = input }}
                                    className="form-control form-control-lg"
                                    placeholder={window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')}
                                    required />
                            </div>
                            {/* <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button> */}

                        </form>
                        <button
                            type="submit"
                            className="btn btn-link btn-block btn-sm"
                            onClick={(event) => {
                                event.preventDefault()
                                this.props.unstakeTokens()
                            }}>
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShareSpace;
