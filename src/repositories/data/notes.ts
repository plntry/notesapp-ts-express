import { INotes } from "../interfaces/INotes"; 

let notes: INotes = {
    0: {
        id: 0,
        date: new Date("2022-09-01T13:47:12.283Z"),
        status: 'active',
        name: "Shopping list",
        content: "Tomatoes, bread",
        category: 'Task'
    },
    1: {
        id: 1, 
        date: new Date("2022-09-03T13:47:12.283Z"),
        status: 'active',
        name: "New Feature",
        content: "Implement new feature to the project 10/10/2022",
        category: 'Idea'
    },
    2: {
        id: 2, 
        date: new Date("2022-09-04T13:47:12.283Z"),
        status: 'active',
        name: "New project",
        content: "Create new project",
        category: 'Task'
    },
    3: {
        id: 3,
        date: new Date("2022-09-06T13:47:12.283Z"),
        status: 'active',
        name: "Help mother",
        content: "Help mother with cooking for the party on 11.09.2022 and 12/09/2022",
        category: 'Task'
    },
    4: {
        id: 4,
        date: new Date("2022-09-06T13:47:12.283Z"),
        status: 'active',
        name: "Love to be Ukrainian",
        content: "Glory to Ukraine!",
        category: 'Random Thought'
    },
    5: {
        id: 5,
        date: new Date("2022-09-10T13:47:12.283Z"),
        status: 'active',
        name: "Save Earth, save people",
        content: "Take part in some events for supporting peace and happiness on our planet",
        category: 'Idea'
    },
    6: {
        id: 6,
        date: new Date("2022-09-15T13:47:12.283Z"),
        status: 'active',
        name: "Homework at the university",
        content: "Doing my homework",
        category: 'Task'
    }
  };

export default notes;