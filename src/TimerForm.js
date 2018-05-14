import React, {Component} from 'react';

let style = {
    'display': 'flex',
    'justifyContent': 'center'
};

export default class TimerForm extends Component {

    constructor() {
        super();
        this.state = {
            title:  '',
            project: ''
        };
    }

    
    render(){

        const submitText = this.props.id ? 'Update' : 'Create';
        return(
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='card-title text-primary text-center'>{submitText} Timer</h2>
                    </div>
                    <div className='card-body'>
                        <div className='form-group'>
                            <label className='text-primary'>Title:</label>
                            <input type='text' className='form-control' defaultValue={this.state.title} onKeyUp={this.handleTitleChange.bind(this)}/>
                        </div>
                        <div className='form-group'>
                            <label className='text-primary'>Project:</label>
                            <input type='text' className='form-control' defaultValue={this.state.project} onKeyUp={this.handleProjectChange.bind(this)}/>
                        </div>
                    </div>
                    <div className='card-footer' style={style}>
                        <button className='btn btn-outline-primary btn-lg' onClick={this.handleSubmit.bind(this)} disabled={this.state.title.length < 3 || this.state.project.length < 3} style={{display: this.state.update}}>
                         {submitText} Timer
                        </button>
                        <button className='btn btn-outline-danger btn-lg' onClick={this.props.onFormClose}>
                          Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }


    handleProjectChange(e) {
        this.setState({project: e.target.value});
    }

    handleSubmit() {

        if(this.props.id) {
            this.props.onUpdate({
                id: this.props.id,
                title: this.state.title,
                project: this.state.project
            });
            this.props.onFormClose();
        }else {
            this.props.onFormSubmit({
                id: this.props.id,
                title: this.state.title,
                project: this.state.project,
                elapsed: 0,
                 runningSince: null
            });
        }
    }
}