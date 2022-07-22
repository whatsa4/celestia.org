import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

const title = 'Sovereign rollup';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>Sovereign rollups are a slight departure from rollups as they are seen on Ethereum. There is no set of smart contracts that validate the rollup’s data and proofs. Instead, the sovereign rollup publishes its data directly to the chain. 
                </p>

                <p>There is also no enshrined trust-minimized bridge between a sovereign rollup and Celestia. Uniquely, sovereign rollups gain an independent upgrade path via forking. Forks can be instantiated through the sovereign rollup’s social consensus, enabling easier social coordination and more secure upgrades. 
                </p>

                <p>For more information on sovereign rollups, view the blog post ‘Rollups as sovereign chains’.
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