import { useValues } from "../store/store";
import "./Compo.css";

function FormInput() {
  const { name, email, setName, setEmail } = useValues();

  return (
    <>
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </div>
      <div>{`Name: ${name}`}</div>
      <div>{`Email: ${email}`}</div>
    </>
  );
}

export default FormInput;
