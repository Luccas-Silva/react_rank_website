import icon from '../../assets/img/notification-icon.svg'

import './styles.css'

type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios('${BASE_URL}/sales/${id}/notification')
    .then(() => {
      toast.info("SMS enviado com sucesso");
    });
}

function NotificationButton({saleId} : Props) {
  return (
    <>
      <div className="dsrank-red-btn" onClick={() => hendleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    </>
  )
}

export default NotificationButton