import { IIdeNav } from "@/interface";
import React, { useState } from "react";

const fileTypes: Array<string> = ["c", "cpp", "py", "js", "java"];

export default function IdeNav({ Fontsize, Lang, Loading, HandleSubmit, handleFileChange, handleFileDownload }: IIdeNav): JSX.Element {
  return (
    <div className="py-2 px-4 w-full flex justify-between bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-6">
        <p className="text-sm font-medium">
          Language: <span className="font-bold text-purple-600 dark:text-green-400">{Lang}</span>
        </p>

        <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
          <label htmlFor="file-input" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <p className="text-sm">Upload</p>
          </label>
          <input
            type="file"
            id="file-input"
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files)}
          />
        </div>

        <button onClick={handleFileDownload} className="flex items-center space-x-2 hover:opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <p className="text-sm">Download</p>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {Loading && (
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-purple-600 dark:border-green-400"></div>
        )}
        <button className="py-1 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-700 dark:bg-green-500 dark:hover:bg-green-700" onClick={HandleSubmit}>
          Run
        </button>
      </div>
    </div>
  );
}