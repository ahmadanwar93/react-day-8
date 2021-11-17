import React from 'react'
import classes from './moviecard.module.css'
import {Link} from 'react-router-dom'

class MovieCard extends React.Component {
    render (){
        return(
            // <div className={classes.card_holder}>
            //     {/* {this.props.poster == 'N/A' ? <img alt =""  className = {classes.img_holder} />: <img alt =""  className = {classes.img_holder} src={this.props.poster}/>} */}
            //     <img alt =""  className = {classes.img_holder} src={this.props.poster}/>
            //     <div className={classes.details_holder}>
            //         <h3>{this.props.title}</h3>
            //         <div>
            //             <p>Year: {this.props.year}</p>
            //             <p>Type: {this.props.type}</p>
            //         </div>                    
            //     </div>
            // </div>
            <Link to={{pathname:`/details/${this.props.id}`}}  className={classes.card_holder} >
                {/* {this.props.poster == 'N/A' ? <img alt =""  className = {classes.img_holder} />: <img alt =""  className = {classes.img_holder} src={this.props.poster}/>} */}
                <img alt =""  className = {classes.img_holder} src={this.props.poster}/>
                <div className={classes.details_holder}>
                    <h3>{this.props.title}</h3>
                    <div>
                        <p>Year: {this.props.year}</p>
                        <p>Type: {this.props.type}</p>
                    </div>                    
                </div>
            </Link>
        )
    }
}


export default MovieCard;