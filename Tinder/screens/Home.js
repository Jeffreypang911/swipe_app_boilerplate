import React from 'react';
import { connect } from 'react-redux';

import { 
  Text, 
  View
} from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {

  }

  render() {
    return (
     <View>
      <Text>Home</Text>
     </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Home);
