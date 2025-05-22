export default function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="min-w-24 rounded-md bg-gray-200 px-4 py-2 shadow-md"
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
