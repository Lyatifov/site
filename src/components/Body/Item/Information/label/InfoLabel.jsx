import cl from "./InfoLabel.module.css"

export default function InfoLabel({ id, inset, selectHandler, isSelect }) {
  return (
    <label htmlFor={inset.for} className={isSelect === id ? cl.info__label_checked : cl.info__label} onClick={() => selectHandler(id)}>
      {inset.title}
    </label>
  );
}
