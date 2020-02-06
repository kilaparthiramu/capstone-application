import React from 'react'

export class AdminComponent extends React.Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        var lprops = this.props;
        return (
            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <span>Im in admin Panel</span>
                <button onClick={this.goBack}>Go Back</button>
            </div>
        )
    }


}