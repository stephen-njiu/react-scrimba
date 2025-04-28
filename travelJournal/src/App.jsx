import Header from "./components/Headers"
import Entry from "./components/Entry"
import Contact from "./components/Contact"
import phoneIcon from './assets/phone-icon.png'
import emailIcon from './assets/email-icon.webp'
import contacts from "./contacts"

export default function App() {
  return (
    <>
    <Header />
    <section className="contact-container">
      {contacts.map((c) => (
        <Contact
          key={c.id} // 
          // avatarSrc={c.avatarSrc}
          // name={c.name}
          // phone={c.phone}
          // email={c.email}
          {...c} // also works fine on the cost of readability
          phoneIconSrc={phoneIcon}
          emailIconSrc={emailIcon}
        />
      ))}
    </section>
    </>
  )
}

