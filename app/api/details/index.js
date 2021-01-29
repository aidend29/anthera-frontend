import client from "../client";

const getInterests = async (interest = "cam", onData) => {
  const response = await client.get(
    `/anther/details/interests?search=${interest}`
  );
  onData(response);
};

const updateDetails = async (userId, data = {}) => {
  try {
    const response = await client.put(`anther/details/${userId}`, {
      data: data,
    });
    console.log(response.status);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
export { getInterests, updateDetails };
