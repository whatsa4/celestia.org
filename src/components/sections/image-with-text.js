import * as React from "react"
import Image from "../imageComponent";
import Animation from "../modules/animation";
import Lottie from "react-lottie-player";
import handleViewport from "react-in-viewport";

class ImageWithText extends React.Component {
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
        return <section className={this.props.direction ? 'image-with-text '+this.props.direction : 'image-with-text'}>
            <div className={'row d-block d-lg-table'}>
                <div className={'d-block d-lg-table-cell align-middle col col-12 col-lg-6'}>
                    {this.props.animation && <Lottie play={this.getInViewPort()} renderer={'svg'} animationData={this.props.animation} loop={false}/>}
                    {this.props.image && <Image alt={this.props.title} filename={this.props.image} />}
                    {this.props.video && <Animation video={this.props.video} />}
                </div>
                <div className={'d-block d-lg-table-cell align-middle col col-12 col-lg-6'}>
                    <div className={'text'}>
                        <h4>{this.props.title}</h4>
                        {this.props.text}
                    </div>
                </div>
            </div>
        </section>
    }
}

const ImageWithTextBlock = handleViewport(ImageWithText, { rootMargin: '-1.0px' });

export default ImageWithTextBlock;
