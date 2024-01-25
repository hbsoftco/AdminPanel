export interface ITaskList {
    name: string;
    assigned: {
        name: string;
        avatar: string;
    };
    deadline: string;
    status: string;
    completion: string;
    priority: string;
}