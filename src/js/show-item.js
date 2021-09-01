export function getShowItemComponent(item) {
    if (!item) return
    try {
        const element = document.createElement('div')
        const img = item.image ? item.image.medium || item.image.original : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
        const rating = (item.rating && item.rating.average) || "";
        const showPageLink = "show-page.html"
        element.classList.add('show-item')
        element.innerHTML = `
        <a href="${showPageLink}" class="show-img"><img src="${img}"></a>
        <a href="${showPageLink}" class="show-name">${item.name}</a>
        <div class="social">
            <i class="fas fa-heart"></i>
            <i class="fas fa-star">
                <span>${rating}</span>
            </i>
        </div>
    `
        const component = {
            element,
        }
        return component;
    } catch (error) {
        debugger;
    }

}