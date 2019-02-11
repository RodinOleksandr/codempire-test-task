import {FETCH_QUIZ ,SET_ANSWERS , RESULT, SET_QUESTIONS , CLEAR_STATE, CANSEL , CLEAR_ANSWER_STATE} from '../actions/actionTypes'

const initialState = {

  quizLinks : ['История' , 'География' , 'Английский язык'],
  quizStarted : false,
  result : [],
  activeQuiz : null,
  answerState : [],
  activeQuestions : [],
  showConfirm : false,
  questionListItems : null,
  quizes : [
    [
      {
        id : 0,
        type : 'field',
        question: 'В каком году умер Наполеон?',
        rightAnswer : '1812',
      },
      {
        id : 1,
        type : 'radio',
        question: 'Кто ввел крепостное право на Руси?',
        rightAnswer : '0',
        answers : {
          0: 'Екатерина II',
          1: 'Александр I',
          2: 'Наполеон',
          3: 'Иван Грозный'
        }
      },
      {
        id : 2,
        type : 'checkbox',
        question: 'Какие страны входили в "Тройственный союз"?',
        rightAnswer : [true , true , false , true ] ,
        answers : {
          0: 'Италия',
          1: 'Германия',
          2: 'Испания',
          3: 'Австро-Венгрия'
        }
      },
      {
        id : 3,
        type : 'select',
        question: 'Сколько длилась столетняя война',
        rightAnswer : '116 лет',
        answers : {
          0: '116 лет',
          1: '101 год',
          2: '99 лет',
          3: '100 лет'
        }
      },
      {
        id : 4,
        type : 'field',
        question: 'В каком году началась вторая мировая война?',
        rightAnswer : '1939',
      },
  ],
  [
    {
      id : 0,
      type : 'field',
      question: 'Сколько на земле часовых поясов?',
      rightAnswer : '24',
    },
    {
      id : 1,
      type : 'radio',
      question: 'Выберите столицу Португалии.',
      rightAnswer : '3',
      answers : {
        0: 'Порту',
        1: 'Мадрид',
        2: 'Тортуга',
        3: 'Лиссабон'
      }
    },
    {
      id : 2,
      type : 'checkbox',
      question: 'Выберите островные страны.',
      rightAnswer :  [true , false , true , false ] ,
      answers : {
        0: 'Япония',
        1: 'Испания',
        2: 'Исландия',
        3: 'Чили'
      }
    },
    {
      id : 3,
      type : 'select',
      question: 'На флаге какой страны расположен кленовый лист?',
      rightAnswer : 'Канада',
      answers : {
        0: 'Австралия',
        1: 'Канада',
        2: 'Румыния',
        3: 'Сингапур'
      }
    },
    {
      id : 4,
      type : 'field',
      question: 'В каком океане асположена Марианская впадина?',
      rightAnswer : 'Тихий',
    },
  ],
  [
    {
      id : 0,
      type : 'field',
      question: 'How many letters in English alfabet?',
      rightAnswer : '26',
    },
    {
      id : 1,
      type : 'radio',
      question: 'Choose a correct option of written word.',
      rightAnswer : '0',
      answers : {
        0: 'intelligence',
        1: 'intellagence',
        2: 'inteligence',
        3: 'intelegince'
      }
    },
    {
      id : 2,
      type : 'checkbox',
      question: 'Choose synonyms for word "Happy"',
      rightAnswer : [false , true , false , true] ,
      answers : {
        0: 'devastated',
        1: 'delighted',
        2: 'desperated',
        3: 'cheerful'
      }
    },
    {
      id : 3,
      type : 'select',
      question: 'How many tences exist in English?',
      rightAnswer : '12',
      answers : {
        0: '4',
        1: '12',
        2: '8',
        3: '3'
      }
    },
    {
      id : 4,
      type : 'field',
      question: 'Write third form of irregular verb "keep"',
      rightAnswer : 'kept',
    },
],
  ]
}

export default function quizReduce(state = initialState , action) {

  switch (action.type) {
    case FETCH_QUIZ:
      return {
        ...state , quizStarted : true , activeQuiz: action.activeQuiz
      }
    case SET_ANSWERS:
      return {
       ...state , answerState : action.answer
      }
    case RESULT:
      return {
        ...state, result : action.result , showConfirm : action.showConfirm
      }
    case SET_QUESTIONS:
      return {
        ...state, activeQuestions : action.activeQuestions , questionListItems : action.questionListItems
      }
    case CLEAR_STATE:
      return {
        ...state ,
        quizStarted : false,
        result : [],
        activeQuiz : null,
        answerState : [],
        activeQuestions : [],
        showConfirm : false,
        questionListItems : null,
      }
    case CANSEL:
      return {
        ...state ,
        showConfirm : false,
      }
    case CLEAR_ANSWER_STATE:
      return {
        ...state ,
        answerState : [],
      }

    default:
      return {...state}
  }
}
