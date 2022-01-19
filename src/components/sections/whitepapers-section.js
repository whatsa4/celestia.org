import * as React from "react"
import Whitepaper from "../modules/whitepaper";

import {whitepapers} from "../../datas/resources/whitepapers"

export default class WhitepapersSection extends React.Component {
    render() {
        return (
            <section id={this.props.id} className={'whitepapers-section py-0'}>
                <h2 className={'with-decor mb-5 pb-4'}>Whitepapers</h2>

                <div className={'row mb-3'}>
                    { whitepapers && whitepapers.map(function(whitepaper){
                        return <Whitepaper key={whitepaper.id} data={whitepaper}/>
                    })}
                </div>
            </section>
        )
    }
}
