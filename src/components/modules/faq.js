import * as React from "react"

export default class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return <div className={this.state.active ? 'faq row justify-content-between opened': 'faq row justify-content-between'}>
                <div className={'col'}>
                    <div className={'question'} onClick={this.toggleClass} role={'button'}>{this.props.faq.question}</div>
                    <div className={'text'} dangerouslySetInnerHTML={{
                        __html: this.props.faq.text
                    }}></div>
                </div>
                <div className={'col-auto'}>
                    <div className={'dropdown'} onClick={this.toggleClass} role={'button'}/>
                </div>
        </div>
    }
}
