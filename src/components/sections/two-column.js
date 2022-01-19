import * as React from "react"
import Image from "../imageComponent";

export default class TwoColumn extends React.Component {
    render() {
        return <section className={'two-column'}>
            <div className={'row'}>
                <div className={'col col-12 col-sm-6'}>
                    <Image alt={this.props.title} filename={this.props.image} />
                </div>
                <div className={'d-table-cell align-middle col col-12 col-sm-6'}>
                    <div className={'text'}>
                        <h4>{this.props.title}</h4>
                        {this.props.text}
                    </div>
                </div>
            </div>
        </section>
    }
}
