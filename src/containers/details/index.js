import React from 'react';
import { connect } from 'react-redux';
// import {useParams} from 'react-router-dom'
import { fetchMovieDetails } from '../../actions';
import classes from './details.module.css';


class Details extends React.Component{

    constructor(props){
        super(props);
        const urlParam = window.location.href;
        const urlSplit = urlParam.split('/')
        const id = urlSplit[urlSplit.length - 1]
        console.log(id)
        this.state = {
            movieId: id,
            data:{},
            // ratings: {}
        }
    }

    componentDidMount(){
        this.props.onFetchMovieDetails(this.state.movieId)
        // console.log(this.state.data)

    }

    componentDidUpdate(prevProps){
        const {movieDetailsData} = this.props

        if (prevProps.movieDetailsData.isLoading &&  !movieDetailsData.isLoading){
            this.setState({data:movieDetailsData.data})
            // this.setState({ratings: movieDetailsData.data.Ratings[0]})
        }
        console.log(this.state.data)
        
    }

    render(){
        return (
            <div className={classes.detailsContainer}>
                {/* <h1>This is details</h1> */}
                {/* {
                    this.props.movideDetails.isLoading ? 
                    <h4>....Loading.....</h4>:
                    (
                        
                    )
                } */}
                {/* <h1>{this.state.data.Title}</h1> */}
                <div className={classes.topContainer}>
                    <img src={this.state.data.Poster} />
                    <div className={classes.topRightContainer}>
                        <h1 className={classes.titleText}>{this.state.data.Title}</h1>
                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Date Released </p>
                            <p>{this.state.data.Released}</p>
                        </div>
                        
                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Runtime</p>
                            <p>{this.state.data.Runtime}</p>
                        </div>

                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Director</p>
                            <p>{this.state.data.Director}</p>
                        </div>


                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Boxoffice</p>
                            <p>{this.state.data.BoxOffice}</p>
                        </div>
                    

                        
                        
                        
                         
                    </div>
                </div>

                <div  className={classes.bottomContainer}>
                    {/* <div className={classes.ratingContainer}>
                        <p className={classes.textlabel}>imdbRating</p>
                        <p>{this.state.data.imdbRating}</p>
                    </div> */}

                    <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Plot</p>
                            <p className={classes.text}>{this.state.data.Plot}</p>
                    </div>

                    
                    <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>imdbRating</p>
                            <p>{this.state.data.imdbRating}</p>
                    </div>

                    <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>imdbVotes</p>
                            <p>{this.state.data.imdbVotes}</p>
                    </div>
                    
                </div>
                

            </div>
        
        )
    }
}

// function Details() {
//     let { id } = useParams();
//     console.log(id)
//     return <div style={{ fontSize: "50px" }}>
//             Now showing post {id}
//         </div>;
// }


const mapDispatchToProps = {
    onFetchMovieDetails: fetchMovieDetails,
    // action name tu value dia
}

const mapStateToProps = (state) => ({
    movieDetailsData: state.movieDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)