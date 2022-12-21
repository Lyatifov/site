const categories = ["title", "description", "availability", "price"]

function check(item, req) {

    function valid(target) {
        return item[target].toLowerCase().includes(req.toLowerCase())
    }
    return valid(categories[0]) || valid(categories[1]) || valid(categories[2]) || valid(categories[3])

    // categories.map(target => {
    //     if (item[target].toLowerCase().includes(req.toLowerCase())) {
    //         return true
    //     }
    // })
    // return false
}

export function SearchItem(catalog, req) {
    const result = catalog.filter(item => check(item, req))
    return result
}