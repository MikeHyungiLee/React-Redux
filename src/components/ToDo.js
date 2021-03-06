import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, deleteToDo, id }){
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={deleteToDo}>DEL</button>
            </Link>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps){
    console.log(ownProps);
    return {
        deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)) 
    }
    
}

export default connect(null, mapDispatchToProps)(ToDo);