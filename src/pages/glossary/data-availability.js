import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

const title = 'Data availability';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>The condition of whether or not transaction data was made available for nodes to download, when a block was proposed. Verifying data availability is the only way to prevent data withholding, a devastating attack that breaks the fundamental security of any blockchain. In the event that a block is proposed where the underlying data is unavailable, the rest of the network won’t be able to confirm the validity of the transactions in the block, or won’t be able to perform a state transition using the update from the proposed block.
                </p>

                <p>In traditional blockchains, data availability is verified by requiring full nodes to download all the block data. This approach does not scale, hence the need for specialized schemes such as data availability sampling which allow nodes to verify data availability without downloading the entire block.
                </p>

                // Add link to the data availability problem word page
                <p>See the <a href="https://www.celestia.org/">data availability problem</a>.
                </p>
                
                <p> Read more about <a href="https://coinmarketcap.com/alexandria/article/what-is-data-availability">data availability</a>.
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
