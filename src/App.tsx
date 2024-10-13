import MainLayouts from "./components/layouts/MainLayouts";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute role={undefined}>
      <MainLayouts />
    </ProtectedRoute>
  );
}

export default App;
