import React,{Component} from 'react';
import TimerActionButton from './TimerActionButton';

let helpers = require('./helpers');
let style = {
    'display': 'flex',
    'justifyContent': 'center'
};

export default class Timer extends Component{

    constructor() {
        super();
        this.state = {
            isRunning: false
        };
    }

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount () {
        clearInterval(this.forceUpdateInterval());
    }

    render(){
        let elapsedTime = helpers.convertTime(this.props.elapsed);   
        return (
            <div className='container'>
                <div className="card">
                    <div className='card-header'>
                        <div className='card-title text-primary text-center'>{this.props.title}</div>
                        <div className='card-subtitle text-primary text-center'>{this.props.project}</div>
                    </div>
                    <div className='card-body'>
                        <div>
                            <h1 className='card-text text-center'>{elapsedTime}</h1>
                        </div>
                        <div className='container-fluid' style={style}>
                            <button className='btn btn-outline-info btn-lg form-control' onClick={this.props.onClickEditButton}>edit</button>
                            <button className='btn btn-outline-danger btn-lg form-control' onClick={this.handleDelete.bind(this)}>delete</button>
                        </div>
                    </div>

                    <div className='card-footer'>
                        <TimerActionButton timeIsRunning={this.state.isRunning}
                         handleTimer={this.handleTimer.bind(this)}
                         onClickStart={this.handleClickStart.bind(this)}
                         onClickStop={this.handleClickStop.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    handleTimer() {
        this.setState({
            isRunning: !this.state.isRunning
        });
    }

    handleClickStart() {
        this.props.onClickStart(this.props.id);
        this.handleTimer();
    }

    handleClickStop() {
        this.props.onClickStop(this.props.id);
        this.handleTimer();
    }
}