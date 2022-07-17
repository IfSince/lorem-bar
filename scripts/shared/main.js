const addClickEvent = function(element, eventFunction) {
    element?.addEventListener("click", eventFunction);
    element?.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) eventFunction()
    })
}

const toggleMenu = function () {
    const headerClassList = document.querySelector('[data-header]').classList
    const navigation = document.querySelector('[data-mobile-menu]')
    const attribute = navigation.getAttributeNode("data-mobile-menu")

    if (attribute.value === "closed") {
        attribute.value = "open";
        headerClassList.add("content-blur")
    } else {
        attribute.value = "closed";
        headerClassList.remove("content-blur")
    }
}

document.querySelectorAll('[data-mobile-menu-toggle]').forEach((element) => addClickEvent(element, toggleMenu))

const observer = new IntersectionObserver(([entry]) => {
    const navigationClasses = document.querySelector('[data-header]').classList
    entry.boundingClientRect.top < 0 ?
        navigationClasses.add("header__scroll") : navigationClasses.remove("header__scroll")
})
observer.observe(document.querySelector('[data-intersection-observer-scroll]'));