import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
                <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    );
}
function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps);
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(ToDo);
