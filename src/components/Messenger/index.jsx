import Chat from "@/components/Messenger/Chat";
import ContactList from "@/components/Messenger/ContactList";
import { useState } from "react";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div className="mt-10 space-y-4">
      <h1 className="text-center text-2xl font-bold">Messenger</h1>
      <div className="mx-auto flex w-full max-w-2xl gap-4">
        <ContactList
          contacts={contacts}
          selectedContact={to}
          onSelect={(contact) => setTo(contact)}
        />
        {/* using key to insure to rest the state */}
        <Chat key={to.id} contact={to} />
      </div>
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
