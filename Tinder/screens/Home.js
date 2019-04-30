import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

import { 
  Text, 
  View
} from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {
    this.props.dispatch(login())
    this.login()
  }

  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('279930026293948', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }  

  render() {
    return (
     <View>
      <Text>{this.props.user}</Text>
     </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);

