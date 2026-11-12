import "./index.css";

const ConfirmPage = () => {
  return (
    <div className="confirmPageWrapper">
      <p>
        Мы обновили флоу сбора согласий на рекламные рассылки и ждем от тебя
        согласий
      </p>
      <button
        onClick={() =>
          window.location.assign(
            "https://pm.by/ru/popup/ad/notification-agreement/",
          )
        }
      >
        дать согласия
      </button>
    </div>
  );
};

export default ConfirmPage;
