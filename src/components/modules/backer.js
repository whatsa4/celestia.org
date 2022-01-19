import * as React from "react"
import Image from "../imageComponent";

export default class Backer extends React.Component {
    render() {
        return <div className="backer">
            <Image alt={this.props.data.title} filename={this.props.data.image} />
        </div>
    }
}
