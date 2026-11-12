import { useState, useEffect } from "react";
import "./index.css";

const ALL_CHANNELS = [
  { id: "email", label: "Email" },
  { id: "sms", label: "SMS" },
  { id: "viber", label: "Viber" },
  { id: "calls", label: "Звонки" },
];

const AbTestPage = () => {
  const [isThreeChannelGroup, setIsThreeChannelGroup] = useState(false);
  const [isExperimentReady, setIsExperimentReady] = useState(false);

  useEffect(() => {
    if (typeof window.ymab === "function") {
      window.ymab("metrika.114211829", "getFlags", (flags) => {
        const isBValue = flags["isB"] ? flags["isB"][0] : null;
        if (isBValue === "threeChannel") {
          setIsThreeChannelGroup(true);
        }
        setIsExperimentReady(true);
      });
    } else {
      console.warn("Varioqub not loaded, defaulting to control group");
      setIsExperimentReady(true);
    }
  }, []);

  // Убираем звонки, если пользователь в группе Б (threeChannel)
  const channelsToShow = isThreeChannelGroup
    ? ALL_CHANNELS.filter((ch) => ch.id !== "calls")
    : ALL_CHANNELS;

  // Инициализируем состояние checked на основе отфильтрованных каналов
  const [checked, setChecked] = useState(() =>
    Object.fromEntries(channelsToShow.map((ch) => [ch.id, false])),
  );

  // Пересоздаём checked при смене группы (на случай, если флаг пришёл позже)
  useEffect(() => {
    setChecked(Object.fromEntries(channelsToShow.map((ch) => [ch.id, false])));
  }, [isThreeChannelGroup]);

  const countChecked = Object.values(checked).filter(Boolean).length;
  const masterChecked = countChecked > 0;

  const handleMasterChange = () => {
    const newValue = !masterChecked;
    const newChecked = {};
    channelsToShow.forEach((ch) => (newChecked[ch.id] = newValue));
    setChecked(newChecked);
  };

  const handleChannelChange = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  let group = null;
  if (countChecked === 3) group = "А";
  else if (countChecked === 4) group = "Б";

  if (!isExperimentReady) {
    return <div className="ab-page">Загрузка эксперимента...</div>;
  }

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
            {channelsToShow.map((ch) => (
              <label key={ch.id} className="ab-item">
                <input
                  type="checkbox"
                  checked={checked[ch.id] || false}
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
            Выбрано каналов: <strong>{countChecked}</strong>.
          </p>
        )}
      </div>
    </div>
  );
};

export default AbTestPage;
