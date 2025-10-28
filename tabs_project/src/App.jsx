import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(false);
  let [activeTabIndex, setActiveTabIndex] = useState(0);
  let lastTab;

  const arr = [
    {
      id: 1,
      label: "Tab 1",
      content: "Tab 1...",
    },
    {
      id: 2,
      label: "Tab 2",
      content: "Tab 2...",
    },
    {
      id: 3,
      label: "Tab 3",
      content: "Tab 3...",
    },
    {
      id: 4,
      label: "Tab 4",
      content: "Tab 4...",
    },
    {
      id: 5,
      label: "Tab 5",
      content: "Tab 5...",
    },
    {
      id: 6,
      label: "Tab 6",
      content: "Tab 6...",
    },
    {
      id: 7,
      label: "Tab 7",
      content: "Tab 7...",
    },
    {
      id: 8,
      label: "Tab 8",
      content: "Tab 8...",
    },
    {
      id: 9,
      label: "Tab 9",
      content: "Tab 9...",
    },
    {
      id: 10,
      label: "Tab 10",
      content: "Tab 10...",
    },
    {
      id: 11,
      label: "Tab 11",
      content: "Tab 11...",
    },
    {
      id: 12,
      label: "Tab 12",
      content: "Tab 12...",
    },
    {
      id: 13,
      label: "Tab 13",
      content: "Tab 13...",
    },
    {
      id: 14,
      label: "Tab 14",
      content: "Tab 14...",
    },
    {
      id: 15,
      label: "Tab 15",
      content: "Tab 15...",
    },
    {
      id: 16,
      label: "Tab 16",
      content: "Tab 16...",
    },
  ];

  const handleMoveTabForward = () => {
    if (activeTabIndex < arr.length - 1) {
      setActiveTabIndex((prev) => prev + 1);
    }
  };

  const handleMoveTabBackward = () => {
    if (activeTabIndex > 0) {
      setActiveTabIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const container = document.getElementById("container");
    container.style.transform = `translateX(-${activeTabIndex * 75}px)`;
    container.style.transition = "all 0.5s ease-in-out";
  }, [activeTabIndex]);

  return (
    <>
      <div className="main_container">
        <button
          className="tab_btn"
          id="backwardBtn"
          onClick={handleMoveTabBackward}
          disabled={activeTabIndex === 0}
        >
          &lt;
        </button>
        <div className="container">
          <div id="container">
            {arr.map((item, index) => {
              const { id, label, content } = item;
              lastTab = index;
              return (
                <button
                  key={index}
                  role="tab"
                  className="tab_btn"
                  onClick={() => {
                    setActiveTabIndex(index);
                    if (index === id - 1) {
                      setActiveTab(true);
                    } else {
                      setActiveTab(false);
                    }
                  }}
                  id="tab_btn"
                >
                  {label}
                  {activeTab && <h2 key={id}>{content}</h2>}
                </button>
              );
            })}
          </div>
        </div>
        <button
          className="tab_btn"
          id="forwardBtn"
          onClick={handleMoveTabForward}
          disabled={activeTabIndex >= lastTab}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default App;
