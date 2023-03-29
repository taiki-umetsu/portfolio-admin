import React, { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { User } from "@/interfaces";

const CustomLoginForm = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user).catch(() => notify("Invalid email or password"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 10,
        }}
      >
        <Box sx={{ mb: 1 }}>
          <p>Welcome to the admin page!</p>
        </Box>
        <Typography variant="h6" component="h1">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: "100%",
              mt: 1,
            }}
          >
            <TextField
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              label="Email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              label="Password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CustomLoginForm;
