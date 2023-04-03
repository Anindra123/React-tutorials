import React, {
  Dispatch,
  HTMLAttributes,
  HTMLProps,
  HtmlHTMLAttributes,
  useState,
} from "react";
import styles from "./App.module.css";

interface TypeBarProps {
  barStyle: string;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  tTitle: string;
  setEnableBtn: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ButtonProps {
  buttonStyle: string;
  tList: tasks[];
  setTList: React.Dispatch<React.SetStateAction<tasks[]>>;
  tTitle: string;
  setTtitle: React.Dispatch<React.SetStateAction<string>>;
  enable: boolean;
  setEnableBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

type tasks = {
  title: string;
  completed: boolean;
  id: number;
};
interface TaskListProps {
  taskList: tasks[];
  setTList: React.Dispatch<React.SetStateAction<tasks[]>>;
}
interface TaskProp {
  task: tasks;
  taskList: tasks[];
  setTList: React.Dispatch<React.SetStateAction<tasks[]>>;
}

const Task: React.FC<TaskProp> = ({ task, taskList, setTList }) => {
  const setDone = (e: any) => {
    e.preventDefault();
    const copy = [...taskList];
    const idx: number = copy.findIndex((t) => t.id == e.currentTarget.value);
    console.log(idx);
    copy[idx].completed = true;
    setTList(copy);
  };

  return (
    <div className={styles.task}>
      <p>{task.title}</p>
      <button value={task.id} onClick={setDone}>
        Done
      </button>
    </div>
  );
};

const TaskList: React.FC<TaskListProps> = ({ taskList, setTList }) => {
  return (
    <div className={styles.taskList}>
      {taskList
        .filter((t: tasks) => t.completed === false)
        .map((t: tasks) => {
          return (
            <Task key={t.id} task={t} taskList={taskList} setTList={setTList} />
          );
        })}
    </div>
  );
};

const TypeBar: React.FC<TypeBarProps> = ({
  barStyle,
  setTaskTitle,
  tTitle,
  setEnableBtn,
}) => {
  const handleChange = (e: any) => {
    let value: string = e.currentTarget.value;
    setTaskTitle(value);
    value.length > 0 ? setEnableBtn(true) : setEnableBtn(false);
  };

  return (
    <>
      <input
        type="text"
        className={barStyle}
        placeholder="Enter your task name"
        value={tTitle}
        onChange={handleChange}
      />
    </>
  );
};

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  setTList,
  tList,
  tTitle,
  setTtitle,
  enable,
  setEnableBtn,
}) => {
  const setTask = (e: any) => {
    e.preventDefault();
    const copy = [...tList];
    const newT: tasks = {
      title: tTitle,
      completed: false,
      id: copy[copy.length - 1].id + 1,
    };
    setTList([...copy, newT]);
    setTtitle("");
    setEnableBtn(false);
  };

  return (
    <>
      {enable ? (
        <button className={buttonStyle} onClick={setTask}>
          Save
        </button>
      ) : (
        <button disabled={true} className={buttonStyle} onClick={setTask}>
          Save
        </button>
      )}
    </>
  );
};

const App = () => {
  const [taskList, setTasks] = useState<tasks[]>([
    {
      title: "Hello world",
      id: 1,
      completed: false,
    },
  ]);

  const [title, setTitle] = useState<string>("");
  const [enableBtn, setEnableBtn] = useState<boolean>(false);
  return (
    <div className={styles.App}>
      <h1>To Do List</h1>
      <div className={styles.search}>
        <TypeBar
          setEnableBtn={setEnableBtn}
          barStyle={styles.bar}
          setTaskTitle={setTitle}
          tTitle={title}
        />
        <Button
          buttonStyle={styles.button}
          tList={taskList}
          setTList={setTasks}
          tTitle={title}
          setTtitle={setTitle}
          enable={enableBtn}
          setEnableBtn={setEnableBtn}
        />
      </div>
      <TaskList taskList={taskList} setTList={setTasks} />
    </div>
  );
};

export default App;
