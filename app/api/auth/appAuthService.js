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
  // console.log("Entered data:", signinInfo);
  const { email, password } = signinInfo.current;
  setLoading(true);
  const response = await client.post("/auth/signin", {
    email: email,
    password: password,
  });
  setLoading(false);
  // console.log("Response:", response.data);

  if (!response.ok) {
    if (response.status == null) {
      setSigninError(
        "Sorry, something went wrong, make sure you're connected to the internet."
      );
    } else {
      setSigninError(response.data.error);
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
  console.log("Entered data:", signupInfo);
  const { email, password, terms } = signupInfo.current;

  setLoading(true);
  if (!terms) {
    await setSignupError("Sorry, terms and conditions are not agreed.");
    setLoading(false);
    return;
  }

  const signupResponse = await client.post("/auth/signup", {
    email: email,
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
          setSignupError(signupResponse.data["error"]);
          break;
        }
        default: {
          setSignupError("Sorry, something went wrong.");
        }
      }
    } else {
      const user = jwtDecode(signinResponse.data["token"]);
      authContext.setUser(user);
    }
  }
};

export { handleSignin, handleSignup };
