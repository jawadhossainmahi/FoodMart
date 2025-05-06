import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import { useForm } from "react-hook-form"
import axiosInstance from '../axiosConfig';
import { Bounce, toast } from 'react-toastify';

function SignUpModal({ resetState, setResetState, modalDataReset }) {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    const password = useRef();
    password.current = watch("password");
    const onSubmit = (data) => {
        const modalEl = document.getElementById('singUpModal');
        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        axiosInstance.post("/user/add-user", data)
            .then((res) => {
                console.log('Response:', res);  // Log the response from the server
                modal.hide();
                toast.success(res.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((err) => {
                $(modalEl).find("small").remove();
                if (err.response.data.errors) {

                    err.response.data.errors.forEach(element => {

                        document.querySelectorAll(`[name="${element.path}"]`).forEach(ele => {

                            console.log(ele);
                            const old_small = ele.parentElement.getElementsByTagName("small")[0];
                            if (old_small) {
                                old_small.remove();
                            }


                            let small = document.createElement("small");
                            small.style.color = "red";
                            small.innerText = element.msg;
                            ele.parentElement.appendChild(small);
                        })
                    });
                }

                console.log();
                toast.error(err.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

            });



        // err.errors.forEach(element => {
        //     document.querySelectorAll(`[name="${element.path}"]`).forEach(ele => {

        //         console.log(ele);

        //         let small = document.createElement("small");
        //         small.style.color = "red";
        //         small.innerText = element.msg;
        //         ele.parentElement.appendChild(small);
        //     })
        // });


    };
    const [singUp, setSingUp] = useState({ first_name: "", last_name: "", email: "", password: "", cpassword: "" });

    const formSubmit = (e) => {
        e.preventDefault();
        let valid = formValidation()


    }

    const formValidation = () => {
        if (singUp.password != singUp.cpassword) {
            showFormError("#cpassword", "Password did not matched");
            console.log("passwod did not matched");

            return false;
        } else {
            $("#singUpForm").find(".errorMsg").remove();
            return true;
        }
    }

    const showFormError = (selector, msg) => {
        $(selector).parent().find(".errorMsg").remove();
        $(selector).parent().append(`<small class="errorMsg" style="color:red;">${msg}</small>`);
    };


    // Reset the form state when modal is closed
    useEffect(() => {
        if (resetState) {
            console.log("Resetting the form");
            reset(); // Reset the form state and errors
            setResetState(false); // Reset the state to false after resetting the form
        }
    }, [resetState, setResetState]); // Trigger the reset when `restState` changes




    return (
        <>
            <div class="modal fade" id="singUpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form id='singUpForm' onSubmit={handleSubmit(onSubmit)}>

                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("first_name", { required: "First name is required", minLength: { value: 4, message: "Minimum 4 characters" } })}
                                            id="first_name"
                                        />
                                        {errors.first_name && <small className='errorMsg' style={{ color: "red" }}>{errors.first_name.message}</small>}
                                    </div>

                                    <div className="col-6 mb-3">
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("last_name", { required: "Last name is required", minLength: { value: 4, message: "Minimum 4 characters" } })}
                                            id="last_name"
                                        />
                                        {errors.last_name && <small className='errorMsg' style={{ color: "red" }}>{errors.last_name.message}</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            {...register("email", { required: "Email is required" })}
                                            id="email"
                                        />
                                        {errors.email && <small className='errorMsg' style={{ color: "red" }}>{errors.email.message}</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: { value: 4, message: "Minimum 4 characters" },
                                            })}
                                            id="password"
                                        />
                                        {errors.password && <small className='errorMsg' style={{ color: "red" }}>{errors.password.message}</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            {...register("cpassword", {
                                                required: "Confirm password is required",
                                                minLength: { value: 4, message: "Minimum 4 characters" },
                                                validate: value =>
                                                    value == password.current || "Passwords do not match",
                                            })}
                                            id="cpassword"
                                        />
                                        {errors.cpassword && <small className='errorMsg' style={{ color: "red" }}>{errors.cpassword.message}</small>}
                                    </div>



                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" disabled={isSubmitting} class="btn btn-primary">Save changes</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SignUpModal