import "./index.css";

const IframePage = () => {
  return (
    <div className="iframe-page">
      <iframe
        src="https://api.rbank.by/b288/card-app/entry?callbackUrlOnRefuse=https%3A%2F%2Fpm.by%2Fru%2Fpages%2Ffreespins-rbank-2026-failed%3Fid%3Dd70048b3-d15a-41c9-a11f-7a0dada69a15%26sig%3D1afb3e56868d11679da5610fdb57f50954349c76d97945a7351fd388bc46a852%26status%3Dinterrupted&callbackUrlOnSuccess=https%3A%2F%2Fpm.by%2Fru%2Fpages%2Ffreespins-rbank-2026-approved%3Fid%3Dd70048b3-d15a-41c9-a11f-7a0dada69a15%26sig%3D660efee95d844d719e1c17b3b61d4b62f5f9544cb812070355c4137e246e5bf0%26status%3Dfilled&partnerCode=Betera&sign=LfqG6PektIhHBKJYJpYkFw%3D%3D&terminal=SmartPaySite"
        title="Встроенная страница"
        className="iframe-full"
        allow="clipboard-write"
      />
    </div>
  );
};

export default IframePage;
