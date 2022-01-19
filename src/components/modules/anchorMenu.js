import * as React from "react"

export default class AnchorMenu extends React.Component {
    render() {
        return <div className={'anchorMenu mt-4'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <table>
                        <tbody>
                            {this.props.anchors.map((anchor,index) => (
                                <tr key={index}>
                                    <td><a href={'#'+anchor.anchor}>{anchor.text} </a></td>
                                    <td><a href={'#'+anchor.anchor}><i className={'icon-arrow-down ms-3'}/> </a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    }
}
