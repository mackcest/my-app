import React, { Component } from "react";

const convert = (usd)=>{
    return usd*24000;
}

class vndToUsd extends Component {
    render() {
        return (
            <div>
                <span style={{ margin: "10px" }}> USD </span>
                <input
                    onChange={(e) => {
                        const usd = e.target.value;
                        const vnd = convert(usd);
                        this.props.onHandle({
                            vnd,
                            usd,
                        });
                    }}
                    value={this.props.value}
                />
                
            </div>
        );
    }
}

export default vndToUsd;