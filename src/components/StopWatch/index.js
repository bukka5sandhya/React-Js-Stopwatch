import {Component} from 'react'
import './index.css'

class StopWatch extends Component{
    state = {
        isTimeRunning: false,
        timeElapsedInSeconds : 0
    }
    componentWillUnmount(){
        clearInterval(this.timeInterval)
    }
    onResetTimer = () => {
        clearInterval(this.timeInterval)
        this.setState({isTimeRunning:false,timeElapsedInSeconds:0})
    }
    onStopTimer = () => {
        clearInterval(this.timeInterval)
        this.setState({isTimeRunning:false})
    }
    updateTime = () => {
        this.setState(prevState => ({
            timeElapsedInSeconds :prevState.timeElapsedInSeconds+1
        }))
    }
    onStartTime = () => {
        this.timeInterval = setInterval(this.updateTime,1000)
        this.setState({isTimeRunning:false})
    }
    renderSeconds = () => {
        const {timeElapsedInSeconds} = this.state 
        const seconds = Math.floor(timeElapsedInSeconds % 60)

        if(seconds < 10){
            return `0 ${seconds}`
        }
        return seconds
    }
    renderMinutes = ()=>{
        const {timeElapsedInSeconds} = this.state 
        const minutes = Math.floor(timeElapsedInSeconds/60)

        if(minutes < 10){
            return `0${minutes}`
        }
        return minutes
    }
    render() {
        const {isTimeRunning} = this.state 
        const time = `${this.renderMinutes()}: ${this.renderSeconds()}`
        return(
            <div className="app-container">
                <div className="stopwatch-container">
                    <h1 className="stopwatch">Stopwatch</h1>
                    <div className="timer-container">
                        <div classaName="timer">
                            <img
                             src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" 
                             className="timer-image" 
                             alt="stopwatch"/>
                             <p className="heading">Timer</p>
                             <h1 className="stopwatch-timer">{time}</h1>
                             <div className="buttons">
                                <button className="start-button button"
                                type="button"
                                onClick={this.onStartTime}
                                disabled = {isTimeRunning}
                                >Start</button>
                                 <button
                             type="button"
                         className="stop-button button"
                       onClick={this.onStopTimer}
                       >
                      Stop
                      </button>
                  <button
                        type="button"
                        className="reset-button button"
                         onClick={this.onResetTimer}
                      >
                       Reset
                      </button>
                             </div>


                        </div>
                    </div>
                </div>

            </div>
        )

    }
}
export default StopWatch