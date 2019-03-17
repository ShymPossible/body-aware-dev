const passport = require("passport");

module.exports = app => {
  // This route handler is the first step to authenticating the user
  // with Google OAuth2.0 using the Passport module.
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // This route handler retrieves the "code" query param from the callback URL
  // and exchanges it for the user's profile.
  app.get("/auth/google/callback", passport.authenticate("google"));
};
