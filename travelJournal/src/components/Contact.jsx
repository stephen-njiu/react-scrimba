// export default function Contact(props) {
//     return (
//         <article className="contact-card">
//             <img src="src/assets/cat1.webp" alt="img -1" />
//             <h3>Mr Koulianos</h3>
//             <div className="info-group">
//                 <img src="src/assets/phone-icon.png" alt="img-2" />
//                 <p>07988338888</p>
//             </div>
//             <div className="info-group">
//                 <img src="src/assets/email-icon.webp" alt="img-3" />
//                 <p>mr.masterguru@mail.com</p>
//             </div>
//         </article> 
//     )
// }

// Contact.jsx
export default function Contact({
    avatarSrc,
    name,
    phone,
    email,
    phoneIconSrc,
    emailIconSrc,
  }) {
    return (
      <article className="contact-card">
        <img src={avatarSrc} alt={`${name} avatar`} />
        <h3>{name}</h3>
  
        <div className="info-group">
          <img src={phoneIconSrc} alt="phone icon" />
          <p>{phone}</p>
        </div>
  
        <div className="info-group">
          <img src={emailIconSrc} alt="email icon" />
          <p>{email}</p>
        </div>
      </article>
    )
  }
  