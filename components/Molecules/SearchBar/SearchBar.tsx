import { FC, FormEvent } from 'react';
import Button from '@jpe-reader/components/Atoms/Button';
import Input from '@jpe-reader/components/Atoms/Input';
import css, { stylesButton } from './styles';
import { useDictionary } from '@jpe-reader/hooks/useLanguage';

const SearchBar: FC<{}> = () => {
  const { navbar } = useDictionary();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submited');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <Input type="text" placeholder={navbar.search.placeholder} />
          <Button
            type="submit"
            icon="IoSearch"
            style={stylesButton}
            about={navbar.search.tooltip}
          />
        </div>
      </form>
      <style jsx>{css}</style>
    </>
  );
};

export default SearchBar;
