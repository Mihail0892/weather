import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../../api/requests/index";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const getWeather = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(city));
  };
  return (
    <div className={styles.formWrapper}>
      <Form onSubmit={getWeather}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter the name of the city"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit" variant="primary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Search;
