import React, { Component } from 'react'
import Message from './../../component/Section/Message'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class MessageContainer extends Component {
    render() {
        var {message}=this.props;
        return (
           <Message
            message={message}
           />
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        message:state.MessageReducer
    }
}
MessageContainer.propTypes={
    message:PropTypes.string.isRequired
}
export default connect(mapStateToProps,null)(MessageContainer)
