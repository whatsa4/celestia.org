import * as React from "react"
import Button from "../buttons/button";

export default class HeroSection extends React.Component {
    render() {
        return (
            <section className={'hero-section'}>
                <div className={'container'}>
                    <h1>{this.props.heroData.title}</h1>
                    <div className={'text'} dangerouslySetInnerHTML={{__html: this.props.heroData.text}}/>

                    {this.props.heroData.buttons.map((button,index) => (
                        <Button key={index} class={button.class} type={button.type} text={button.text} url={button.url}/>
                    ))}
                </div>
            </section>
        )
    }
}
