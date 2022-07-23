import React, { Component } from 'react';

class LyricList extends Component {
    onClickThumbUp(id){
        console.log(id)
    }
    renderLyricList(){
        return this.props.lyrics.map(({ id, content })=>{
            return (
                <li 
                key={id} 
                className='collection-item'> 
                { content } 
                <i 
                className='material-icons'
                onClick={()=>this.onClickThumbUp(id)}>
                    thumb_up
                </i>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className='collection'>
             { this.renderLyricList() }
            </ul>
        );
    }
}

export default LyricList;