import { Contact } from "../Contact/Contact"

export const ContactList = ({contacts, onDelete}) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return <Contact
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                        onDelete={onDelete}
                  />;
                })}
            </ul>
        </div>
    )
}