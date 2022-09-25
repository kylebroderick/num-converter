import styles from "./Form.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form as BootstrapForm } from "react-bootstrap";
import { useState } from "react";

const Form = () => {
  const [int, setInt] = useState(null);
  const [romanNumeral, setRomanNumeral] = useState("");
  const intToRomanNumeral = (num) => {
    var digits = String(+num).split("");
    let key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ];
    let roman_num = "";
    let i = 3;
    while (i--) {
      roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
    }
    return Array(+digits.join("") + 1).join("M") + roman_num;
  };

  const handleChange = (e) => {
    setInt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRomanNumeral(intToRomanNumeral(int));
  };

  return (
    <div className={styles.container}>
      <Card style={{ maxWidth: "80%" }}>
        <Card.Body>
          <Card.Title>Number Converter</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Input an integer, and we'll convert it into a roman numeral!
          </Card.Subtitle>
          <BootstrapForm className={styles.form} onSubmit={handleSubmit}>
            <BootstrapForm.Group className="mb-3" controlId="formBasicEmail">
              <BootstrapForm.Label>Integer</BootstrapForm.Label>
              <BootstrapForm.Control
                type="number"
                placeholder="Enter integer"
                onChange={handleChange}
              />
            </BootstrapForm.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </BootstrapForm>
          <h5>Roman Numeral: {romanNumeral}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Form;
