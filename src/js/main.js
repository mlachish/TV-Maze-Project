import { getShowsListComponent } from './shows-list.js'
import { getSearchFormComponent } from './search-form.js'

const showsElement = document.querySelector('.shows')
const headerTopElement = document.querySelector('.header-top')

const showsListComponent = getShowsListComponent()
const searchFormComponent = getSearchFormComponent(async function (searchQuery) {
	try {
		await showsListComponent.search(searchQuery)
	} catch(error) {
		alert('error: not rendered')
	}
});

showsElement.prepend(showsListComponent.element);

headerTopElement.insertBefore(
	searchFormComponent.element,
	headerTopElement.querySelector('.user-links')
);