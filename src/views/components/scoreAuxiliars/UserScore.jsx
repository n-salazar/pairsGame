import React from 'react';

import { connect } from "react-redux";

let UserScore = (props) => {
    return (
        <React.Fragment>
            <h5>Score <b>{props.userName}</b></h5>
            <h1>5000</h1>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        userName: state.userReducer.userName,
    };
};

export default connect(mapStateToProps)(UserScore);