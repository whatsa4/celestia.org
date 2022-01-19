import * as React from "react"
import Image from "../imageComponent";

export default class ColumnWithIcon extends React.Component {

    render() {
        return <div className={'columnWithIcon row d-block d-lg-table py-3'}>
            <div className={'col-auto d-block d-lg-table-cell align-middle'}>
                <Image alt={this.props.column.title} filename={this.props.column.image} />
            </div>
            <div className={'col d-block d-lg-table-cell align-middle pe-4'}>
                <div className={'title'} dangerouslySetInnerHTML={{__html: this.props.column.title}}/>
                {this.props.column.text}
            </div>
        </div>
    }
}
