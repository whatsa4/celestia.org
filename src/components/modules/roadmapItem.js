import * as React from "react"

export default class RoadmapItem extends React.Component {
    render() {
        return <li className={'roadmap-item '+this.props.status}>
            <div className={'box'}>
                <div className={'title'}>{this.props.title}</div>
                <div className={'text'} dangerouslySetInnerHTML={{__html: this.props.text}}/>
            </div>
            <div className={'circle'}/>
        </li>
    }
}
