import * as React from "react"
import Card from "../modules/card";

export default class CardsSection extends React.Component {
    render() {
        return <section className={'cards-section'}>
            <div className={'row'}>
                <div className={'col col-12 col-md-6'}>
                    <Card title={this.props.title} text={this.props.text}/>
                </div>
            </div>
        </section>
    }
}
