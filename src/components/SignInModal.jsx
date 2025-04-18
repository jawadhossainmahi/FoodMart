import React from 'react'

function SignInModal() {
    return (
        <>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form >
                                <div className="row">
                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">Username</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="username"
                                            id="username"
                                            aria-describedby="helpId"
                                            placeholder=""
                                        />
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="" class="form-label">Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            name="username"
                                            id="username"
                                            aria-describedby="helpId"
                                            placeholder=""
                                        />
                                    </div>


                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInModal