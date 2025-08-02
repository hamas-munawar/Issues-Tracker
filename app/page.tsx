import Pagination from './components/Pagination';

export default function Home() {
  return <Pagination totalCount={100} currentPage={4} pageSize={10} />;
}
