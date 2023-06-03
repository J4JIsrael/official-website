import { type ActivitiesLabel } from '@/types';
import React from 'react';

interface SubtitleProps {
  activeLabel: ActivitiesLabel;
}

function setTitle(activeLabel: ActivitiesLabel) {
  const copy = {
    education: 'העשרה: להרחיב אופקים בתחומים מגוונים',
    jobs: 'מציאת עבודה: עוזרים אחד לשני כדי למצוא משרות ועבודות',
    projects: 'פרויקטים: רוכשים ניסיון מעשי על ידי פרויקטים במסגרות שונות',
  };

  switch (activeLabel) {
    case 'education':
      return copy.education;
    case 'jobs':
      return copy.jobs;
    case 'projects':
      return copy.projects;
    default:
      return '';
  }
}

export const Subtitle = ({ activeLabel }: SubtitleProps) => {
  return (
    <p
      style={{
        fontFamily: 'Noto Sans Hebrew',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '33px',
        textAlign: 'center',
        background:
          'linear-gradient(182.34deg, #A889FD -30.43%, #B85DFF 98.04%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',

        opacity: 0.78,
        marginTop: '-10px',
        marginBottom: '40px',
      }}
    >
      {setTitle(activeLabel)}
    </p>
  );
};
