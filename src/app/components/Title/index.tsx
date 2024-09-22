import React from 'react';

enum HeadingLevel {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

interface TitleProps {
  text: string;
  level: HeadingLevel;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, level, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const headingClasses = {
    1: 'text-4xl font-bold mb-4',
    2: 'text-3xl font-semibold mb-3',
    3: 'text-2xl font-medium mb-2',
    4: 'text-xl mb-2',
    5: 'text-lg mb-1',
    6: 'text-base mb-1',
  };

  return <Tag className={`${headingClasses[level]} ${className}`}>{text}</Tag>;
}

export { Title, HeadingLevel };