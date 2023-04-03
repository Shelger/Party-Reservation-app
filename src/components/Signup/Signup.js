import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FilledInput from "@mui/material/FilledInput";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { signUp } from "../../functions/company";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        LaserBlast
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignupS() {
  const [values1, setValues1] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [values2, setValues2] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const history = useHistory();
  const [signupError, setSignupError] = useState(0);
  const [username, setUserName] = useState();

  const handleChange1 = (prop) => (event) => {
    setValues1({ ...values1, [prop]: event.target.value });
  };

  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues1({
      ...values1,
      showPassword: !values1.showPassword,
    });
  };

  const handleClickShowPassword2 = () => {
    setValues2({
      ...values2,
      showPassword: !values2.showPassword,
    });
  };

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
    console.log(values2.showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values1.password !== values2.password) {
      setSignupError(2);
    } else {
      try {
        const code = await signUp({
          username: username,
          password: values1.password,
        });
        if (code.status === 200) {
          setSignupError(0);
          history.push("/company/login");
        }
        if (code === null) {
          setSignupError(1);
        }
      } catch (err) {
        setSignupError(1);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create an Account
            </Typography>
            {signupError === 1 && (
              <Typography component="h1" variant="body2" sx={{ mt: 2 }}>
                Sorry, username has been taken.
              </Typography>
            )}
            {signupError === 2 && (
              <Typography component="h1" variant="body2" sx={{ mt: 2 }}>
                Sorry, please check your password.
              </Typography>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <FormControl fullWidth sx={{ mt: 2, mb: 2 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Username
                </InputLabel>
                <FilledInput
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  onChange={(event) => setUserName(event.target.value)}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mt: 2, mb: 2 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={values1.showPassword ? "text" : "password"}
                  value={values1.password}
                  onChange={handleChange1("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword1}
                        edge="end"
                      >
                        {values1.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl fullWidth sx={{ mt: 2, mb: 2 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={values2.showPassword ? "text" : "password"}
                  value={values2.password}
                  onChange={handleChange2("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                      >
                        {values2.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              {/* new */}

              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Go back to homepage
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/company/login" variant="body2">
                    Already have an account? Sign In!
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(event) => {
                  handleSubmit(event);
                }}
              >
                Create
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
