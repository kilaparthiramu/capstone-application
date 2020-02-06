import React from 'react'

export class PMOComponent extends React.Component {

    constructor(props) {
        super(props);
       // this.onSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <span>Im in PMO Panel</span>
                {/* <button onClick={() => props.history.goBack()}>Go Back</button> */}
            </div>
        )
    }


}