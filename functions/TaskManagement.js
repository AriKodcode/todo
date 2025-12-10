import input from 'analiza-sync';
import changeDetils from './changedetils.js';
import changeStatus from './changeStatus.js';
import deleteTask from './deleteTask.js';
import findTask from './FindTask.js';
import createMission from './createMission.js';
import showBy from './showBy.js';
import showTasks from './showtasks.js';

export default function taskManagement() {
  console.log(`task Management
        press:
        1. for show tasks
        2. for create new task
        3. for edit detils
        4. for edit status
        5. for delete task
        6. for exit
        `);
}
