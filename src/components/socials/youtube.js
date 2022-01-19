import React from "react"

export default class Youtube extends React.Component {
    render() {
        return <a href={this.props.url} target={'_blank'} rel="noreferrer">
            <i className={'icon-youtube'}/>
        </a>;
    }
}
