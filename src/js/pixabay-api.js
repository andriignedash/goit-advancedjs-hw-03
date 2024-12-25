export async function fetchImages(query, page = 1) {
  const API_KEY = '47849639-14a05baa764e681cfc3185886';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: 12,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
