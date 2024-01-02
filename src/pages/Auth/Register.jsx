import React, { useEffect, useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleRegistration } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(true); // Состояние для отслеживания текущей формы
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token, navigate]);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      password,
    };
    console.log(data);
    dispatch(handleRegistration(data));
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: loginEmail,
      password: password,
    };
    console.log("Login:", loginData);
    // Здесь могут быть вызваны соответствующие действия для авторизации
  }

  const toggleForm = () => {
    setShowRegistrationForm(!showRegistrationForm); // Изменение состояния для отображения другой формы
  }

  return (
    <div className="formContainer">
      {showRegistrationForm ? (
        <Paper
          className="animatedForm registrationForm"
          sx={{
            padding: '40px',
            backgroundColor: '#f5f5f5',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
          }}
        >
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            onSubmit={handleRegistrationSubmit}
          >
            <h1 style={{ color: 'black', textAlign: 'center' }}>Registration</h1>
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              name="fullname"
              label="Full Name"
              required
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              label="Email"
              required
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              label="Password"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '20px' }}
            >
              Register
            </Button>
            <Button
              onClick={toggleForm} // Добавление переключателя между формами
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '20px' }}
            >
              Войти
            </Button>
          </form>
        </Paper>
      ) : (
        <Paper
          className="animatedForm loginForm"
          sx={{
            marginTop: '20px',
            padding: '40px',
            backgroundColor: '#f5f5f5',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
          }}
        >
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            onSubmit={handleLoginSubmit}
          >
            <h1 style={{ color: 'black', textAlign: 'center' }}>Login</h1>
            <TextField
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              type="email"
              name="loginEmail"
              label="Email"
              required
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="loginPassword"
              label="Password"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '20px' }}
            >
              Login
            </Button>
            <Button
              onClick={toggleForm} // Добавление переключателя между формами
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '20px' }}
            >
              Зарегистрироваться
            </Button>
          </form>
        </Paper>
      )}
    </div>
  )
}

export default Register;
