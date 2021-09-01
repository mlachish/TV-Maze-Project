import { getShowItemComponent } from './show-item.js';

const mockShows = []

export function getShowsListComponent() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('shows-list');

    const component = {
        element: wrapper,
        search: async function (query) {
            const url = query === null ? "https://api.tvmaze.com/shows" : `https://api.tvmaze.com/search/shows?q=${query}`;
            const response = await fetch(url);

            const items = await response.json();
            const shows = items.map(item => item.show || item);

            renderItems(shows);
        },
    }

    function renderItems(items) {
        wrapper.innerHTML = '';
        items
            .map(item => getShowItemComponent(item))
            .filter(item => item && item.element)
            .map(item => wrapper.appendChild(item.element))
    }
    component.search(null)
    return component;
}