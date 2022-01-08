import { useRouter } from 'next/router';
import Title from '@jpe-reader/components/Atoms/Title';
import Link from '@jpe-reader/components/Atoms/Link';

export default function Granada() {
  const { query, pathname } = useRouter();

  return (
    <>
      <Title>i am a title {query.idGranada}</Title>
      <Title>pathname: {pathname}</Title>
      <Link href="/granada">go back</Link>
    </>
  );
}
