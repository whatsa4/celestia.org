import React from "react"

export default class Linkedin extends React.Component {
    render() {
        return <a href={this.props.url} target={'_blank'} rel="noreferrer">
            <i className={'icon-linkedin'}/>
        </a>;
    }
}
