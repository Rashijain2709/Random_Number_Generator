import {Component} from 'react'
import './RandomNumberGenerator.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  RandomNumber = () => Math.ceil(Math.random() * 100)

  GenerateRandomNumber = () => {
    const randomNumber = this.RandomNumber()
    this.setState(() => ({number: randomNumber}))
  }

  render() {
    const {number} = this.state

    return (
      <div className="Main-Container">
        <div className="Content-Container">
          <h1 className="heading">------Random Number------</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="Random-btn"
            type="button"
            onClick={this.GenerateRandomNumber}
          >
            Generate
          </button>
          <p className="RandomNumber">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator;