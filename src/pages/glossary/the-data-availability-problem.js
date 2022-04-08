import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

const title = 'The data availability problem';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A problem that is concerned with whether the data in the proposed block can be verified that it is available. The problem commonly arises in sharded blockchains and with off-chain scaling solutions, L2s, because their architectures increase the attack vector for data withholding attacks.
                </p>

                <p>While data availability is trivial for monolithic blockchains that do not scale, a more scalable modular approach introduces situations where ensuring data availability can become problematic.
                </p>

                <p>Read more about <a href="https://coinmarketcap.com/alexandria/article/what-is-data-availability/"> data availability</a>.
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <div className={'glossary-subpage'}>
                    <main>
                        <div className={'container'}>
                            <BreadCrumb title={title}/>
                            <h1 className={'main mb-4'}>{title}</h1>

                            <SocialShare title={title} url={this.props.location.href}/>

                            <GlossaryContent/>

                        </div>

                        <div className={'container wide'}>
                            <GlossaryNav url={this.props.location.state && this.props.location.state.url}/>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossarySubpage
