import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

// const options1 = ["Option 1", "Option 2"];

const UpdateProgram = () => {
  return (
    <div>
      {" "}
      <Formik
        initialValues={{
          command: "",
          controller: "",
          com: "",
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}>
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="command"
              type="command"
              label="command"
            />
            <br />
            <Field
              component={TextField}
              type="controller"
              label="controller"
              name="controller"
            />
            <br />
            <Field component={TextField} type="com" label="com" name="com" />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateProgram;
{
  /* <div>
<Form onSubmit={formik.handleSubmit}>
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
</Form>
</div> */
}
