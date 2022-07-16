import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import logo from '../../assets/img/logo.svg'

import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 730));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <>
            <div className="dsrank-card">
                <div className="dsrank-title">
                    <h2 className="dsrank-sales-title">Vendas
                        <p>⠀⠀</p>
                        <div className="dsrank-form-control-container">
                            <DatePicker
                                selected={minDate}
                                onChange={(date: Date) => setMinDate(date)}
                                className="dsrank-form-control"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <div className="dsrank-form-control-container">
                            <DatePicker
                                selected={maxDate}
                                onChange={(date: Date) => setMaxDate(date)}
                                className="dsrank-form-control"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                    </h2>
                    <img src={logo} alt="DSRank" />
                </div>

                <div>
                    <table className="dsrank-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsrank-red-btn-container">
                                        <div className="dsrank-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsrank-red-btn-container">
                                        <div className="dsrank-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsrank-red-btn-container">
                                        <div className="dsrank-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsrank-red-btn-container">
                                        <div className="dsrank-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsrank-red-btn-container">
                                        <div className="dsrank-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsrank-red-btn-container">
                                        <div className="dsrank-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsrank-red-btn-container">
                                        <div className="dsrank-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard