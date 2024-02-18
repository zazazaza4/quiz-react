import ActionImg from '@/shared/assets/images/action-emoji.png';
import BadBoyImg from '@/shared/assets/images/bad-boy-emoji.png';
import BillionaireImg from '@/shared/assets/images/billionaire-emoji.png';
import CrownImg from '@/shared/assets/images/crown-emoji.png';
import FemaleImg from '@/shared/assets/images/female-emoji.png';
import MaleImg from '@/shared/assets/images/male-emoji.png';
import OtherImg from '@/shared/assets/images/other-emoji.png';
import RomanceImg from '@/shared/assets/images/romance-emoji.png';
import WarewolfImg from '@/shared/assets/images/warewolf-emoji.png';
import YoungAdultImg from '@/shared/assets/images/young-adult-emoji.png';

import { QuizType } from '../../consts/quizConsts';
import { Quiz } from '../../types/quiz';

export const quizData: Quiz[] = [
  {
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
  },
  {
    id: '2',
    type: QuizType.SINGLE_SELECT_IMAGE,
    question: 'What gender do you identify with?',
    description: 'Please share how do you identify yourself',
    options: [
      { value: 'Female', image: FemaleImg },
      { value: 'Male', image: MaleImg },
      { value: 'Other', image: OtherImg },
    ],
  },
  {
    id: '3',
    type: QuizType.SINGLE_SELECT,
    question: 'What is your age?',
    options: [
      { value: '18-25 years' },
      { value: '30-39 years' },
      { value: '40-49 years' },
      { value: '50+' },
    ],
  },
  {
    id: '4',
    type: QuizType.MULTIPLE_SELECT,
    question: 'What do you hate the most in a book?',
    options: [
      { value: 'Lack of logic' },
      { value: 'A slow speed' },
      { value: 'Lack of humor' },
      { value: 'Way too generic ending' },
    ],
  },
  {
    id: '5',
    type: QuizType.BUBBLE,
    question: 'What are your favorite topics?',
    description: 'Choose up to 3 topics you like',
    options: [
      { value: 'Werewolf', image: WarewolfImg },
      { value: 'Romance', image: RomanceImg },
      { value: 'Action', image: ActionImg },
      { value: 'Young Adult', image: YoungAdultImg },
      { value: 'Royal Obsession', image: CrownImg },
      { value: 'Bad Boy', image: BadBoyImg },
      { value: 'Billionaire', image: BillionaireImg },
    ],
  },
];
