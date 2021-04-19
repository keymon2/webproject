/*
import React from 'react';

const MyToDo = (props) => {
    return (
        <div>
            MyToDo
        </div>
    );
};

export default MyToDo;
*/

import React from 'react';
import './MyToDo.css';

const MyToDo = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        To Do List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default MyToDo;