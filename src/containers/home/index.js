import React from 'react';
import classes from './home.module.css';
import {connect} from 'react-redux';
import {fetchMovie} from "../../actions/index"

import MovieCard from '../../components/movieCard/index'


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movieList: [],
        }
    }

    componentDidUpdate(prevProps){
        const {movieData} = this.props
        // {} for deconstruct
        if(prevProps.movieData.isLoading && !movieData.isLoading){
            this.setState({movieList: movieData.data.Search})
        }
    }

    componentDidMount(){
        const {movieData} = this.props;
        if (Object.keys(movieData.data).length > 0){
        this.setState({movieList: movieData.data.Search})
    }
    }


    movieSubmit(){
        const inputVal = this._inputEle.value
        if(inputVal !== ''){
            this.props.onFetchMovie(inputVal)
            this._inputEle.value = ''
        }

    }
    render(){
        return (
            <div>
            <header>
                <input type='text' placeholder = "movie name" ref = {(a) => (this._inputEle = a)} />
                <button onClick = {() => this.movieSubmit()}>Search</button>
            </header>
                {/* <h1>This is home</h1> */}

                <div>
                    {this.state.movieList.map(list => <MovieCard title={list.Title} year = {list.Year} poster = {list.Poster} type = {list.Type} id={list.imdbID}/>)}
                    {/* <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard /> */}
                </div>
            </div>
        
    )
    }
}

const mapStateToProps = (state) => ({
    movieData: state.movie
})

const mapDispatchToProps = {
    onFetchMovie: fetchMovie,
    // action name tu value dia
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);