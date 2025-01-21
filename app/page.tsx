import MainPageForm from '@/Components/MainPageForm/MainPageForm';
import { ToastContainer } from 'react-toastify';
export default function Home() {

  return (

       <div className='container'>
          <main>
            <h1 style={{textAlign: 'center'}}>Игра в дурака</h1>
            <MainPageForm/>
            <ToastContainer/>
          </main>
        </div>
  );
}
