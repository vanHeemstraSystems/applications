import React from 'react';

class CharactersApplication extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
 
export default CharactersApplication;
