import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class CreateLyrics extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: ''
          }; 
    }
    onFormSubmit(e){
        e.preventDefault()
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        }).then(()=> this.setState({content: ''}))
    }
    render() {
        return (
            <div>
                <form onSubmit={e=>this.onFormSubmit(e)}>
                    <label>Add Lyrics</label>
                    <input onChange={e=>this.setState({content: e.target.value})}></input>
                </form>
            </div>
        );
    }
}

const mutation = gql`
mutation addLyricToSong($content: String, $songId: ID){
    addLyricToSong(content: $content, songId: $songId){
      id,
      lyrics{
        id,
        content
      }
    }
  }`

export default graphql(mutation)(CreateLyrics);