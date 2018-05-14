import React, {Component} from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

export default class EditableTimer extends Component {

    constructor(){
        super();
        this.state = {
           editFormOpen: false
        };
    }

    render(){
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                 id={this.props.id}
                 title={this.props.title}
                 project={this.props.project}
                 onFormClose={this.handleFormClose.bind(this)}
                 onUpdate={this.handleSubmit.bind(this)}
                />
            );
        } else {
            return (
                <Timer
                 id={this.props.id}
                 title={this.props.title}
                 project={this.props.project}
                 elapsed={this.props.elapsed}
                 runningSince={this.props.runningSince}
                 onClickEditButton={this.handleEditClick.bind(this)}
                 onDelete={this.props.onDelete}
                 onClickStart={this.props.onClickStart}
                 onClickStop={this.props.onClickStop}
                 />
            );
        }
    }

    handleEditClick() {
        this.openForm();
    }

    handleFormClose() {
        this.closeForm();
    }

    handleSubmit(timer) {
        this.props.onFormSubmit(timer);
    }

    closeForm() {
        this.setState({editFormOpen: false});
    }

    openForm() {
        this.setState({editFormOpen: true});
    }
}