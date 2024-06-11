import { Button, Card, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const clearForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            password: '',
            email: '',
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/");
        clearForm();
    };

    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mt: 7 }}>
                <Card variant="elevation" sx={{ p: 3}}>
                    <Typography component="h1" variant="h5" fontWeight="bold" align="center">
                        Registration Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className="mb-3"
                            margin="normal"
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className="mb-3"
                            margin="normal"
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className="mb-3"
                            margin="normal"
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="normal"
                            label="Password"
                            fullWidth
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ py: 2 }}>
                            SignUp
                        </Button>

                        <Typography mt={2} align="center">
                            Already have an account ? <a href="/">Login</a>
                        </Typography>
                    </form>
                </Card>
            </Container>
        </>
    )
}
