import React from "react"

export default class Github extends React.Component {
    render() {
        return <a href={this.props.url} target={'_blank'} rel="noreferrer">
            <i className={'icon-github'}/>
        </a>;
    }
}
