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

import { Quiz } from '../types/quiz';
import { QuizType } from './quizConsts';

export type QuizData = Record<string, Quiz[]>;

export const quizData: QuizData = {
  en: [
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
  ],
  fr: [
    {
      id: '1',
      type: QuizType.SINGLE_SELECT,
      question: 'Quelle est votre langue préférée?',
      description: 'Choisissez la langue',
      options: [
        { value: 'Anglais' },
        { value: 'Français' },
        { value: 'Allemand' },
        { value: 'Espagnol' },
      ],
    },
    {
      id: '2',
      type: QuizType.SINGLE_SELECT_IMAGE,
      question: 'Quel genre vous identifiez-vous?',
      description: 'Merci de partager comment vous vous identifiez',
      options: [
        { value: 'Féminin', image: FemaleImg },
        { value: 'Masculin', image: MaleImg },
        { value: 'Autre', image: OtherImg },
      ],
    },
    {
      id: '3',
      type: QuizType.SINGLE_SELECT,
      question: 'Quel est votre âge?',
      options: [
        { value: '18-25 ans' },
        { value: '30-39 ans' },
        { value: '40-49 ans' },
        { value: '50+' },
      ],
    },
    {
      id: '4',
      type: QuizType.MULTIPLE_SELECT,
      question: "Qu'est-ce que vous détestez le plus dans un livre?",
      options: [
        { value: 'Manque de logique' },
        { value: 'Lenteur' },
        { value: "Manque d'humour" },
        { value: 'Fin trop générique' },
      ],
    },
    {
      id: '5',
      type: QuizType.BUBBLE,
      question: 'Quels sont vos sujets préférés?',
      description: "Choisissez jusqu'à 3 sujets que vous aimez",
      options: [
        { value: 'Loup-garou', image: WarewolfImg },
        { value: 'Romance', image: RomanceImg },
        { value: 'Action', image: ActionImg },
        { value: 'Jeune adulte', image: YoungAdultImg },
        { value: 'Obsession royale', image: CrownImg },
        { value: 'Mauvais garçon', image: BadBoyImg },
        { value: 'Milliardaire', image: BillionaireImg },
      ],
    },
  ],
  es: [
    {
      id: '1',
      type: QuizType.SINGLE_SELECT,
      question: '¿Cuál es tu idioma preferido?',
      description: 'Elige idioma',
      options: [
        { value: 'Inglés' },
        { value: 'Francés' },
        { value: 'Alemán' },
        { value: 'Español' },
      ],
    },
    {
      id: '2',
      type: QuizType.SINGLE_SELECT_IMAGE,
      question: '¿Con qué género te identificas?',
      description: 'Por favor, comparte cómo te identificas',
      options: [
        { value: 'Femenino', image: FemaleImg },
        { value: 'Masculino', image: MaleImg },
        { value: 'Otro', image: OtherImg },
      ],
    },
    {
      id: '3',
      type: QuizType.SINGLE_SELECT,
      question: '¿Cuál es tu edad?',
      options: [
        { value: '18-25 años' },
        { value: '30-39 años' },
        { value: '40-49 años' },
        { value: '50+' },
      ],
    },
    {
      id: '4',
      type: QuizType.MULTIPLE_SELECT,
      question: '¿Qué es lo que más odias en un libro?',
      options: [
        { value: 'Falta de lógica' },
        { value: 'Poca velocidad' },
        { value: 'Falta de humor' },
        { value: 'Final demasiado genérico' },
      ],
    },
    {
      id: '5',
      type: QuizType.BUBBLE,
      question: '¿Cuáles son tus temas favoritos?',
      description: 'Elige hasta 3 temas que te gusten',
      options: [
        { value: 'Hombre lobo', image: WarewolfImg },
        { value: 'Romance', image: RomanceImg },
        { value: 'Acción', image: ActionImg },
        { value: 'Joven adulto', image: YoungAdultImg },
        { value: 'Obsesión real', image: CrownImg },
        { value: 'Chico malo', image: BadBoyImg },
        { value: 'Multimillonario', image: BillionaireImg },
      ],
    },
  ],
  de: [
    {
      id: '1',
      type: QuizType.SINGLE_SELECT,
      question: 'Was ist deine bevorzugte Sprache?',
      description: 'Wähle eine Sprache',
      options: [
        { value: 'Englisch' },
        { value: 'Französisch' },
        { value: 'Deutsch' },
        { value: 'Spanisch' },
      ],
    },
    {
      id: '2',
      type: QuizType.SINGLE_SELECT_IMAGE,
      question: 'Mit welchem Geschlecht identifizierst du dich?',
      description:
        'Bitte teile mit, mit welchem Geschlecht du dich identifizierst',
      options: [
        { value: 'Weiblich', image: FemaleImg },
        { value: 'Männlich', image: MaleImg },
        { value: 'Andere', image: OtherImg },
      ],
    },
    {
      id: '3',
      type: QuizType.SINGLE_SELECT,
      question: 'Wie alt bist du?',
      options: [
        { value: '18-25 Jahre' },
        { value: '30-39 Jahre' },
        { value: '40-49 Jahre' },
        { value: '50+' },
      ],
    },
    {
      id: '4',
      type: QuizType.MULTIPLE_SELECT,
      question: 'Was stört dich am meisten an einem Buch?',
      options: [
        { value: 'Mangel an Logik' },
        { value: 'Zu langsam' },
        { value: 'Mangel an Humor' },
        { value: 'Zu generisches Ende' },
      ],
    },
    {
      id: '5',
      type: QuizType.BUBBLE,
      question: 'Was sind deine Lieblingsthemen?',
      description: 'Wähle bis zu 3 Themen, die dir gefallen',
      options: [
        { value: 'Werwolf', image: WarewolfImg },
        { value: 'Romantik', image: RomanceImg },
        { value: 'Action', image: ActionImg },
        { value: 'Jugendlich', image: YoungAdultImg },
        { value: 'Königliche Obsession', image: CrownImg },
        { value: 'Bad Boy', image: BadBoyImg },
        { value: 'Milliardär', image: BillionaireImg },
      ],
    },
  ],
};

export const quizDataTotal = quizData.en.length;
