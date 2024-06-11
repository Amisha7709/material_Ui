import { Button, Card, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        UserName: '',
        password: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const clearForm = () => {
        setFormData({
            UserName: '',
            password: '',
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login();
        navigate("/home");
        clearForm();
    };
    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mt: 7 }}>
                <Card variant="elevation" sx={{ p: 3 }}>
                    <Typography component="h1" variant="h5" fontWeight="bold" align="center">
                        Login Form
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField className="mb-3"
                            margin="normal"
                            fullWidth
                            label="UserName"
                            type="text"
                            name="UserName"
                            value={formData.UserName}
                            onChange={handleInputChange}
                        />
                        <TextField className="mb-3"
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ py: 2 }}>
                            Login
                        </Button>

                        <Typography mt={2} align="center">
                            Do not have an account ? <a href="/signUp">Sign up</a>
                        </Typography>
                    </form>
                </Card>
            </Container>
        </>
    )
}
