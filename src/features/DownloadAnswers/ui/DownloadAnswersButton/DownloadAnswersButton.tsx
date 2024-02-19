import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Answer } from '@/entities/Answer';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import DownloadIcon from '@/shared/assets/icons/download.svg';

interface DownloadAnswersButtonProps {
  className?: string;
  answers: Answer[];
}

export const DownloadAnswersButton: FC<DownloadAnswersButtonProps> = memo(
  (props: DownloadAnswersButtonProps) => {
    const { className, answers } = props;
    const { t } = useTranslation();

    const onDownload = () => {
      const keys = Object.keys(answers[0]) as (keyof Answer)[];

      const csvHeader = `${keys.join(',')}\n`;

      const csvRows = answers
        .map((answer) => keys.map((key) => `"${answer[key]}"`).join(','))
        .join('\n');

      const csvContent = csvHeader + csvRows;

      const csvDataUri = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;

      const link = document.createElement('a');
      link.setAttribute('href', csvDataUri);
      link.setAttribute('download', 'my_answers.csv');

      document.body.appendChild(link);
      link.click();
    };

    return (
      <Button
        onClick={onDownload}
        theme="clear"
        className={classNames('', {}, [className])}
      >
        <Icon Svg={DownloadIcon} />
        {t('downloadAnswersButton.text')}
      </Button>
    );
  }
);
