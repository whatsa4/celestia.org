import React from "react"

export default class Discord extends React.Component {
    render() {
        return <a href={this.props.url} target={'_blank'} rel="noreferrer">
            <i className={'icon-social-discord'}/>
        </a>;
    }
}
