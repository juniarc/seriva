const api = (() => {
    const BASE_URL = "https://fakestoreapi.com";

    async function getAllProducts(limit: number) {
        const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
        const responseJson = await response.json();
        return responseJson;
    }

    async function getAllCategory() {
        const response = await fetch(`${BASE_URL}/products/categories`);
        const responseJson = await response.json();

        return responseJson;
    }

    async function getProductsByCategory(category: string) {
        const response = await fetch(`${BASE_URL}/products/category/${category}`);
        const responseJson = await response.json();
        return responseJson;
    }

    return {
        getAllProducts,
        getAllCategory,
        getProductsByCategory,
    };
})();

export default api;
