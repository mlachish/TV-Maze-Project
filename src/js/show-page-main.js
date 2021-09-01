import { getSearchFormComponent } from './search-form.js'

const headerTopElement = document.querySelector('.header-top')

const searchFormComponent = getSearchFormComponent(async function (searchQuery) {
	try {
		await showsListComponent.search(searchQuery)
	} catch(error) {
		alert('error: not rendered')
	}
});

headerTopElement.insertBefore(
	searchFormComponent.element,
	headerTopElement.querySelector('.user-links')
);