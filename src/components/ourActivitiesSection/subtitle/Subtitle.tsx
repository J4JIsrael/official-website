import React from 'react';
import { type ActivitiesLabel } from '@/types';

interface SubtitleProps {
  activeLabel: ActivitiesLabel;
}

function setTitle(activeLabel: ActivitiesLabel) {
  switch (activeLabel) {
    case 'education':
      return 'וייבינרים והרצאות על בסיס שבועי';
    case 'jobs':
      return 'מספקים לכם את כל הכלים למציאת עבודה לגמרי בעצמכם';
    case 'projects':
      return 'השתלבות בין פרוייקטים חברתיים וקהילתיים';
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


