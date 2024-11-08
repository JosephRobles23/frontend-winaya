import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Feed } from './components/Feed';
import { Store } from './components/Store';
import { ProductDetail } from './components/ProductDetail';
import { Chat } from './components/Chat';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile';
import { FinancialAgent } from './components/agents/FinancialAgent';
import { MarketAgent } from './components/agents/MarketAgent';
import { MarketingAgent } from './components/agents/MarketingAgent';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/agent/financial" element={<FinancialAgent />} />
          <Route path="/agent/market" element={<MarketAgent />} />
          <Route path="/agent/marketing" element={<MarketingAgent />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;