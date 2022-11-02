import React, { useState } from "react";

// action="https://webhook.site/5520c1bc-cff2-4420-a664-a8d24ac99356"

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
  if (!email.includes("@")) {
    return "Este email é invalido";
  }

  return null;
}

function isValidPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length === 0) {
    return null;
  }

  if (phoneNumber.length < 6) {
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

  return (
    <div className="contact-form-container">
      <h1 className="form-title">Entrar em contato</h1>
      <form
        noValidate
        className="contact-form"
        method="post"
        onSubmit={async (event) => {
          event.preventDefault();

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
        }}
      >
        <div className="row">
          <div className="field-container">
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
            <ErrorMessage message={validName} />
          </div>
        </div>
        <div className="row">
          <div className="field-container email-container">
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
            <ErrorMessage message={validEmail} />
          </div>
          <div className="field-container phone-number-container">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              className="field"
              placeholder="Celular"
              value={formState.phoneNumber}
              onChange={(event) =>
                setFormState({ ...formState, phoneNumber: event.target.value })
              }
            />
            <ErrorMessage message={validPhoneNumber} />
          </div>
        </div>
        <div className="row">
          <div className="field-container">
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
            <ErrorMessage message={validMessage} />
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
          #email {
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
