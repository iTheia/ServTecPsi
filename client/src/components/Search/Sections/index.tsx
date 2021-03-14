import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const sections = [
  { id: 1, label: "asdasd", checked: false },
  { id: 1, label: "asdasd", checked: false },
  { id: 1, label: "asdasd", checked: false },
  { id: 1, label: "asdasd", checked: false },
  { id: 1, label: "asdasd", checked: false },
  { id: 1, label: "asdasd", checked: false },
];
export default function Sections() {
  /* const { data, loading, setData } = useGet("post", []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => );
  };
 */
  return (
    <FormGroup style={{ border: "1px solid black", padding: 10 }}>
      <TextField
        label='Buscar'
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {sections.map((section, index) => (
        <FormControlLabel
          key={index}
          control={<Checkbox name='checkedB' color='primary' />}
          label='Filtro'
        />
      ))}
    </FormGroup>
  );
}
