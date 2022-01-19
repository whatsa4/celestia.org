import * as React from "react"
import Lottie from "react-lottie-player";
import handleViewport from 'react-in-viewport';

class Advantage extends React.Component {
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
        return <div className={'advantage mb-5 pb-lg-5 pt-lg-4'}>
            <div className={'row'}>
                <div className={'col col-12 col-sm-4 pe-sm-3'} >
                    {this.getInViewPort() ? <Lottie animationData={this.props.animation} play loop={false}/> : <Lottie animationData={this.props.animation} loop={false}/>}
                </div>
                <div className={'col col-12 col-sm-8 ps-sm-3'}>
                    <div className={'title'}>{this.props.title}</div>
                    <div className={'text'}>{this.props.text}</div>
                </div>
            </div>
        </div>
    }
}

const AdvantageBlock = handleViewport(Advantage, { rootMargin: '-1.0px' });

export default AdvantageBlock;
