import React, { Component } from 'react';

import { connect } from 'react-redux';
// ## action ##
import * as counterTypes from '../store/actions/counter';
import { setName } from '../store/actions/user';
// ## action end ##
import { bindActionCreators } from 'redux';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };
  }
  handleChange = (k, v) => {
    this.setState({ [k]: v });
  };

  render() {
    // const { dispatch } = this.props;
    return (
      <div className="ui container center">
        <h1>{this.props.counter.count}</h1>
        <div>I'm {this.props.user.user}</div>

        <div className="ui  aligned">
          <button
            className="ui button"
            type="button"
            onClick={() => {
              this.props.increment();
            }}
          >
            INCREMENT
          </button>
          <button
            className="ui button"
            type="button"
            onClick={() => {
              this.props.decrement();
            }}
          >
            DECREMENT
          </button>
          <button
            className="ui button"
            type="button"
            onClick={() => this.props.asyncIncrement()}
          >
            async +1
          </button>
        </div>
        <div className="ui input">
          <input
            type="text"
            onChange={e => this.handleChange('user', e.target.value)}
            value={this.state.user}
          />
          <button
            className="ui button"
            type="button"
            onClick={() => {
              this.props.setName(this.state.user);
              this.setState({ user: '' });
            }}
          >
            set Name
          </button>
        </div>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return state;
// }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...counterTypes, setName }, dispatch);
}
export default connect(
  state => state, // start to props
  // dispath => ({
  //   // dispatch to props
  //   increment: bindActionCreators(increment, dispath),
  //   decrement: bindActionCreators(decrement, dispath),
  //   setName: bindActionCreators(setName, dispath),
  // })
  mapDispatchToProps
)(App);
