import React from 'react'

export class POCComponent extends React.Component {

    constructor(props) {
        super(props);
       // this.onSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <span>Im in poc Panel</span>
                {/* <button onClick={() => props.history.goBack()}>Go Back</button> */}
            </div>
        )
    }


}