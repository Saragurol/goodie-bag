import React, { Component } from 'react'
import {fetchCandies} from '../reducers/index'
import {connect} from 'react-redux'

export class AllCandies extends Component {

    componentDidMount () {
        this.props.fetchInitialCandies()
    }
    
      //why are we adding this?
    render(){
        const candies = this.props.candies 
        console.log("IM HERE", candies)
        return (
            <div>
                <ul className= 'candy-list'>
                    {candies.map(candy => <li key= {candy.id}>candy: {candy.name}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        candies: state.candies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialCandies: () => dispatch(fetchCandies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCandies)
