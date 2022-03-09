import * as React from "react"
import 'react-multi-carousel/lib/styles.css';

import {FooterBoxes} from "../datas/resources/content";

import Layout from "../components/layout";
import {Link} from "gatsby";
class Result extends React.Component {
    render() {
        return (
            <li className={'row result'}>
                <Link to={`/glossary/${this.props.result.url}`} state={{url: this.props.result.url}}>
                    <div className={'col-12'}>
                        <div className={'title'}>{this.props.result.title}</div>
                        {this.props.result.text}
                    </div>
                </Link>
            </li>
        )
    }
}

class LearnPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <div className={'learn-page'}>
                    <main>
                        <div className={'container'}>
                            <h1 className={'main'}>Learn Modular</h1>

                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default LearnPage
