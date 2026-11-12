import { useState } from "react";

import "./index.css";

const CHANNELS = [
  { id: "email", label: "Email" },
  { id: "sms", label: "SMS" },
  { id: "viber", label: "Viber" },
  { id: "calls", label: "Звонки" },
];

const AbTestPage = () => {
  const [checked, setChecked] = useState({
    email: false,
    sms: false,
    viber: false,
    calls: false,
  });

  const countChecked = Object.values(checked).filter(Boolean).length;
  const allChecked = countChecked === CHANNELS.length;

  // Мастер-чекбокс: включён, если выбран хотя бы один канал
  const masterChecked = countChecked > 0;

  const handleMasterChange = () => {
    if (masterChecked) {
      // был включён (есть выбранные) → выключаем все
      setChecked({ email: false, sms: false, viber: false, calls: false });
    } else {
      // был выключен (нет выбранных) → включаем все
      setChecked({ email: true, sms: true, viber: true, calls: true });
    }
  };

  const handleChannelChange = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Группа: A при 3 каналах, Б при 4
  let group = null;
  if (countChecked === 3) group = "А";
  else if (countChecked === 4) group = "Б";

  return (
    <div className="ab-page">
      <h1>А/Б тестирование каналов коммуникации</h1>
      <p className="ab-desc">
        Тут мы тестируем каналы коммуникации. Если количество каналов
        коммуникации на экране = 3, то вы находитесь в группе А, если количество
        = 4, то вы находитесь в группе Б
      </p>

      <div className="ab-block">
        <label className="ab-master">
          <input
            type="checkbox"
            checked={masterChecked}
            onChange={handleMasterChange}
          />
          <span>Все каналы</span>
        </label>

        <details className="ab-dropdown" open>
          <summary>Каналы связи ({countChecked} выбрано)</summary>
          <div className="ab-list">
            {CHANNELS.map((ch) => (
              <label key={ch.id} className="ab-item">
                <input
                  type="checkbox"
                  checked={checked[ch.id]}
                  onChange={() => handleChannelChange(ch.id)}
                />
                <span>{ch.label}</span>
              </label>
            ))}
          </div>
        </details>
      </div>

      <div className="ab-status">
        {group ? (
          <p>
            Выбрано каналов: <strong>{countChecked}</strong> → вы в{" "}
            <strong>группе {group}</strong>
          </p>
        ) : (
          <p className="ab-status-muted">
            Выбрано каналов: <strong>{countChecked}</strong>. Выберите 3 или 4
            канала, чтобы определить группу.
          </p>
        )}
      </div>
    </div>
  );
};

export default AbTestPage;
