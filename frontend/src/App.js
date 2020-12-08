import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReceiveScreen from "./screen/ReceiveScreen";
import SendScreen from "./screen/SendScreen";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Container fluid className="p-0"  >
            <Route path="/send" component={SendScreen} />
            <Route path="/receive" component={ReceiveScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
