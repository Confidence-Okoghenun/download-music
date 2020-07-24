/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import SongItem from './SongItem';

const SongList = ({ song, highlightID, getLinks, downloadOne }) => {
  console.log(getLinks)
  return (
    <div
      css={{
        minWidth: '50%',
        maxWidth: '700px',
        padding: ' 0 1rem',
        height: 'min-content',
        borderRadius: '24px',
        border: '10px solid #192734',
      }}
    >
      {song
        .sort((a, b) =>
          a.id === highlightID ? -1 : b.id === highlightID ? 1 : 0
        )
        .map((s, k) => (
          <SongItem
            {...s}
            key={k}
            getLinks={getLinks}
            downloadOne={downloadOne}
            highlight={s.id === highlightID ? true : false}
          />
        ))}
    </div>
  );
};

export default SongList;
