import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux'
import { 
  Text, 
  View
} from 'react-native';

class Profile extends React.Component {
  state = {}

  componentWillMount() {
    console.log(this.props.user)
  }

  render() {
    return (
    <View style={styles.container}>
      <Text>{this.props.user.name} HELLO</Text>
     </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Profile);