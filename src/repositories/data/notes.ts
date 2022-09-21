import { INotes } from "../interfaces/INotes"; 

let notes: INotes = {
    0: {
        id: 0,
        name: "Shopping list",
        content: "Tomatoes, bread",
        category: 'Task',
        date: new Date("2022-09-15T13:47:12.283Z"),
        status: 'active'
    },
    1: {
        id: 1, 
        name: "New Feature",
        content: "Implement new feature to the project 10/10/2022",
        category: 'Idea',
        date: new Date("2022-09-10T13:47:12.283Z"),
        status: 'active'
    },
    2: {
        id: 2, 
        name: "New project",
        content: "Create new project",
        category: 'Task',
        date: new Date("2022-09-06T13:47:12.283Z"),
        status: 'active'
    },
    3: {
        id: 3,
        name: "Help mother",
        content: "Help mother with cooking for the party on 11.09.2022 and 12/09/2022",
        category: 'Task',
        date: new Date("2022-09-06T13:47:12.283Z"),
        status: 'active'
    },
    4: {
        id: 4,
        name: "Love to be Ukrainian",
        content: "Glory to Ukraine!",
        category: 'Random Thought',
        date: new Date("2022-09-04T13:47:12.283Z"),
        status: 'active'
    },
    5: {
        id: 5,
        name: "Save Earth, save people",
        content: "Take part in some events for supporting peace and happiness on our planet",
        category: 'Idea',
        date: new Date("2022-09-03T13:47:12.283Z"),
        status: 'active'
    },
    6: {
        id: 6,
        name: "Homework at the university",
        content: "Doing my homework",
        category: 'Task',
        date: new Date("2022-09-01T13:47:12.283Z"),
        status: 'active'
    }
  };

export default notes;