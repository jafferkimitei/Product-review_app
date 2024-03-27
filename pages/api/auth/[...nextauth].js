import NextAuth from "next-auth";
import Providers from "next-auth/providers";
 
const options = {
  providers: [
    Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: { //added
    signIn: "/sign-in",
  },
  database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  },
};
 
export default (req, res) => NextAuth(req, res, options);