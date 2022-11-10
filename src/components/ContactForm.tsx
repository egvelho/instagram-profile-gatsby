import React, { useState, useEffect } from "react";

const initialFormState = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function isValidName(name: string) {
  if (name.length < 2) {
    return "O nome precisa ter pelo menos 2 caracteres";
  }

  if (name.length > 32) {
    return "O nome precisa ter até 32 caracteres";
  }

  return null;
}

function isValidEmail(email: string) {
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    return "Este email é invalido";
  }

  return null;
}

function isValidPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length === 0) {
    return null;
  }

  if (!phoneNumber.match(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)) {
    return "O número de telefone é invalido";
  }

  return null;
}

function isValidMessage(message: string) {
  if (message.length < 12) {
    return "A mensagem precisa ter pelo menos 12 caracteres";
  }

  if (message.length > 256) {
    return "A mensagem precisa ter até 256 caracteres";
  }

  return null;
}

function ErrorMessage({ message }: { message: string | null }) {
  if (message === null) {
    return null;
  }

  return (
    <span className="error">
      {message}
      <style jsx>{`
        .error {
          color: #f11212;
          font-size: 10px;
        }
      `}</style>
    </span>
  );
}

export function ContactForm() {
  const [isDirty, setIsDirty] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const validName = isValidName(formState.name);
  const validPhoneNumber = isValidPhoneNumber(formState.phoneNumber);
  const validEmail = isValidEmail(formState.email);
  const validMessage = isValidMessage(formState.message);

  const isFormValid =
    validName === null &&
    validPhoneNumber === null &&
    validEmail === null &&
    validMessage === null;

  useEffect(() => {
    if (
      formState.name.length > 0 ||
      formState.email.length > 0 ||
      formState.message.length > 0 ||
      formState.phoneNumber.length > 0
    ) {
      setIsDirty(true);
    }
  }, [formState.name]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDirty(true);

    if (isFormValid) {
      const form = new FormData();
      form.append("name", formState.name);
      form.append("email", formState.email);
      form.append("phone-number", formState.phoneNumber);
      form.append("message", formState.message);

      try {
        await fetch(
          "https://getform.io/f/6b64e079-7983-4fc2-8690-e46504ac1da7",
          {
            method: "POST",
            body: form,
          }
        );

        alert("Formulário enviado com sucesso!");
        setFormState(initialFormState);
      } catch (error) {
        console.log(error);
        alert("Houve um erro ao enviar o formulário");
      }
    }
  }

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Entrar em contato</h2>
      <form
        noValidate
        className="contact-form"
        method="post"
        onSubmit={onSubmit}
      >
        <div className="row">
          <div className="field-container">
            <label htmlFor="fullname">Nome completo</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="field"
              placeholder="Nome completo"
              value={formState.name}
              onChange={(event) =>
                setFormState({ ...formState, name: event.target.value })
              }
            />
            <ErrorMessage message={isDirty ? validName : null} />
          </div>
        </div>
        <div className="row">
          <div className="field-container email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="field"
              placeholder="Email"
              value={formState.email}
              onChange={(event) =>
                setFormState({ ...formState, email: event.target.value })
              }
            />
            <ErrorMessage message={isDirty ? validEmail : ""} />
          </div>
          <div className="field-container phone-number-container">
            <label htmlFor="phone-number">Celular</label>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              className="field"
              placeholder="Celular (opcional)"
              value={formState.phoneNumber}
              onChange={(event) =>
                setFormState({ ...formState, phoneNumber: event.target.value })
              }
            />
            <ErrorMessage message={isDirty ? validPhoneNumber : ""} />
          </div>
        </div>
        <div className="row">
          <div className="field-container">
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              className="field"
              placeholder="Mensagem"
              rows={3}
              value={formState.message}
              onChange={(event) =>
                setFormState({ ...formState, message: event.target.value })
              }
            />
            <ErrorMessage message={isDirty ? validMessage : ""} />
          </div>
        </div>
        <div className="row">
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </div>
      </form>
      <style jsx>{`
        .contact-form-container {
          margin: 12px;
        }

        .contact-form {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
        }

        .form-title {
          text-align: center;
          font-size: 32px;
        }

        .field {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 12px 18px;
          outline: none;
          box-sizing: border-box;
        }

        .field-container {
          width: 100%;
        }

        .row:not(:first-child) {
          margin-top: 12px;
        }

        .field:focus {
          border-color: #009712;
        }

        .submit-button {
          width: 100%;
          background-color: #009712;
          padding: 12px 18px;
          color: #fff;
          border: none;
          border-radius: 4px;
          margin-top: 12px;
        }

        .submit-button:hover {
          opacity: 0.8;
          cursor: pointer;
        }

        #message {
          resize: none;
        }

        @media (max-width: 600px) {
          .email-container {
            margin-bottom: 12px;
          }
        }

        @media (min-width: 600px) {
          .row {
            display: flex;
          }

          .email-container {
            margin-right: 12px;
            flex: 3;
          }

          .phone-number-container {
            flex: 2;
          }
        }
      `}</style>
    </div>
  );
}
