import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BriskAutomationLanding from '@/components/ui/brisk-automation-landing';
import TermsOfService from '@/components/pages/terms-of-service';
import PrivacyPolicy from '@/components/pages/privacy-policy';

function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<BriskAutomationLanding />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;