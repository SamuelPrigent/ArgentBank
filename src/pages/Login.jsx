// components
import Form from "../components/form.jsx";
import Nav from "../components/nav.jsx";

function Login() {
  // redirection dans le composant form
  return (
    <div className="body">
      <Nav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </div>
  );
}

export default Login;
