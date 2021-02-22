import { Helmet } from 'react-helmet';
import AppRouter from './router';

function App() {
  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
