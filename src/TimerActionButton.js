import React,{Component} from 'react';

export default class TimerActionButton extends Component {

    render () {

        if(this.props.timeIsRunning) {
            return (
                <button className='btn btn-danger btn-lg form-control' onClick={this.props.onClickStop}>Stop</button>
            )
        }else {
            return (
                <button className='btn btn-outline-success btn-lg form-control' onClick={this.props.onClickStart}>Start</button>
            )
        }
    }
}