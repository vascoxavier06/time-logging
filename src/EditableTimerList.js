import React, {Component} from 'react';
import EditableTimer from './EditableTimer';

export default class EditableTimerList extends Component {
    render(){
        const timers = this.props.timers
        .map(timer => 
            <div className = 'col-md-4' key={timer.id}>
                <EditableTimer 
                    id={timer.id} 
                    title={timer.title} 
                    project={timer.project}
                    elapsed={timer.elapsed}
                    runningSince={timer.runningSince}
                    onFormSubmit={this.props.onFormSubmit}
                    onDelete={this.props.onDelete}
                    onClickStart={this.props.onClickStart}
                    onClickStop={this.props.onClickStop}
            />
            </div>
        );
        return (
            <div className='row'>
                {timers}
            </div>
        );
    }
}