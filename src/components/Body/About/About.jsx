import cl from "./About.module.css";

export default function About({ item }) {
    item = {
        title: "Доставка",
        body:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam vero perspiciatis dolore officiis quaerat magni sed expedita doloremque quia est iusto, numquam quos voluptas, eveniet quam delectus tempore iure nemo.",
        contacts: "8 9** *** ** **",
    };

    return (
        <article>
            <section>
                <div className={cl.about}>
                    <div className={cl.about__title}>{item.title}</div>
                    <div className={cl.about__body}>{item.body}</div>
                    <div className={cl.about__contacts}>{item.contacts}</div>
                </div>
            </section>
        </article>
    );
}
