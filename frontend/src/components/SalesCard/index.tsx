import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
function SalesCard() {
  return (
    <>
      <div className="dsmeta-card">
        <h2>Vendas</h2>
        <div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={new Date()}
              onChange={(date: Date) => {}}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={new Date()}
              onChange={(date: Date) => {}}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show900">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show900">Visitas</th>
                <th className="show900">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show900">01</td>
                <td className="show576">14/11/2022</td>
                <td>Mike</td>
                <td className="show900">10</td>
                <td className="show900">7</td>
                <td>R$ 500,00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show900">01</td>
                <td className="show576">14/11/2022</td>
                <td>Mike</td>
                <td className="show900">10</td>
                <td className="show900">7</td>
                <td>R$ 500,00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show900">01</td>
                <td className="show576">14/11/2022</td>
                <td>Mike</td>
                <td className="show900">10</td>
                <td className="show900">7</td>
                <td>R$ 500,00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SalesCard;
