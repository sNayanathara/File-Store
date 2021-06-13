import React, { Component } from 'react'
import dai from '../dai.png'

class Upload extends Component {

    render() {
        return (
            <div id="content" className="mt-3">

                <table className="table table-borderless text-muted text-center">
                    <thead>
                        <tr>
                            {/* <th scope="col">Staking Balance</th> */}
                            {/* <th scope="col">Reward Balance</th> */}
                            <th scope="col">Rental</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td>
                            {/* <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</td> */}
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
                                <label className="float-left"><b>Upload Files</b></label>
                                <span className="float-right text-muted">
                                    Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                                </span>
                            </div>
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    ref={(input) => { this.input = input }}
                                    className="form-control form-control-lg"
                                    placeholder="No files selected"
                                    required />
                                <div className="input-group-append">
                                    {/*  */}
                                    <button>
                                        {/* <div className="input-group-text"> */}
                                        <div className="btn btn-primary btn-block btn-sm">
                                            <img src={dai} height='32' alt="" />
                                            {/* &nbsp;&nbsp;&nbsp;mDAI */}
                                            &nbsp;&nbsp;&nbsp;BROWSE
                                        </div>
                                    </button>  
                                    {/*  */}
                                </div>
                            </div>
                            {/* <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button> */}
                            <button type="submit" className="btn btn-primary btn-block btn-lg">UPLOAD</button>
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

export default Upload;
