import InputForm from './components/InputForm'; 
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray- transition-colors duration-300">
      <Header />

      <main className="flex flex-col items-center px-4 py-16 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
          Se prepare para viver uma vida mais{" "}
          <span className="text-blue-600 dark:text-blue-500">saudável</span> com a nossa ajuda
        </h1>
        <InputForm />
      </main>
    </div>
  );
}

export default App;
