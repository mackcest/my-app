import React, { Component } from "react";

const convert = (vnd)=>{
    return vnd/24000;
}

class vndToUsd extends Component {
    render() {
        return (
            <div>
                <span style={{ margin: "10px" }}> VND </span>
                <input
                    onChange={(e) => {
                        const vnd = e.target.value;
                        const usd = convert(vnd);
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

// function USDtoVND(props) {
//     const convert = function(vnd){
//         return( vnd / 24000 );
//     }
//     return (
//         <div>
//             <span style={{margin: "10px"}}> VND </span>
//             <input
//                 onChange={(e)=>{
//                     const vnd = e.target.value;
//                     const usd = convert(vnd);
//                     props.onHandle({
//                         vnd,
//                         usd,
//                     })
//                 }}
//                 value = {props.value}
//             />
//         </div>
//     );
// }

// export default USDtoVND;
