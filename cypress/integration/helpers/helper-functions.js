class HelperFunctions {
    checkDisplay(page) {
        page.redirectByNavRef();
        page.url();
        page.getUniqueElement();
    }
}

export default new HelperFunctions();