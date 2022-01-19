import * as React from "react"
import Image from "../imageComponent";

import logo from '../../images/celestia-logo-white.svg'

export default class ImageSection extends React.Component {
    render() {
        return <section className={'image-section'}>
            <div className={'bg'}>
                <Image alt={this.props.title} filename={this.props.image} />
                <div className={'watermark'}/>
            </div>
            <div className={'overlay'}/>

            <div className={'container'}>
                <div className={'inner'}>

                    {this.props.logo && <div className={'logo mb-3'}><img src={logo} alt="Celestia"/></div>}
                    <h3 className={'my-5 with-decor'}>{this.props.title}</h3>
                    {this.props.text}
                </div>
            </div>
        </section>
    }
}
