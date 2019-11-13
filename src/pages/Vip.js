import React from 'react'

class Vip extends React.Component {
    render() {
        return (
            <div className="container">
                            <div className="row">

                <div className="col-sm-6  px-4">
                    <h2>Cennik</h2>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Numer</th>
                                <th>Dni premium</th>
                                <th>Koszt (netto)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>70XX(X)	</td>
                                <td>1</td>
                                <td>0,50 zł	</td>
                            </tr>
                            <tr>
                                <td>72XX(X)	</td>
                                <td>7</td>
                                <td>2,00 zł</td>
                            </tr>
                            <tr>
                                <td>79XX(X)	</td>
                                <td>30</td>
                                <td>9,00 zł</td>
                            </tr>            
                        </tbody>
                    </table>
                </div>

                <div className="col-sm-6 px-4">
                <h2 >Wpisz kod</h2>
                    <p className="mt-2 content"> Wyślij SMS na numer, a następnie wpisz kod poniżej, 
                        aby doładować swoje konto:  </p>
                    <form>
                        <div className="form-group">
                            <label for="code">Kod SMS</label>
                            <input type="text" className="form-control" id="sms-code" placeholder="1234" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="accept" />
                            <label className="form-check-label" for="accept">Akceptuje regulamin</label>
                        </div>
                        <button type="submit" className="btn btn-dark">Użyj kodu</button>
                    </form>
                    </div>
                    </div>
            </div>)
    }
}

export default Vip;