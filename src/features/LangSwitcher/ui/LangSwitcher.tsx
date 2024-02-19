import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Answer } from '@/entities/Answer';
import { QuizContent, QuizType } from '@/entities/Quiz';

import { getLanguageToCode } from '@/shared/lib/getLanguageToCode/getLanguageToCode';

interface LangSwitcherProps {
  className?: string;
  onSuccess?: (answer: Answer) => void;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  (props: LangSwitcherProps) => {
    const { className, onSuccess } = props;
    const { i18n } = useTranslation();

    const changeLanguage = (item: Answer) => {
      const code = getLanguageToCode(item.answer as string);
      i18n.changeLanguage(code);

      onSuccess?.(item);
    };

    return (
      <QuizContent
        className={className}
        quiz={{
          id: '1',
          type: QuizType.SINGLE_SELECT,
          question: 'What is your preferred language?',
          description: 'Choose language',
          options: [
            { value: 'English' },
            { value: 'French' },
            { value: 'German' },
            { value: 'Spanish' },
          ],
        }}
        onNext={changeLanguage}
      />
    );
  }
);
