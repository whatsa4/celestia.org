import * as React from "react"
import Image from "../imageComponent"

export default class PurpleBox extends React.Component {
    render() {
        return <div className={'purple-box'}>
            <a href={this.props.buttonUrl} target={'_blank'} rel={'noreferrer'}>
                <div className={'row'}>
                    <div className={'col col-auto'}>
                        <Image alt={this.props.title} filename={this.props.icon}/>
                    </div>
                    <div className={'col col'}>
                        <div className={'title'}>{this.props.title}</div>
                        <div className={'text'}>{this.props.text}</div>

                    </div>
                </div>
            </a>
        </div>
    }
}
