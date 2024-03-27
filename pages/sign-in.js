import { signIn } from "next-auth/client";
 
export default function CustomSignInPage() {
  return (
    <div>
      <h1>Welcome to your custom sign-in page</h1>
      <button onClick={signIn}>Sign in with Github</button>
    </div>
  );
}