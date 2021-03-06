import { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1, //all : -1, active :1 , deatice:0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus)
        this.setState({
            [name]: value
        });

    }


    render() {

        var { tasks } = this.props; // var tasks = this.props.tasks
        var { filterName, filterStatus } = this.state;
        var elmTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
            />
        })

        return (

            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">CustomerID</th>
                        <th className="text-center">CompanyName</th>
                        <th className="text-center">ContactName</th>
                        <th className="text-center">ContactTitle</th>
                        <th className="text-center">Address</th>
                        <th className="text-center">City</th>
                        <th className="text-center">Region</th>
                        <th className="text-center">PostalCode</th>
                        <th className="text-center">Country</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">Fax</th>
                        {/* <th className="text-center">T??n</th>
                        <th className="text-center">Tr???ng Th??i</th>
                        <th className="text-center">H??nh ?????ng</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>T???t C???</option>
                                <option value={0}>???n</option>
                                <option value={1}>K??ch Ho???t</option>
                            </select>
                        </td>
                        <td /> */}
                    </tr>
                    {elmTasks}
                </tbody>
            </table>

        );
    }

}

export default TaskList;
