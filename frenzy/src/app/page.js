"use client";

import * as React from "react"
import axios from "axios";
import { useFormState } from 'react-dom';


export function Submit() {
  async function submit(prevState, formData) {
    console.log(formData);
    if (!formData) return "Enter some fractions!";
    const f1 = formData.get("f1");
    const f2 = formData.get("f2");
    const op = formData.get("operator");
    const reg = /^(\-)?(\d+(?:(?: \d+)*\/[1-9]+)?)$/;
    try{
      if (reg.test(f1) && reg.test(f2)){
        const response = await axios.get(`http://localhost:3000/url`, {params: {f1: f1, f2: f2, op: op}});
        return response.data.toString();
      } else if (!reg.test(f1) && !reg.test(f2)) {
        throw new Error("\"" + f1 +"\" and \"" +f2 +"\" are not valid fractions");
      } else if (!reg.test(f1)) {
        throw new Error("\"" +f1+"\" is not a valid fraction");
      } else {
        throw new Error("\"" +f2+"\" is not a valid fraction");
      }
    } catch (err) {
      return err.toString();
    }
  }
  const [message, formAction] = useFormState(submit, null);

  
  return (
      <form action={formAction} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fraction 1</label>
          <input id="f1" name="f1" placeholder="1 1/2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div>
          <select name="operator" className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <br/>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fraction 2</label>
          <input name="f2" placeholder="26" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate</button>
        <div>{!!message && <p><br></br>Result: {message}</p>}</div>

      </form>
    );
}

const App = () => {
  return (
    <main>
      <br></br>
      <h1 className="text-center">
        Welcome to Fraction Frenzy!
        <br></br>
        <span><i>Your one stop shop for fraction calculations.</i></span>
      </h1>
      <br></br>
      <Submit/>
      
    </main>
  );
}

export default App

