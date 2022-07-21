import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import React, { Component } from 'react';

class SongList extends Component {
  render() {
      console.log(this.props)
        return (
            <div>
                songs
            </div>
        );
    }
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList);