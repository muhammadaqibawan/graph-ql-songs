import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../query/fetchSong';
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state = { title: '' }
    }

    onFormSubmit(e){
        e.preventDefault()
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query }]
        }).then(()=>{
            hashHistory.push('/')
        })
    }

    render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h3> Create New Song </h3>
                <form onSubmit={(e)=> this.onFormSubmit(e)}>
                    <label> Enter song title </label>
                    <input type='text' value={this.state.title} onChange={e=> this.setState({title: e.target.value})}></input>
                </form>
            </div>
        );
    }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title){
        title
    }
  }
`

export default graphql(mutation)(SongCreate);