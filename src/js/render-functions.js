export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a class="gallery__item" href="${largeImageURL}">
        <div class="gallery__card">
          <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="gallery__info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
        </div>
      </a>`
    )
    .join('');
  gallery.innerHTML = markup;
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
