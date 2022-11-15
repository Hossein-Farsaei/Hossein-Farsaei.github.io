import { contacts } from "../../../data/personalData";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <div className="about-me-section contacts-container">
      <div className="title">
        <strong>GET IN TOUCH</strong>
      </div>
      <div className="title-line" />
      <div className="contacts-info flex flex-justify-space-evenly flext-align-center flex-wrap">
        {contacts.map((contact) => {
          return (
            <a
              key={contact.title}
              rel="noreferrer"
              href={contact.url}
              target="_blank"
              className="contact flex flex-column flex-align-center"
            >
              <div className="contact-icon flex flex-justify-center flex-align-center">
                {contact.icon}
              </div>
              <div className="contact-sub-title">{contact.preTitle}</div>
              <div className="contact-title">{contact.title}</div>
              <div className="contact-data flex flex-column">
                {contact.value.map((val) => {
                  return <div>{val}</div>;
                })}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
