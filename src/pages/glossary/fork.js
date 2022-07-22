import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

const title = 'Fork';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A software upgrade that causes the blockchain to split into two chains that may or may not be compatible with each other. Forks also occur when there is a temporary divergence in the chain.
                </p>

                <p>There are two common types of forks that introduce software upgrades; hard forks and soft forks. Hard forks are backwards-incompatible upgrades. Once a hard fork occurs, the chain gets split into two distinct forks, one that has the upgraded version and the other without it. Nodes then need to decide which fork they will follow. As such, a node can’t communicate with another node that isn’t running the same software.
                </p>

                <p>Soft forks are backwards-compatible upgrades. Once a soft fork occurs, nodes can continue to communicate with each other even if they are on different software versions. This is possible because the new software doesn’t conflict with the previous version, so there is no ‘hard’ split in the chain.
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