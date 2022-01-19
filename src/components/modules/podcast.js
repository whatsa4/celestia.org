import * as React from "react"

export default class Podcast extends React.Component {
    render() {
        return <a href={this.props.data.url} target={'_blank'} rel="noreferrer">
            <div className="podcast">
                <div className={'title'}>{this.props.data.title}</div>
                <div className={'subtitle'} dangerouslySetInnerHTML={{
                    __html: this.props.data.subtitle
                }}></div>
                <div className={'podcast-bottom'}>
                    <div className={'row'}>
                        <div className={'col col-12'}>
                            <div className={'play-button'}><i className={'icon-play-button'}/> Listen</div>
                        </div>
                    </div>
                </div>
                </div>
            </a>
    }
}
