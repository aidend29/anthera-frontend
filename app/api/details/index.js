import client from "../client";

const getInterests = async (interest = "cam", onData) => {
  const response = await client.get(
    `/anther/details/interests?search=${interest}`
  );
  onData(response);
};

export { getInterests };
