import cl from "./CatalogCategories.module.css"
import CategoryItem from "./CategoryItem/CategoryItem";

export default function CatalogCategories({ categories }) {

    let br = true

    return (
        <aside className={cl.aside}>
            {
                categories.map((item, index) => {
                    if (categories.length == index + 1) {
                        br = false
                    }

                    return <CategoryItem key={index * 13} item={item} br={br} />
                }

                )
            }
        </aside>
    );
}
