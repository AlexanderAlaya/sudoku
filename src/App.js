import React from 'react';
import './App.css';
import models from './models/sudoku'

class App extends React.Component {
  constructor(props) {
    super(props)
    let random = Math.floor(Math.random() * 3 ) 
    let array = []
    for (let i = 0; i < models[random].setup.length; i++) {
      let row = []
      for (let k = 0; k < models[random].setup[i].length; k++) {
        row.push(models[random].setup[i][k])
      }
      array.push(row)
    }
    this.state = {
      fields: models[random],
      isError: null,
      array,
      startDate: new Date(),
      time: null
    }
  }

  createTable = () => {
    let table = [],
      setup = this.state.fields.setup
    for (let i = 0; i < 9; i++) {
      let row = [],
        currentRow = setup[i]
      for (let k = 0; k < 9; k++) {
        let currentCol = currentRow[k]
        row.push(
          <div key={k} className="col" >
            {
              this.state.array[i][k] != null ?
                <input value={this.state.array[i][k]} disabled /> :
                <React.Fragment>
                  {
                    currentCol != null ?
                      <input value={currentCol} onChange={this.handleChange(i, k)} onKeyDown={this.keyDown} /> :
                      <input onChange={this.handleChange(i, k)} onKeyDown={this.keyDown} />
                  }
                </React.Fragment>
            }


          </div>
        )
        if((k + 1) % 3 == 0 && k + 1 != 9) {
          row.push(<div className="pion"></div>)
        }
      }
      
     
      table.push(<div className="row" key={i}>{row}</div>)
      if((i + 1) % 3 == 0 && i + 1 != 9) {
        table.push(<hr />)
      }
    }
    return table
  }

  keyDown = e => {
    let allowKeys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 8, 97, 98, 99, 100, 101, 102, 103, 104, 105]
    if (!allowKeys.includes(e.keyCode)) {
      e.preventDefault()
    }
  }

  handleChange = (row, col) => {
    return (e) => {
      let value = e.target.value
      if (value == "") {
        let setup = this.state.fields.setup
        for (let i = 0; i < 9; i++) {
          if (row == i) {
            for (let k = 0; k < 9; k++) {
              if (col == k) {
                setup[i][k] = null
              }
            }
          }
        }
        this.setState({
          fields: {
            ...this.state.fields,
            setup: setup
          }
        })
      }
      else if (value < 10) {
        let setup = this.state.fields.setup
        for (let i = 0; i < 9; i++) {
          if (row == i) {
            for (let k = 0; k < 9; k++) {
              if (col == k) {
                setup[i][k] = parseInt(e.target.value)
              }
            }
          }
        }
        this.setState({
          fields: {
            ...this.state.fields,
            setup: setup
          }
        })
      }
    }
  }

  isWin = () => {
    let { wzor, setup } = this.state.fields
    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        if (setup[i][k] != wzor[i][k]) {
          this.setState({
            isError: true
          })
          return
        }
      }
    }
    this.setState({
      isError: false,
      time: ((new Date().getTime() - this.state.startDate.getTime()) / 1000 ).toFixed(2)
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
        {this.createTable()}
        </div>
        <br />
        <button onClick={this.isWin}>Sprawdź</button>
        <br />
        {
          this.state.isError == null ?
            "" :
            this.state.isError == true ?
              <p className="message" style={{ background: "red" }}>Złe rozwiązanie</p> :
              <p className="message" style={{ background: "green" }}>Udało się !!!! Ukończyłeś/aś w ciągu {this.state.time} sekund.</p>
        }

      </React.Fragment>
    )
  }
}

export default App;
