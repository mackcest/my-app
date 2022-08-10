import React from "react";

const withHoverOpacity = (ImageComponent) =>{
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                opacity : 1,
            };
            // bind this
            this.onMouseLeave = this.onMouseLeave.bind(this);
            this.onMouseEnter = this.onMouseEnter.bind(this);
        }
        // Duoc goi khi di chuot vao
        onMouseEnter = () =>{
            this.setState ( {opacity : 0.5});
        }
        onMouseLeave = ()=> {
            this.setState({ opacity :1 });
        }
        render(){
            return (
                <div 
                    style={{ opacity:  this.state.opacity}}
                    onMouseEnter ={ this.onMouseEnter}
                    onMouseLeave = {this.onMouseLeave}
                >
                    <ImageComponent />
                </div>
            );
        };
    }
}


const  Image1 = (props) =>{
    return <img src="https://mqflavor.com/wp-content/uploads/2018/06/15.huongtaoxanh.jpg" alt = "apple"/>
}
const  Image2 = (props) =>{
    return <img src="https://dacsancamvinh.net/wp-content/uploads/2015/06/cong-dung-qua-cam.jpg" alt = "orange"/>
}

const ImageWithHoverOpacity1 = withHoverOpacity(Image1);
const ImageWithHoverOpacity2 = withHoverOpacity(Image2);

export { ImageWithHoverOpacity1, ImageWithHoverOpacity2};