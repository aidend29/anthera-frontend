import { client, customClient, baseURL } from "../../api";

const getDetailsAPI = async (userId) => {
  try {
    const response = await client.get(`/anther/details/${userId}`);
    return { status: response.status, data: response.data };
  } catch (error) {
    return {
      status: response.status,
      data: response.data.error ? response.data.error : null,
    };
  }
};

const getInterestsAPI = async (interest = "cam", onData) => {
  const response = await client.get(
    `/anther/details/interests?search=${interest}`
  );
  onData(response);
};

const updateDetailsAPI = async (authContext, data = {}) => {
  try {
    // console.log("TOKEN ", authContext.user.token);
    const _client = customClient({
      "auth-token": authContext.user.token,
    });
    await _client.put(`anther/details`, {
      data: data,
    });
    // console.log(response.status);
    // console.log(response.data);
  } catch (error) {
    console.log(
      `ERR: function: updateDetailsAPI() input: ${authContext}, ${data} error: ${error}`
    );
  }
};

const uploadProfilePictureAPI = async (authContext, uri) => {
  try {
    let localUri = uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append("photo", { uri: localUri, name: filename, type });

    return await fetch(`${baseURL}anther/details/profilePicture`, {
      method: "POST",
      body: formData,
      headers: {
        "auth-token": authContext.user.token,
        "content-type": "multipart/form-data",
      },
    });
    // console.log(":L::::: ", response);
  } catch (error) {
    return false;
  }
};

export {
  getDetailsAPI,
  getInterestsAPI,
  updateDetailsAPI,
  uploadProfilePictureAPI,
};
