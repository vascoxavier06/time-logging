import React, {Component} from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

export default class TimersDashBoard extends Component {

    constructor() {
        super();
        this.state = {
            timers: [{
                    title: 'Practice squat',
                    project: 'Gym Chores',
                    id: 1,
                    elapsed: 5456099,
                    runningSince: Date.now(),
                },
                {
                    title: 'Bake squash',
                    project: 'Kitchen Chores',
                    id: 2,
                    elapsed: 1273998,
                    runningSince: null,
                },
                {
                    title: 'Europe time',
                    project: 'Real Madrid',
                    id: 3,
                    elapsed: 5456099,
                    runningSince: Date.now(),
                }, {
                    title: 'Bake squash',
                    project: 'Kitchen Chores',
                    id: 4,
                    elapsed: 1273998,
                    runningSince: null,
                }
            ],
        };
    }

    render(){
        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-header bg-dark'>
                        <div className='card-title'>
                            <h1 className='text-success text-center'>
                                TimersDashBoard
                            </h1>
                        </div>
                    </div>
                    <div className='card-body'>
                        <EditableTimerList
                         timers={this.state.timers}
                         onFormSubmit={this.handleEditFormSubmit.bind(this)}
                         onDelete={this.handleDeleteTimer.bind(this)}
                         onClickStart={this.startTimer.bind(this)}
                         onClickStop={this.stopTimer.bind(this)}/>
                    </div>
                    <div className='card-footer bg-dark'>
                        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    handleCreateFormSubmit(timer) {
        this.createTimer(timer);
    }

    createTimer(timer) {
        timer.id = this.state.timers.length + 1
        this.setState({
            timers: this.state.timers.concat(timer)
        })
    }

    handleEditFormSubmit(attrs) {
        this.updateTimer(attrs);
    }

    updateTimer(attrs) {
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project
                    });
                }else {
                    return timer;
                }
            })
        })
    }

    handleDeleteTimer(timerId) {
        this.deleteTimer(timerId);
    }

    deleteTimer(timerId) {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        })
    }

    startTimer(timerId) {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: now
                    });
                } else {
                    return timer;
                }
            })
        })
    }

    stopTimer(timerId) {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === timerId ){
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null
                    });
                } else {
                    return timer;
                }
            })
        });
    }
}