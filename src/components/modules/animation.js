import * as React from "react"

export default class Animation extends React.Component {
    render() {
        return <div className={'animation'}>
            <video autoPlay={true} controls={false} playsInline={true} preload='auto' muted>
                <source src={this.props.video} type="video/mp4"/>
            </video>
        </div>
    }
}
