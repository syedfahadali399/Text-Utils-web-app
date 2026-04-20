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
    <div className={`flex flex-col h-full gap-4 items-center justify-center`}>
      <h1 className="text-3xl font-semibold mt-8 md:text-2xl sm:text-xl">
        Enter Text to Analyze below
      </h1>
      <div className="w-[60%]">
        <textarea
          id="message"
          rows="4"
          cols={12}
          value={text}
          onChange={(e) => {setText(e.target.value)}}
          className=" p-2.5 w-full h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex flex-row gap-6">
        <button
        type="button"
          onClick={uppercaseBtn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Convert Uppercase
        </button>
        <button
          onClick={lowercaseBtn}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Convert Lowercase
        </button>
        <button
          onClick={clearBtn}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Clear Text
        </button>
        <button
          type="button"
          onClick={copyBtn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Copy Text
        </button>
        <button
          type="button"
          onClick={removeSpaceBtn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Remove Spaces
        </button>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-2xl font-semibold">Your Text Summary</h3>
        <p>{text.length} text and {(text.split(/\s+/)).filter(text => text !== "").length} words</p>
        <p>{0.008 * text.length} minutes to read</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-2xl font-semibold">Preview</h3>
        <p>{!text ? "Nothing to preview text": text}</p>
      </div>
    </div>
  );
}

export default TextForm;
