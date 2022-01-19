import * as React from "react"
import { Link } from "gatsby"

import FooterBox from "../components/footer-box";
import Discord from "./socials/discord";
import Github from "./socials/github";
import Email from "./socials/email";
import Twitter from "./socials/twitter";
import Youtube from "./socials/youtube";

import addToMailchimp from 'gatsby-plugin-mailchimp'

import ReactModal from 'react-modal'

ReactModal.setAppElement('#___gatsby')

const navigation = [
    {
        text: "Home",
        url: "/",
        type: 'internal'
    },{
        text: "Technology",
        url: "/technology/",
        type: 'internal'
    },{
        text: "Team",
        url: "/team/",
        type: 'internal'
    },{
        text: "Resources",
        url: "/resources/",
        type: 'internal'
    },{
        text: "Blog",
        url: "https://blog.celestia.org",
        type: 'external'
    },{
        text: "FAQ",
        url: "/faq/",
        type: 'internal'
    },{
        text: "Careers",
        url: "/careers/",
        type: 'internal'
    },{
        text: "Brand",
        url: "https://company-223625.frontify.com/d/JoSwaZS4Mjpj",
        type: 'external'
    },{
        text: "Forum",
        url: "https://forum.celestia.org",
        type: 'external'
    },
]

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            listFields : {
                'group[24870]': '1'
            },
            isModalOpen: false,
            popupTitle: '',
            msg: ''
        };
    }
    handleModalOpen = event => {
        this.setState({ isModalOpen: true })
        document.body.style.overflow = 'hidden';
    }

    handleModalClose = event => {
        this.setState({ isModalOpen: false })
        document.body.style.overflow = 'unset';
    }

    _handleSubmit = e => {
        e.preventDefault();
        const self = this;
        addToMailchimp(this.state.email, this.state.listFields) // listFields are optional if you are only capturing the email address.
            .then(data => {
                if(data.result === 'error' && !data.msg.includes("is already subscribed")){
                    this.setState({popupTitle:'Error'})
                    this.setState({msg:data.msg})
                }else{
                    if(data.msg.includes("is already subscribed")){
                        this.setState({popupTitle:'Thank you!'})
                        this.setState({msg:'You are already subscribed!'})
                    }else{
                        this.setState({popupTitle:'Thank you!'})
                        this.setState({msg:data.msg})
                    }
                }
                self.handleModalOpen();
            })
            .catch(() => {
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
            })
    }
    change = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value })
    };

    render() {
        return (
            <footer id={'footer'}>
                <div className={'container'}>

                    <FooterBox footerBoxes={this.props.FooterBoxes}/>

                    <div className={'row py-5 mt-5'}>
                        <div className={'col col-12 col-lg-4 pe-5'}>
                            <div className={'title'}>Subscribe to our Newsletter</div>

                            <form onSubmit={(e) => this._handleSubmit(e)} className={'needs-validation'} noValidate>
                                <input type="email" id={'email'} className={'form-control'} onChange={(e) => this.change(e)} required/>
                                <button type={'submit'} className={'button button-simple mt-3'}>Subscribe</button>
                            </form>

                        </div>
                        <div className={'col col-12 col-lg-8 ps-3 pt-5 pt-lg-0 ps-lg-5'}>
                            <div className={'row'}>
                                <div className={'col col-12 col-sm-6 col-lg-6'}>
                                    <div className={'col-title'}>Sitemap</div>
                                    <nav>
                                        <ul>
                                            {navigation.map(link => (
                                                <li key={`${link.url}`}>
                                                    {link.type === 'external' ? <a href={`${link.url}`} target={'_blank'} rel={'noreferrer'}>{link.text}</a> : <Link to={`${link.url}`}>{link.text}</Link>}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                                <div className={'col col-12 col-sm-6 col-lg-6 align-right pt-5 pt-sm-0'}>
                                    <div className={'col-title text-right'}>Follow us</div>
                                    <div className={'socials'}>
                                        <Discord url={'https://discord.com/invite/YsnTPcSfWQ'}/>
                                        <Github url={'https://github.com/celestiaorg'}/>
                                        <Email url={'https://t.me/CelestiaCommunity'}/>
                                        <Twitter url={'https://twitter.com/CelestiaOrg'}/>
                                        <Youtube url={'https://www.youtube.com/channel/UCLlvAEzXBFZ-P3zS6BF2Bjg'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'row justify-content-center'}>
                        <div className={'col col-12 col-sm-6'}>
                            <p>This website is maintained by Celestia Labs, trading name of Strange Loop Labs AG, Pradafant 11, 9490 Vaduz, Liechtenstein.</p>
                        </div>
                    </div>

                    <div className={'row justify-content-center copyright'}>
                        <div className={'col col-12 col-sm-6 text-center'}>
                            <p>Website designed with <i className={'icon-heart'}/> by <a href="https://designatives.com">Designatives</a></p>
                        </div>
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.isModalOpen}
                >
                    <div className={'inner'}>
                        <h3 className={'text-center'}>{this.state.popupTitle}</h3>
                        <div className={'text-center'} dangerouslySetInnerHTML={{
                            __html: this.state.msg
                        }}/>
                        <button className={'close-button'} onClick={this.handleModalClose}><i className={'icon-close'} aria-label="Close"></i></button>
                    </div>
                </ReactModal>
            </footer>
        )
    }
}

export default Footer
