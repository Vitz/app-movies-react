import React from 'react'
import './User.css'
class Register extends React.Component {
    render() {
        return (
            <div className="row">
            <div className="col-sm-4"></div>
            <div className="border form-div col-sm-4 w-100">
            <form id="form-login" className="m-2">
            <h2>Zarejestruj się </h2>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Konto wymaga potwierdzenia za pomocą linka aktywacyjnego.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hasło</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Powtórz hasło</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Akceptuje <a href="#">regulamin</a>.</label>
                </div>
                <button type="submit" className="btn btn-dark">Zarejestruj</button>
            </form>
            </div>
            </div>
        )
    }
}
export default Register;