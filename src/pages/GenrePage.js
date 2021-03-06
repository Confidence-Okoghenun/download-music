/**  @jsx jsx  */
import mq from '../components/mq';
import { jsx } from '@emotion/core';
import { ALBUMS_BY_GENRE } from '../query';
import queryString from 'query-string';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import NextPage from '../components/NextPage';
import { useQuery } from '@apollo/react-hooks';
import AlbumCard from '../components/AlbumCard';
import Title from '../components/Title';

const GenrePage = ({ history, location: { pathname, search } }) => {
  // 173
  const [page, setPage] = useState(1);

  useEffect(() => {
    const p = Number(queryString.parse(search)['page']) || 1;

    setPage(p);
  }, [search]);

  const { data, loading, error } = useQuery(ALBUMS_BY_GENRE, {
    variables: {
      input: { page, limit: 8, id: pathname.split('/').slice(-1)[0] },
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <Title title={`genre / ${data.albumByGenre.name}`} />
      <div
        css={{
          display: 'grid',
          gridGap: '1rem',
          '@media  ( max-width :  549px )': {
            gridGap: '0.5rem',
          },
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(2, calc(50% - 1rem))',
          [mq[1]]: {
            gridTemplateColumns: 'repeat(4, calc(25% - 1rem))',
          },
        }}
      >
        {data.albumByGenre.albums.map((album, k) => (
          <AlbumCard key={k} {...album} />
        ))}
      </div>
      <NextPage {...history} />
    </div>
  );
};

export default GenrePage;
