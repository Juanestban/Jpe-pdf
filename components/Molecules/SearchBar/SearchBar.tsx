import { FC, FormEvent } from 'react';
import Button from '@jpe-reader/components/Atoms/Button';
import Input from '@jpe-reader/components/Atoms/Input';
import css, { stylesButton } from './styles';

const SearchBar: FC<{}> = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submited');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <Input type="text" placeholder="" />
          <Button icon="IoSearch" type="submit" style={stylesButton} />
        </div>
      </form>
      <style jsx>{css}</style>
    </>
  );
};

export default SearchBar;
