
import AllCandies from './all-candies'
import { Provider } from 'react-redux'
import React, {Component} from 'react'

const Root = () => {

  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <AllCandies  />
      </main>
    </div>
  )
}

export default Root
