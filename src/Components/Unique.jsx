import { useParams } from 'react-router-dom';
import CopyLink from './ui/CopyLink';

function Unique() {
  const { userId } = useParams();

  return <CopyLink userId={userId} />;
}

export default Unique;
