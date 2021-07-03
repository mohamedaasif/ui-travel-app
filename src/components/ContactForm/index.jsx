import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SuccessMsg from "../SuccessMsg";

const ContactForm = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg(true);
    reset();
  };

  return (
    <div className={styles.wrapper} id="quote">
      <h1>Travelling as a group? Get a Quote</h1>
      <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className={styles.error_msg}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label>Contact No</label>
          <input
            type="number"
            name="contact"
            {...register("contact", {
              required: "Contact No is required",
              maxLength: {
                value: 10,
                message: "Invalid Contact No",
              },
            })}
          />
          {errors.contact && (
            <p className={styles.error_msg}>{errors.contact.message}</p>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid Email",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error_msg}>{errors.email.message}</p>
          )}
        </div>

        {successMsg ? <SuccessMsg /> : null}

        <div className={styles.form_btn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
