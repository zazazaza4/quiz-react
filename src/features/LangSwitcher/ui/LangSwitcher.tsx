import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Answer } from '@/entities/Answer';
import { QuizContent } from '@/entities/Quiz';

import { getLanguageToCode } from '@/shared/lib/getLanguageToCode/getLanguageToCode';

import { langQuiz } from '../model/consts/langConsts';

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
        quiz={langQuiz}
        onNext={changeLanguage}
      />
    );
  }
);
