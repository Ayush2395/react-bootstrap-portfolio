import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import RepoResult from "./RepoResult";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    console.log(searchInput);

    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <Form className="d-flex">
          <FormControl
            value={searchInput}
            onChange={handleChange}
            type="search"
            placeholder="Search username Ayush2395 or other"
            className="mt-3"
            aria-label="Search"
          />
        </Form>
        <Button
          onClick={handleSearch}
          className="mt-3"
          variant="outline-warning"
        >
          Search
        </Button>
        <RepoResult repos={repos} />
      </Container>
    </div>
  );
}

export default SearchBar;
