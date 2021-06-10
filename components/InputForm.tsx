import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { Captions, RadarValues } from '../pages/index';

import { stringToColour } from '../utils';

interface InputFormProps {
  categories: Captions;
  setRadarValues: any;
  radarValues: RadarValues;
}

export default function InputForm(props: InputFormProps) {
  const {
    categories,
    setRadarValues,
    radarValues,
  } = props;

  const [values, setValues] = useState(radarValues.data);
  const [meta, setMeta] = useState({});

  const onChangeValue = (event: any) => {
    const controlType = event.target.type;
    const controlId = event.target.id;
    const controlValue = event.target.value;
    switch (controlType) {
      case "select-one":
        setValues({ ...values, [controlId]: parseInt(controlValue, 10) / 5 });
        break;
      case "text":
        setMeta({ userName: controlValue, color: stringToColour(controlValue) });
        break;

      default:
        console.log(`UNKNOWN TYPE: ${controlType}`);
        break;
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const tempVals = {
      data: values,
      meta,
    };
    setRadarValues(tempVals);
  }

  const getInputs = (categories: Captions) => {
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
            >
              <option>0</option>
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
      <Form.Group
        controlId={"name-input"}
      >
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
          type="input" 
          onChange={onChangeValue}
        />
      </Form.Group>
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