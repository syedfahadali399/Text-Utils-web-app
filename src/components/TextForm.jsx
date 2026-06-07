import { useState } from "react";

function TextForm({mode, showAlert}) {

  const [text, setText] = useState("")

  const uppercaseBtn = () => {
    let newText = text.toUpperCase()
    setText(newText)
    if(newText === "") {
      showAlert(null)
    } else {
      showAlert("Sucessfully convert to uppercase")
    }
  }

  const lowercaseBtn = () => {
    let newText = text.toLowerCase()
    setText(newText)
    if(newText === "") {
      showAlert(null)
    } else {
      showAlert("Sucessfully convert to lowercase")
    }
  }

  const clearBtn = () => {
    let newText = ""
    setText(newText)
    showAlert("Text has been cleared")
  }

  const copyBtn = () => {
    if(text !== "") {
      navigator.clipboard.writeText(text)
      showAlert("Text has been copied")
    } else {
      showAlert(null)
    }
  }

  const removeSpaceBtn = () => {
    let newText = text.replace(/\s+/g, "")
    setText(newText)
    if(newText === "") {
      showAlert(null)
    } else {
      showAlert("Spaces has been removed")
    }
  }

  return (
    <div className={`flex flex-col h-full gap-4 items-center justify-center p-4`}>
      <h1 className="text-2xl sm:text-3xl font-semibold mt-4 sm:mt-8 text-center px-4">
        Enter Text to Analyze below
      </h1>
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%]">
        <textarea
          id="message"
          rows="6"
          value={text}
          onChange={(e) => {setText(e.target.value)}}
          className="p-2.5 w-full h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 w-full sm:w-[90%] md:w-[80%] lg:w-[60%]">
        <button
          type="button"
          onClick={uppercaseBtn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Convert Uppercase
        </button>
        <button
          onClick={lowercaseBtn}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Convert Lowercase
        </button>
        <button
          onClick={clearBtn}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Clear Text
        </button>
        <button
          type="button"
          onClick={copyBtn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Copy Text
        </button>
        <button
          type="button"
          onClick={removeSpaceBtn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Remove Spaces
        </button>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 items-center w-full px-4 text-center mt-4">
        <h3 className="text-xl sm:text-2xl font-semibold">Your Text Summary</h3>
        <p className="text-sm sm:text-base">{text.length} characters and {(text.split(/\s+/)).filter(t => t !== "").length} words</p>
        <p className="text-sm sm:text-base">{0.008 * text.length} minutes to read</p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 items-center w-full sm:w-[90%] md:w-[80%] lg:w-[60%] px-4 mt-4 mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold">Preview</h3>
        <p className="break-words w-full text-center text-sm sm:text-base bg-gray-50 dark:bg-gray-800 p-4 rounded-lg min-h-[100px] border text-white border-gray-200 dark:border-gray-700">
          {!text ? "Nothing to preview" : text}
        </p>
      </div>
    </div>
  );
}

export default TextForm;
