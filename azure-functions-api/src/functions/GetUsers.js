const { app } = require("@azure/functions");
const UsersList = require("./const/Users.json");

app.http("GetUsers", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`GET /GetUsers`);

    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(UsersList),
    };
  },
});
