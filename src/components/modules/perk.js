import * as React from "react"
import Lottie from "react-lottie-player";
import handleViewport from "react-in-viewport";

class Perk extends React.Component {
    getInViewPort() {
        const { inViewport, enterCount, leaveCount } = this.props;
        let counter = enterCount - leaveCount;
        if (inViewport && counter === 1) {
            return true;
        }else {
            return false;
        }
    }
    render() {
        return <div className={'perk'}>
            {this.getInViewPort() ? <Lottie animationData={this.props.animation} play loop={false}/> : <Lottie animationData={this.props.animation} loop={false}/>}
            <div className={'title'}>{this.props.title}</div>
        </div>
    }
}


const PerkBlock = handleViewport(Perk, { rootMargin: '-1.0px' });

export default PerkBlock;
