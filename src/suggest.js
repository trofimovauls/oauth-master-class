import axios from "axios";

const requests = {
  get: (url, headers) => axios.get(url, { headers }),
  post: (url, body) => axios.post(url, body),
};

window.onload = () => {
  YaAuthSuggest.init(
    {
      client_id: "f8c0fb137ddc4bd2acea1a1489b5ae1b",
      response_type: "token",
      redirect_uri: "https://oauth-master-class.vercel.app/token2.html",
    },
    "https://oauth-master-class.vercel.app"
  )
    .then(({ handler }) => handler())
    .then(async (data) => {
      console.log("Сообщение с токеном: ", data);

      const result = await requests.get(
        `https://login.yandex.ru/info?format=json&oauth_token=${data.access_token}`
      );

      console.log("Сообщение с ответом Яндекса: ", result);
    })
    .catch((error) => console.log("Что-то пошло не так: ", error));
};
