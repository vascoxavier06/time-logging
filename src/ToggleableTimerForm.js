import React, {Component} from 'react';
import TimerForm from './TimerForm';

let style = {'display':'flex','justifyContent': 'center'};

export default class ToggleableTimerForm extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    
    render(){
        if (this.state.isOpen) {
            return (
                <div className='row' style={style}>
                    <div className='col-md-4'>
                       < TimerForm onFormClose={this.handleFormClose.bind(this)} onFormSubmit={this.handleFormSubmit.bind(this)}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='row' style={style}>
                  <div className='col-md-4'>
                    <button className='btn btn-outline-success form-control btn-lg' onClick={this.handleFormOpen.bind(this)}>Add Timer</button>
                  </div>
                </div>
            );
        }
    }

    handleFormOpen(){
        this.setState({isOpen: true});
    }

    handleFormClose = () => this.setState({
        isOpen: false
    });

    handleFormSubmit(timer) {
        this.props.onFormSubmit(timer);
        this.setState({isOpen: false})
    }
}