import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

const title = 'Settlement layer';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A settlement layer is a blockchain that has a two-way trust minimized bridge with a rollup or any hybrid rollup, such as a validium or volition. The two-way bridge setup enables tokens to move freely between the settlement layer and the rollup. A bridge is trust minimized when communication only requires only a minority of participants to act honestly for it to function correctly.
                </p>

                <p>The minimal trust assumptions made by the bridge are possible because the rollup’s batches are fully verified by the settlement layer - using a combination of fraud/validity proofs and data availability verification.
                </p>

                <p>For more information on settlement layers, view the corresponding Learn Modular post.
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