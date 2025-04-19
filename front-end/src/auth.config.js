export const msalConfig = {
  auth: {
    clientId: "2bf53e3f-380e-453b-8cbc-b98086125f3f",
    authority:
      "https://login.microsoftonline.com/9949c68e-528f-45f3-888d-99837562123b",
    redirectUri:
      "https://pooja-front-end-shiny-octo-infotech-bufkf2d3fhddbtd2.southeastasia-01.azurewebsites.net/", // or deployed URL
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};
