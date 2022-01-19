import * as React from "react"

class Success extends React.Component {
    render() {
        return <div className={''}>
            <h3 className={'text-center'}>{this.props.title}</h3>
            <div className={'text-center'} dangerouslySetInnerHTML={{
                __html: this.props.text
            }}/>
        </div>
    }
}

export default Success;
