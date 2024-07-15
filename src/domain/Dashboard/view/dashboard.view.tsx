import Counter from '../component/counter'
import MainLayout from '../../../layout/mainLayout'


function Dashboard() {
  
  return (
    <MainLayout>
      <div>
        <Counter />
      </div>
    </MainLayout>
  );
}

export default Dashboard