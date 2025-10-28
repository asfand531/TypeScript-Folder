import React, { useState, useEffect } from "react";
import "./HeroSection.css";

interface HeroSectionProps {
  theme: string;
}

type Todo = {
  priority: string;
  title: string;
  todo: string;
};

type CurrentPage = number;

type ItemsPerPage = number;

function HeroSection({ theme }: HeroSectionProps): React.JSX.Element {
  const [inputKM, setInput] = useState<Todo>({
    priority: "",
    title: "",
    todo: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showAlertBox, setShowAlertBox] = useState<boolean>(false);
  const showPerPage: number[] = [5, 10, 15, 20];
  const [currentPage, setCurrentPage] = useState<CurrentPage>(1);
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(5);

  const options: string[] = [
    "Urgent & Important (Do First)",
    "Important & Not Urgent (Schedule)",
    "Urgent & Not Important (Delegate)",
    "Not Urgent & Not Important (Eliminate)",
  ];

  const handleReset = (): void => {
    setInput({
      priority: "",
      title: "",
      todo: "",
    });
  };

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (
      inputKM.priority.trim() === "" ||
      inputKM.title.trim() === "" ||
      inputKM.todo.trim() === ""
    ) {
      alert("Input fields are required!");
      return;
    }
    setTodos([
      ...todos,
      {
        priority: inputKM.priority.trim(),
        title: inputKM.title.trim(),
        todo: inputKM.todo.trim(),
      },
    ]);
    setInput({
      priority: "",
      title: "",
      todo: "",
    });
    setShowAlertBox(true);
    setTimeout(() => {
      setShowAlertBox(false);
    }, 5000);
  };

  const totalPages: number = Math.ceil(todos.length / itemsPerPage);

  const handleFirstPage = () => setCurrentPage(1);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleLastPage = () => setCurrentPage(totalPages);

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleCloseIcon = () => {
    setShowAlertBox(false);
  };

  const successIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="rgb(0, 90, 0)"
    >
      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="rgb(0, 90, 0)"
      className="closeIcon"
      onClick={handleCloseIcon}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );

  const showAlert = (): React.JSX.Element => {
    return (
      <p className="alertBox">
        <span className="successPara">
          {successIcon} Your todo has been added in the table
        </span>
        {closeIcon}
      </p>
    );
  };

  useEffect((): void => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div
        className={
          theme === "dark" ? "dark_hero_container" : "light_hero_container"
        }
      >
        <section
          className="alertSection"
          style={{ display: showAlertBox ? "" : "none" }}
        >
          {showAlertBox && showAlert()}
        </section>

        <section className="formSection">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAdd(e);
              console.debug(e);
            }}
          >
            <h1 className="heading">Todo form</h1>
            <label htmlFor="priority">Priority Level</label>
            <select
              name="priority"
              id="priority"
              className="input"
              value={inputKM.priority}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, priority: e.target.value }))
              }
              required
            >
              <option value="" disabled>
                Choose your option
              </option>
              {options.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <label htmlFor="title" className="label">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Todo's title"
              className="input"
              value={inputKM.title}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
            <label htmlFor="todo" className="label">
              Todo
            </label>
            <textarea
              name="todo"
              id="todo"
              rows={5}
              placeholder="Todo's message"
              className="input"
              value={inputKM.todo}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, todo: e.target.value }))
              }
              required
            />
            <footer className="add_btn_container">
              <button
                className="add_btn"
                type="submit"
                title="Add"
                disabled={
                  inputKM.priority.trim() === "" ||
                  inputKM.title.trim() === "" ||
                  inputKM.todo.trim() === ""
                }
              >
                Add
              </button>
              <button
                className="reset_btn"
                type="button"
                onClick={handleReset}
                title="Reset"
                disabled={
                  inputKM.priority.trim() === "" ||
                  inputKM.title.trim() === "" ||
                  inputKM.todo.trim() === ""
                }
              >
                Reset
              </button>
            </footer>
          </form>
        </section>

        <section className="todoSection">
          <div className="todoHeading">
            <h2 className="totalTodos">Todo list</h2>
            <p className="totalTodos">
              Total number of{" "}
              <span>{todos.length <= 1 ? "todo" : "todos"}</span>:{" "}
              {todos.length}
            </p>
          </div>
          <table>
            <thead>
              <tr>
                <th className="numberCol">No#</th>
                <th className="priorityCol">Priority Level</th>
                <th>Title</th>
                <th>Todo</th>
              </tr>
            </thead>

            <tbody>
              {todos
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td className="numberCol">{index + 1}</td>
                    <td className="priorityCol">{item.priority}</td>
                    <td>{item.title}</td>
                    <td>{item.todo}</td>
                  </tr>
                ))}
            </tbody>

            {todos.length > 0 && (
              <tfoot>
                <tr>
                  <td colSpan={4}>
                    <div className="table_footer">
                      <button
                        className="first_btn"
                        title="Go to first page"
                        onClick={handleFirstPage}
                        disabled={currentPage === 1}
                      >
                        &lt;&lt; First
                      </button>
                      <button
                        className="prev_btn"
                        title="Go to previous page"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                      >
                        &lt; Prev
                      </button>
                      <span className="numberOfPages">
                        {currentPage} of {totalPages} page
                        {totalPages > 1 ? "s" : ""}
                      </span>
                      <button
                        className="next_btn"
                        title="Go to next page"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                      >
                        Next &gt;
                      </button>
                      <button
                        className="last_btn"
                        title="Go to last page"
                        onClick={handleLastPage}
                        disabled={currentPage === totalPages}
                      >
                        Last &gt;&gt;
                      </button>
                      <select
                        name="item_per_page"
                        id="item_per_page"
                        className="perPage"
                        title="Items per page"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        disabled={todos.length <= 5}
                      >
                        {showPerPage.map((number, index) => (
                          <option key={index} value={number}>
                            {number} / page
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
