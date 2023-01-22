module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  app: {
    keys: env.array("APP_KEYS"),
  },
});

// vercel token : LcQWrW1BU6JZChDD7v9tWJhi
// project id : prj_TevYUTGEBWal7EejDPxNKAxIRjxC
// deployhook: "https://api.vercel.com/v1/integrations/deploy/prj_TevYUTGEBWal7EejDPxNKAxIRjxC/2MbqcedWLU"
//  roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
