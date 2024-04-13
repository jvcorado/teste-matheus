import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/person/${name}`);
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Personagem"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={handleNavigate}>Buscar</Button>
    </>
  );
};
