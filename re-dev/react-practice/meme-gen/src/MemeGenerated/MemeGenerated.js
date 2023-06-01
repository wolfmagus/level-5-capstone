import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

import styles from './styles.module.css';

export const MemeGenerated = () => {
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url');

  const clipboard = useClipboard({
    onSuccess: () => setCopied(true),
  });

  const copyLink = () => {
    clipboard.copy(url);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate('/')} className={styles.home}>
        Make More Memes
      </button>
      {url && <img alt='meme' src={url} />}
      <button onClick={copyLink} className={styles.copy}>
        {copied ? 'Link copied!' : 'Copy link'}
      </button>
    </div>
  );
};