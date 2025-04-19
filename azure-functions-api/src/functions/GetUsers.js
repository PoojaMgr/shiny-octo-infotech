const { app } = require("@azure/functions");

app.http("GetUsers", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`GET /GetUsers`);

    const users = [
      { name: "Pooja", email: "pooja@example.com" },
      { name: "Thapa", email: "thapa@example.com" },
    ];

    return {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    };
  },
});
