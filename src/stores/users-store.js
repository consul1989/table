import { makeAutoObservable, runInAction } from 'mobx';
import { userService } from '../services/userService';

class UsersStore {
    users = [];
    isLoading = false;
    error = null;
    selectedUsers = [];

    constructor() {
        makeAutoObservable(this);
    }

    get selectedNames() {
        return this.selectedUsers.map(user => user.name);
    }

    getUsersAction = async () => {
        try {
            this.isLoading = true;
            const users = await userService.getUsers();

            runInAction(() => {
                this.users = users;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.isLoading = false;
                this.error = error;
            });
        }
    }

    addAllSelectedUsers = () => {
        this.selectedUsers = this.users.map(user => user);
    }

    removeAllSelectedUsers = () => {
        this.selectedUsers = [];
    }

    addSelectedUser = selectedUser => {
        this.selectedUsers.push(selectedUser);
    }

    removeSelectedUser = selectedUser => {
        this.selectedUsers = this.selectedUsers.filter(user => user.id !== selectedUser.id);
    }
}

export default new UsersStore();
