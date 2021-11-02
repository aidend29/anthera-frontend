import { client } from "../../api";
import jwtDecode from "jwt-decode";

const checkConnection = async() => {
  const response = await client.get("/ping");
  console.log(response.data);
};

const signinAPI = async (
  signinInfo,
  authContext,
  setLoading,
  setSigninError
) => {
  // console.log("Entered data:", signinInfo);
  const { email, password } = signinInfo;
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
    const user = response.data;
    authContext.setUser(user);
  }
};

const signupAPI = async (signupInfo, authContext, setLoading, setError) => {
  try {
    setError(null);
    setLoading(true);
    const { email, password, terms } = signupInfo;
    // console.log("Input: ", email, password, terms);

    if (!terms) {
      setError("Sorry, terms & conditions are not agreed.");
      setLoading(false);
      return;
    }

    const signupResponse = await client.post("/auth/signup", {
      email: email,
      password: password,
    });

    if (!signupResponse.ok) {
      if (signupResponse.data.error) {
        setError(signupResponse.data.error);
      } else {
        setError("Sorry, something went wrong.");
      }
    } else {
      // console.log("SIGIN IN...");
      signinAPI({ email, password }, authContext, setLoading, setError);
    }
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};

export { signinAPI, signupAPI, checkConnection };

