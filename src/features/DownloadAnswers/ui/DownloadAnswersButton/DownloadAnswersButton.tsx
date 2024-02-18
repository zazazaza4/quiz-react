import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import DownloadIcon from '@/shared/assets/icons/download.svg';

interface Answer {
  order: number;
  title: string;
  type: string;
  answer: string;
}

interface DownloadAnswersButtonProps {
  className?: string;
  answers: Answer[];
}

export const DownloadAnswersButton: FC<DownloadAnswersButtonProps> = memo(
  (props: DownloadAnswersButtonProps) => {
    const { className, answers } = props;
    const { t } = useTranslation();

    const onDownload = () => {
      const keys = Object.keys(answers[0]);

      const csvContent = [keys.join(',')].join('\n');

      const csv =
        `data:text/csv;charset=utf-8,` +
        `Order,Title,Type,Answer\n${csvContent}`;

      const encodedUri = encodeURI(csv);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
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
        Download my answers
      </Button>
    );
  }
);
