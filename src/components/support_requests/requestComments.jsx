import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/commentActions";
import CommentInput from "./commentInput";
import CommentsList from "./commentsList";
// import '../stylesheets/comments.scss';

class RequestComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this)
  }

  componentDidMount() {
    this.props.actions.fetchComments(this.props.id)
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  get customerCanPost() {
    const { comments } = this.props;
    const userType = localStorage.getItem('userType');

    if (userType === 'cust' && comments.length === 0) {
      return true;
    } else if (userType === 'cust' && comments.length > 0) {
      return false;
    } else {
      return false;
    }
  }

  save(event) {
    event.preventDefault();
    const { id } = this.props;
    const { body } = this.state;
    const req = { body };
    this.props.actions.create(id, req)
      .then(() => {
        this.setState({ body: '' })
      });
    this.props.actions.fetchComments(this.props.id)
  }

  render() {
    const { comments } = this.props;
    return (
      <Fragment>
        <div id="request-comments">
          <h3>Comments</h3>
          <CommentInput
            body={this.body}
            handleChange={this.handleChange}
            save={this.save}
            customerCanPost={this.customerCanPost}
          />

          <div id="comments-list">
            { comments.length === 0 ? (
              <p>No comments available yet</p>
            ) : (
              comments.map((comment) => (
                <CommentsList comment={comment} key={comment.id} />
              ))
            ) }
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comment.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestComments);
