import React from 'react'

export class PMOComponent extends React.Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <span>Im in PMO Panel</span>
                <button onClick={this.goBack}>Go Back</button>
            </div>
        )
    }


}