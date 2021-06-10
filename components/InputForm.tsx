import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { Captions, RadarValues } from '../pages/index';

interface InputFormProps {
  categories: Captions;
  setRadarValues: any;
}

export default function InputForm(props: InputFormProps) {
  const {
    categories,
    setRadarValues,
  } = props;

  const [values, setValues] = useState<RadarValues | undefined>(undefined);

  const onChangeValue = (event: any) => {
    setValues({ ...values, [event.target.id]: parseInt(event.target.value, 10) / 5 });
    // console.log(`${event.target.id}: ${event.target.value}`);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(values);
    setRadarValues(values);
  }

  const getInputs = (
    categories: Captions) => {
    return (
      Object.entries(categories).map(([category, val], idx) => {
        return (
          <Form.Group
            key={idx}
            controlId={`${category}`}
          >
            <Form.Label>{val}</Form.Label>
            <Form.Control
              as="select"
              onChange={onChangeValue}
              defaultValue={"default"}
            >
              <option hidden disabled value={"default"}> -- select an option -- </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        )
      })
    );
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      {getInputs(categories)}
      <Button
        type="submit"
        className="mb-2"
      >
        Submit
      </Button>
    </Form>
  )
}