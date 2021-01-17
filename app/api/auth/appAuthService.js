import client from "../client";
import jwtDecode from "jwt-decode";

const ping = () => {
  return client.get("/ping");
};

const handleSignin = async (
  signinInfo,
  authContext,
  setLoading,
  setSigninError
) => {
  const { email, password } = signinInfo;
  setLoading(true);
  const response = await client.post("/auth/signin", {
    email: email,
    password: password,
  });
  setLoading(false);
  console.log(response.data);

  if (!response.ok) {
    switch (response.status) {
      case 404: {
        setSigninError("Sorry, email or password is incorrect.");
        break;
      }
      default: {
        setSigninError("Sorry, something went wrong.");
      }
    }
  } else {
    const user = jwtDecode(response.data["token"]);
    authContext.setUser(user);
  }
};

const handleSignup = async (
  signupInfo,
  authContext,
  setLoading,
  setSignupError
) => {
  const { email, password } = signupInfo;

  setLoading(true);
  const signupResponse = await client.post("/auth/signup", {
    email: email,
    name: "Test name",
    password: password,
  });
  // console.log(signupResponse);
  setLoading(false);

  if (!signupResponse.ok) {
    setSignupError(signupResponse.data["error"]);
  } else {
    //Signin them in.
    setLoading(true);
    const signinResponse = await client.post("/auth/signin", {
      email: email,
      password: password,
    });
    // console.log(signinResponse);
    setLoading(false);

    if (!signinResponse.ok) {
      switch (response.status) {
        case 400: {
          setSigninError(signupResponse.data["error"]);
          break;
        }
        default: {
          setSigninError("Sorry, something went wrong.");
        }
      }
    } else {
      const user = jwtDecode(signinResponse.data["token"]);
      authContext.setUser(user);
    }
  }
};

export { handleSignin, handleSignup };
