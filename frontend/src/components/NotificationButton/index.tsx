import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";
function Notificationbutton() {
  return (
    <>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="notificar" />
      </div>
    </>
  );
}

export default Notificationbutton;
