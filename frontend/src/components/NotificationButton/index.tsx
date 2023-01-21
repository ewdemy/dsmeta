import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";
import axios from 'axios';
import { BASE_URL } from './../../utils/request';
import {toast} from "react-toastify"
type Props = {
  saleId: number;
}

function handleClick(id:number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(resp => {
      toast.success("SMS Envidado com Sucesso!")
    }).catch( err =>{
      toast.error("Erro ao enviar SMS: " + err.response.data.message)
    })
}

function Notificationbutton({saleId}: Props) {
  return (
    <>
      <div className="dsmeta-red-btn" onClick={()=> handleClick(saleId)} >
        <img src={icon} alt="notificar" />
      </div>
    </>
  );
}

export default Notificationbutton;
