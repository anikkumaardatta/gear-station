// get JWT token
export const JWTtokenByUserEmail = (para) => {
  fetch(`https://gear-station-server.vercel.app/jwt`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(para),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("gear-token", data.token);
    });
};
