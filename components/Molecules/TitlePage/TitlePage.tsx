import Head from 'next/head';
import { useDictionary } from '@jpe-reader/hooks/useLanguage';

export default function TitlePage() {
  const { page } = useDictionary();

  return (
    <Head>
      <title>{page?.document.head.title}</title>
    </Head>
  );
}
