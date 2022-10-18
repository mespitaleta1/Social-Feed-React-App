export const getSocialApi = async (baseUrl) => {
  try {
    const apiResponse = await fetch(baseUrl);
    return apiResponse.json();
  } catch (error) {
    console.error('Error', error);
  }
};
