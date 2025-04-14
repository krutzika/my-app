import Header from '@/components/Header'
import TailBar from '@/components/Tail';
import MainContent from './Main.tsx';

const IndexPage = () => {
  return(
    <div>
    <Header/>
    <MainContent />
    <TailBar />
    </div>
  );
}




export default IndexPage;