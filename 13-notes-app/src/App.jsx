import React from "react";
import { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, settask] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, detail });
    settask(copyTask);
    console.log(copyTask);

    setDetail("");

    setTitle("");
  };
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };
  return (
    <div className="bg-black lg:flex h-screen text-white">
      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
        className="flex items-start flex-col gap-4 lg:w-1/2 p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full border-2 font-medium outline-none py-2 rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* DETAILED WALA INPUT  */}

        <textarea
          className="w-full h-32 flex items-start flex-row outline-none border-2 rounded px-5 py-2"
          placeholder="Write Details"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-amber-50 font-medium text-black px-5 w-full py-2 rounded active:bg-gray-200">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 bg-black p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 bg-cover  rounded-2xl text-black p-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/071/295/010/small/old-torn-paper-page-with-spiral-binding-isolated-on-transparent-background-png.png')]"
              >
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-5 right-3 p-1 text-xs rounded-full"
                >
                  <X size={18} strokeWidth={2.75} />
                </button>
                <h3 className="leading0tight text-l pt-5 pl-5 font-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 pl-5 text-xs leading-tight font-medium text-gray-500 overflow-hidden">
                  {elem.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
