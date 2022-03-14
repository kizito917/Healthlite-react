import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import { InputLabel, FormControl, Input } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Authservice from "../../services/auth.services";
import AlertComponent from "../../components/alerts/alert";
import AuthHelper from "../../helpers/login.helper";

 
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [text, setText] = useState("This is an info alert — check it out!");
    const [type, setType] = useState("error");

    const handleSignIn = () => {
        setLoading(true)
        const loginData = {
            email,
            password
        }
        const testLogindata = AuthHelper.validateLoginFields(loginData.email, loginData.password)
        if (testLogindata !== true) {
            setText(testLogindata);
            setType("error");
            setIsAlert(true)
            setTimeout(() => {
                setIsAlert(false)
                setLoading(false)
            }, 2000);
        } else {
            Authservice.processLogin(loginData)
            .then((response) => {
                localStorage.setItem("auth_status", response.data.verification_status)
                setLoading(false)
                setText("Login successful");
                setType("success");
                setIsAlert(true)
                setTimeout(() => {
                    setIsAlert(false);
                    setEmail("");
                    setPassword("");
                    navigate("/dashboard")
                }, 2000);
            })
            .catch((err) => {
                setLoading(false)
                setText(err);
                setType("error");
                setIsAlert(true)
                setTimeout(() => {
                    setIsAlert(false);
                    setEmail("");
                    setPassword("");
                }, 2000);
            })
        }
    }

    return (
        <>
            <section className="h-screen">
                <div>
                    <div className="content-area mt-14 pt-12 bg-white w-11/12 rounded-md lg:w-2/6">
                        <div className="text-center">
                            <img src="https://health-lite.netlify.app/img/logo.9a558a79.png" className="logo-img mb-2" width="50" alt="logo" />
                            <h4 className="text-bold">Sign in</h4>
                        </div>
                        <div className="form-area text-left px-12 mt-7">
                            {
                                isAlert && <AlertComponent text={text} type={type} />
                            }
                            <form>
                                <div className="form-group pb-4">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
                                        <Input
                                            required={true}
                                            id="standard-adornment-amount"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </FormControl>
                                </div>
                                <div className="form-group pb-4">
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Password</InputLabel>
                                        <Input
                                            required={true}
                                            id="standard-adornment-amount"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </FormControl>
                                </div>
                                <div className="form-group mt-4 mb-4">
                                    <small className="text-primary">Forgot password?</small>
                                </div>
                                <div className="form-group pb-4">
                                    <LoadingButton variant="contained" loading={loading} fullWidth="true" size="large" onClick={() => handleSignIn()}>Sign In</LoadingButton>
                                </div>
                            </form>
                            <h6 className="text-center text-sm pb-2 pt-4">New user? <b className="text-primary">Sign up to get started</b></h6>
                            <div class="flex flex-row mt-16 pb-20">
                                <div class="basis-1/2">
                                    <small>Need help?</small>
                                </div>
                                <div class="basis-1/4">
                                    <small>Privacy</small>
                                </div>
                                <div class="basis-1/4">
                                    <small>Terms & Policy</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;