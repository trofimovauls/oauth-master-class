import axios from "axios";

const requests = {
  get: (url, headers) => axios.get(url, { headers }),
  post: (url, body) => axios.post(url, body),
};

window.onload = () => {
  YaAuthSuggest.init(
    {
      client_id: "c46f0c53093440c39f12eff95a9f2f93",
      response_type: "token",
      redirect_uri: "https://test.sso-test.kinopoisk.ru/suggest/token",
    },
    "https://test.sso-test.kinopoisk.ru"
  )
    .then(({ handler }) => handler())
    .then((data) => {
      console.log("Сообщение с токеном: ", data);
    })
    .catch((error) => console.log("Что-то пошло не так: ", error));
};
