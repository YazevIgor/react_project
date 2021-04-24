import React from "react";
class ProfileInfo extends React.Component {

    state = {
        editMode: true,
        status: ''
    }
    toggleStatus = (check) => {
        this.setState({editMode: !this.state.editMode})
        if (check)
        this.props.setMyStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    render() {

        return <div>
            {this.state.editMode
                ? <div onDoubleClick={() => this.toggleStatus(false)} ><span>{this.props.status || '-----'}</span></div>
                : <div ><input onChange={this.onStatusChange} autoFocus={true} onBlur={() => this.toggleStatus(true)} value={this.state.status} /> </div>
            }
        </div>

    }
}

export default ProfileInfo