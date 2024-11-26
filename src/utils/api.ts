export const fetchData = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  console.log("Requesting...", { url, options });

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return response.json();
};
