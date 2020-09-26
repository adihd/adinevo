import React from "react";
import { Formik, useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const options1 = ["Option 1", "Option 2"];

const UpdateProgram = () => {
  const formik = useFormik({
    initialValues: {
      command: "",
      controller: "",
      com: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Choose or enter command</label>
        <input
          type="text"
          id="command"
          name="command"
          onChange={formik.handleChange}
          value={formik.values.command}
        />

        <label htmlFor="name">Choose or enter controller </label>
        <input
          type="text"
          id="controller"
          name="controller"
          onChange={formik.handleChange}
          value={formik.values.controller}
        />

        <label htmlFor="name">Choose or enter COM port </label>
        <input
          type="text"
          id="com"
          name="com"
          onChange={formik.handleChange}
          value={formik.values.com}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProgram;
