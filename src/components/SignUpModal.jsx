import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';

function SignUpModal({resetState}) {
    const [singUp, setSingUp] = useState({ first_name: "", last_name: "", email: "", password: "", cpassword: "" });

    const formSubmit = (e) => {
        e.preventDefault();
        let valid = formValidation()
        if (valid) {
            console.log("form is valid");

        } 

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
            setSingUp({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                cpassword: "",
            });
        }
    }, [resetState]); // Trigger the reset when `restState` changes




    return (
        <>
            <div class="modal fade" id="singUpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form id='singUpForm' onSubmit={(e) => formSubmit(e)}>

                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row">

                                    <div class="col-6 mb-3">
                                        <label for="" class="form-label">First Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="first_name"
                                            id="first_name"
                                            aria-describedby="helpId" required
                                            placeholder="" value={singUp.first_name} onChange={(e) =>
                                                setSingUp({ ...singUp, first_name: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div class="col-6 mb-3">
                                        <label for="" class="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="last_name"
                                            id="last_name"
                                            aria-describedby="helpId" required
                                            placeholder="" value={singUp.last_name} onChange={(e) =>
                                                setSingUp({ ...singUp, last_name: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">email</label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            id="email"
                                            aria-describedby="helpId" required
                                            placeholder="" value={singUp.email} onChange={(e) =>
                                                setSingUp({ ...singUp, email: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            id="password"
                                            aria-describedby="helpId" required
                                            placeholder="" value={singUp.password} onChange={(e) =>
                                                setSingUp({ ...singUp, password: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            name="cpassword"
                                            id="cpassword"
                                            aria-describedby="helpId" required
                                            placeholder="" value={singUp.cpassword} onChange={(e) =>
                                                setSingUp({ ...singUp, cpassword: e.target.value })
                                            }
                                        />
                                    </div>


                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Save changes</button>
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