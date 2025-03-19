function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Meu Site. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
