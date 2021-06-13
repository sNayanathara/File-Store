import React, { Component } from 'react'

class Main extends Component {
   
    render() {
        return (
            <div id="content" className="mt-3">
                <div className="card mb-4">
                    <div className="card-body">
                        <button className="btn btn-primary btn-block btn-lg" value={1} onClick={this.props.clickBtn}>
                            UPLOAD FILE
                         </button>
                        <button className="btn btn-primary btn-block btn-lg" value={2} onClick={this.props.clickBtn}>
                            SHARE SPACE
                          </button>
                    </div>
                </div>

            </div>

        );
    }

}

export default Main;
