import React from 'react';

const CollegeCompanion = ({ tasks }) => {
  return (
    <div className="college-companion">
      <header className="header">
        <h1 className="app-name">College Companion</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <main className="main-content">
        <aside className="sidebar">
          <div className="feature-list">
            <a href="/notes">
              <div className="feature">
                <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.25 6.75H8.75V8.25H13.25V6.75ZM15.5 0.75H2.5C1.4 0.75 0.5 1.65 0.5 2.75V15.25C0.5 16.35 1.4 17.25 2.5 17.25H15.5C16.6 17.25 17.5 16.35 17.5 15.25V2.75C17.5 1.65 16.6 0.75 15.5 0.75ZM15.5 15.25H2.5V2.75H15.5V15.25ZM11.75 11.75H6.25V13.25H11.75V11.75Z" fill="#374151"/>
                </svg>
                <span className="text">Notes</span>
              </div>
            </a>
            <a href="/timetable">
              <div className="feature">
                <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.9167 12.0833C12.8083 12.0833 12.7 12.0583 12.6 12.0167C12.4917 11.975 12.4083 11.9167 12.325 11.8417C12.175 11.6833 12.0833 11.475 12.0833 11.25C12.0833 11.1417 12.1083 11.0333 12.15 10.9333C12.1917 10.8333 12.25 10.7417 12.325 10.6583C12.4083 10.5833 12.4917 10.525 12.6 10.4833C12.9 10.3583 13.275 10.425 13.5083 10.6583C13.6583 10.8167 13.75 11.0333 13.75 11.25C13.75 11.3 13.7417 11.3583 13.7333 11.4167C13.725 11.4667 13.7083 11.5167 13.6833 11.5667C13.6667 11.6167 13.6417 11.6667 13.6083 11.7167C13.5833 11.7583 13.5417 11.8 13.5083 11.8417C13.35 11.9917 13.1333 12.0833 12.9167 12.0833ZM17.2913 1.66666H15.4163V2.33333C15.4163 2.69166 15.1247 2.99999 14.7497 2.99999C14.3747 2.99999 14.083 2.69166 14.083 2.33333V1.66666H8.91634V2.33333C8.91634 2.69166 8.62468 2.99999 8.24968 2.99999C7.87468 2.99999 7.58301 2.69166 7.58301 2.33333V1.66666H5.70801C4.76534 1.66666 3.99967 2.44166 3.99967 3.375V16.625C3.99967 17.5583 4.76534 18.3333 5.70801 18.3333H17.2913C18.233 18.3333 18.9997 17.5583 18.9997 16.625V3.375C18.9997 2.44166 18.233 1.66666 17.2913 1.66666ZM17.333 16.625C17.333 16.75 17.2163 16.875 17.083 16.875H5.91634C5.78301 16.875 5.66634 16.75 5.66634 16.625V7.20833H17.333V16.625ZM17.333 6.25H5.66634V3.375C5.66634 3.24166 5.78301 3.125 5.91634 3.125H7.58301V3.79166C7.58301 4.14999 7.87468 4.45833 8.24968 4.45833C8.62468 4.45833 8.91634 4.14999 8.91634 3.79166V3.125H14.083V3.79166C14.083 4.14999 14.3747 4.45833 14.7497 4.45833C15.1247 4.45833 15.4163 4.14999 15.4163 3.79166V3.125H17.2913C17.4247 3.125 17.5413 3.24166 17.5413 3.375V6.25H17.333Z"
                    fill="#374151" />
                </svg>
                <span className="text">Timetable</span>
              </div>
            </a>
            <a href="/schedule">
              <div className="feature">
                <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.00016 0.666504C4.40016 0.666504 0.66683 4.39984 0.66683 8.99984C0.66683 13.5998 4.40016 17.3332 9.00016 17.3332C13.6002 17.3332 17.3335 13.5998 17.3335 8.99984C17.3335 4.39984 13.6002 0.666504 9.00016 0.666504ZM12.4252 12.3165L11.6835 13.0505L8.17516 9.5505C8.0835 9.45817 8.00016 9.3165 8.00016 9.18317V5.33317H9.00016V8.9415L12.1752 12.1165L12.4252 12.3165Z"
                    fill="#374151" />
                </svg>
                <span className="text">Exam Schedule</span>
              </div>
            </a>
          </div>
        </aside>
        <div className="content">
          {/* Add your main content here */}
          <div className="add-task-area">
            <form method="post" action="/add-to-do" className="add-task">
              <input type="text" name="task" placeholder="Enter to do..." autocomplete="off" autofocus required />
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="to-do-list">
            <div className="to-do-tasks">
              <p>To-Do</p>
              <div className="to-do-tasks-sec">
                {tasks.map((task) => (
                  task.status !== 1 && (
                    <div className="task" key={task.id}>
                      <div className="todo-item">{task.task}</div>
                      <div className="task-status">
                        <span>{task.status === 1 ? 'Completed' : 'Not Completed'}</span>
                        <div className="td-button updt">
                          <a href={`/update/${task.id}`} className="task-update">Update</a>
                        </div>
                        <a href={`/delete/${task.id}`} className="task-delete">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                              fill="#F63B3B" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
            <div className="completed-tasks">
              <p>Completed</p>
              <div className="completed-tasks-sec">
                {tasks.map((task) => (
                  task.status === 1 && (
                    <div className="task" key={task.id}>
                      <div className="todo-item">{task.task}</div>
                      <div className="task-status">
                        <span>Completed</span>
                        <div className="td-button updt">
                          <a href={`/update/${task.id}`} className="task-update">Update</a>
                        </div>
                        <a href={`/delete/${task.id}`} className="task-delete">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                              fill="#F63B3B" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegeCompanion;
