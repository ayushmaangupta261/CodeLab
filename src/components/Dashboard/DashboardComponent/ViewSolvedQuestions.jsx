import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
  compileCode,
  submitAssignment,
} from "../../../services/operations/codeApi.js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ViewSolvedQuestions = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("java");
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();
  const assignment = location.state?.question || {};

  // handle compilation of code
  const handleCompile = async () => {
    try {
      const response = await dispatch(
        compileCode({ code, input, lang: language })
      );

      if (response && response.result) {
        setOutput("Accepted");
      } else {
        setOutput("No output received.");
      }
    } catch (error) {
      setOutput("Error compiling code.");
    }
  };

  // submit solution
  const handleSubmit = async () => {
    try {
      await dispatch(
        submitAssignment(
          {
            code,
            language,
            assignmentId: assignment?.questionId?._id,
            input,
          },
          user?.user?.accessToken
        )
      );
    } catch (error) {
      // Handle error if needed
    }
  };

  // handle language change
  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(assignment.sampleCode?.[0]?.[selectedLanguage] || "");
  };

  useEffect(() => {
    if (assignment) {
      setLanguage(assignment.language || "java");
      setCode(assignment.code || "");
    }
  }, [assignment]);

  return (
    <div className="mx-auto  w-[95%] h-[90vh] flex flex-col gap-4">
      {/* Theory Section */}
      <div
        className="overflow-y-auto  rounded p-4 "
        style={{ maxHeight: "30vh", minHeight: "150px" }}
      >
        <div className="flex items-center  gap-x-2">
          <h2 className="text-xl font-bold text-green-300">Title : </h2>
          <p className="">{assignment?.questionId?.title || "No Title"}</p>
        </div>

        <div className="flex flex-col mt-4 gap-y-1">
          <h2 className="text-xl font-bold text-yellow-300">Description</h2>
          <p>{assignment?.questionId?.description || "No Description"}</p>
        </div>
      </div>

      {/* Editor Section */}
      <div className="flex flex-col flex-grow ">
        {/* Language Selector & Buttons */}
        <div className="flex flex-wrap justify-between items-center  gap-4 p-4  rounded">
          <div className="flex gap-x-4 items-center">
            <select
              className="border p-2 rounded bg-slate-950 text-white"
              value={language}
              onChange={handleChangeLanguage}
            >
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
            </select>
            <button
              className="bg-green-500 text-black px-4 py-2 rounded"
              onClick={handleCompile}
            >
              Run
            </button>
            <button
              className="bg-green-500 text-black px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          {/* Output Display */}
          <div className="flex items-center gap-x-3">
            <label className="font-medium">Output:</label>
            <p className="p-2 border w-[10rem] h-[2rem] rounded bg-gray-100 text-black flex justify-center items-center text-center">
              {output}
            </p>
          </div>
        </div>

        {/* Code Editor */}
        <CodeMirror
          value={code}
          height="15rem" // leaves room for buttons above
          width="100%"
          theme={dracula}
          extensions={[
            language === "java"
              ? java()
              : language === "python"
              ? python()
              : cpp(),
          ]}
          onChange={(value) => setCode(value)}
          className="border rounded w-[97%] mx-auto"
        />

        <div className="mt-4 ml-4">
          <p>
            Marks Obtained:{" "}
            {assignment.marks !== undefined ? assignment.marks : "N/A"}/10
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewSolvedQuestions;
