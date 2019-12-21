import React from 'react'
import './User.css'
class Login extends React.Component {
    render() {
        return (
            <div className="row">
            <div className="col-sm-4"></div>
            <div className="border form-div col-sm-4 w-100">
            <h2>Zaloguj </h2>
            <form id="form-login" className="m-2">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hasło</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Zapamiętaj mnie</label>
                </div>
                <button type="submit" className="btn btn-dark">Zaloguj</button>
            </form>
            </div>
            </div>
        )
    }
}
export default Login;