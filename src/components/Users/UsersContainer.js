import React from "react";
import * as axios from 'axios'
import userPhoto from '../assets/images/person-male.png'
import styles from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`).then(response => {
            this.props.addUser(response.data.items);
            this.props.updateTotalCountPages(response.data.totalCount);

        });
    }

    onClickPage(p) {
        this.props.updateCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.sizePage}`).then(response => {
            this.props.addUser(response.data.items);
            this.props.updateTotalCountPages(response.data.totalCount);
        })
    }



    render() {
        let pages = [];
        const totalPages = (this.props.totalCountPages / this.props.sizePage);

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.slice(0, 10).map((p) => {
                    return <span onClick={() => this.onClickPage(p)}
                                 className={this.props.currentPage === p && styles.currentPages}>{p}</span>
                })}
            </div>

            {this.props.users.map(u =>
                <div key={u.id}>
                    <img src={u.photos.small != null ? u.photos : userPhoto} className={styles} width={100}
                         height={100}/>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.followToggle(u.id)
                            }}>Followed</button>
                            : <button onClick={() => {
                                this.props.followToggle(u.id)
                            }}>UnFollowed</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.id}</div>

                </div>)}
        </div>
    }

}

export default Users;