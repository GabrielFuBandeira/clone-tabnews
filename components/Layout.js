import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
