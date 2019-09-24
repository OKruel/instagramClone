import React, { Component } from 'react';
import api from '../services/api';

import './New.css'

class New extends Component {

    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state);

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data)

        this.props.history.push('/')

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] })
    }

    render() {
        return (
            <form id='new-post' onSubmit={this.handleSubmit}>
                <input
                    type='file'
                    onChange={this.handleImageChange}
                ></input>

                <input
                    type='text'
                    name='author'
                    placeholder='Autor do post'
                    onChange={this.handleChange}
                    value={this.state.author}
                ></input>

                <input
                    type='text'
                    name='place'
                    placeholder='Local do post'
                    onChange={this.handleChange}
                    value={this.state.place}
                ></input>

                <input
                    type='text'
                    name='description'
                    placeholder='Descrição do post'
                    onChange={this.handleChange}
                    value={this.state.description}
                ></input>

                <input
                    type='text'
                    name='hashtags'
                    placeholder='Hashtag do post'
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                ></input>

                <button type='submit'> Enviar </button>

            </form>
        )
    }
}

export default New;