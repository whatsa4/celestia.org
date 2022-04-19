import * as React from "react"
import Video from "../modules/video";
import Button from "../buttons/button";

import {videos} from "../../datas/resources/videos";
import Carousel from "react-multi-carousel";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide:3,
        partialVisibilityGutter: 140
    },
    laptop: {
        breakpoint: { max: 1340, min: 600 },
        items: 2,
        slidesToSlide:2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide:2
    },
    mobile: {
        breakpoint: { max: 920, min: 0 },
        items: 1,
        slidesToSlide:1
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
        <div className="carousel-button-group">
            <button className={rest.carouselState.currentSlide === 0  ? 'button button button-left disable' : 'button button button-left'} onClick={() => previous()}><i className={'icon-carousel-left'} aria-label={'prev'}/></button>
            <button className={rest.carouselState.currentSlide + rest.carouselState.slidesToShow === rest.carouselState.totalItems  ? 'button button button-right disable' : 'button button button-right'} onClick={() => next()}><i className={'icon-carousel-right'} aria-label={'next'}/></button>
        </div>
    );
};


export default class VideosSection extends React.Component {
    render() {
        return <section className={'videos-section mb-5'}>
            <h2 className={'with-decor mb-5 pb-4'}>Videos</h2>

            <div className={'section-inner'}>
                <Carousel responsive={responsive} swipable={true} draggable={true} infinite={false} containerClass={'multi-carousel'} customTransition={'1000ms all cubic-bezier(0.65, 0, 0.35, 1)'} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
                    { videos && videos.map(function(video,index){
                        return <Video key={index} image={video.image} title={video.title} url={video.url}/>

                    })}
                </Carousel>
            </div>
            <div className={'row justify-content-end mt-5'}>
                <div className={'col-auto'}>
                    <Button type={'external'} class={'external'} url={'https://www.youtube.com/channel/UCLlvAEzXBFZ-P3zS6BF2Bjg'} text={'View all videos on Youtube'}/>
                </div>
            </div>
        </section>
    }
}
