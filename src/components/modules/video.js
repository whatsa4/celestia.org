import * as React from "react"
import Image from "../imageComponent";

export default class Video extends React.Component {
    render() {
        return <a href={this.props.url} target="_blank" rel="noreferrer">
            <div className="video">
                <div className={'image'}>
                    <Image alt={this.props.title} filename={this.props.image} />
                </div>
                <div className={'title'}>{this.props.title}</div>
                <div className="play-button mt-2"><i className="icon-play-button"/> Play</div>
            </div>
        </a>
    }
}
