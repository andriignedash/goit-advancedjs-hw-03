import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = form.querySelector('input[name="searchQuery"]');
const loader = document.querySelector('.loader');
const errorMessage = document.querySelector('.error-message');
let lightbox = new SimpleLightbox('.gallery a');
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }

  clearGallery();
  errorMessage.classList.add('hidden');
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
      renderGallery(data.hits);
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Something went wrong while fetching images. Please try again later.',
    });
  } finally {
    loader.style.display = 'none';
  }
});
