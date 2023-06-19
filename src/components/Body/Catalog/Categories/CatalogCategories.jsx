import cl from "./CatalogCategories.module.css";
import CategoryItem from "./CategoryItem/CategoryItem";

export default function CatalogCategories({ categories }) {
    return (
        <aside className={cl.aside}>
            {categories.map((item, index) => {
                return <CategoryItem key={index} item={item} />;
            })}
        </aside>
    );
}
