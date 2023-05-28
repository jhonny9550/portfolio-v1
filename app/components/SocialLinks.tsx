import React from 'react';
import { SOCIAL_MEDIA_DATA } from '../utils/data.utils';
import Link from 'next/link';

type SocialLinksProps = { className?: string };

const SocialLinks = (props: SocialLinksProps) => (
  <ul className={`flex items-center justify-center px-8 py-5 gap-6 ${props.className}`}>
    {SOCIAL_MEDIA_DATA.map(({ link, icon, label }, index) => {
      const Icon = icon;
      return (
        <li key={index}>
          <Link
            href={link}
            target="_blank"
            className="hover:text-primary"
            aria-label={label}
            rel="noreferrer"
            download={label === 'Download Resume'}>
            <Icon className="text-xl sm:text-2xl" title={label} />
          </Link>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
