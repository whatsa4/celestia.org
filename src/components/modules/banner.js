import * as React from "react"
import Image from "../imageComponent";

export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            banner : true
        }
    }
    closeBanner = () => {
        const self = this;
        document.getElementById("banner").classList.add("hide");
        setTimeout(function (){
            localStorage.setItem('banner', 'true')
            self.setState({banner:false})
        },600);
    };

    componentDidMount() {
        if (localStorage.getItem('banner')) {
            this.setState({banner:false})
        }
    }

    render() {

        return this.state.banner === true ? <div id={'banner'} className="banner">
            <div className={'container'}>
                <div className={'close-banner'} onClick={this.closeBanner}><i className={'icon-close'}></i></div>
                <div className={'row w-80 align-items-center justify-content-center'}>
                    <div className={'col-2 position-relative d-none d-md-flex'}>
                        <Image alt={'Modular Summit'} filename={'modular-summit.svg'} />
                    </div>
                    <div className={'col-auto'}>Register for the Modular Summit!</div>
                    <div className={'col-auto'}>
                        <a href="https://modularsummit.dev" target={'_blank'} rel={'noreferrer'}>
                            <button className={'button-simple sm'}>Register</button>
                        </a>
                    </div>
                </div>
            </div>
        </div> : ''
    }
}
