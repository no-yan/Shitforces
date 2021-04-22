import {
  mockContestFactory,
  mockAprilFoolContest,
  mockAccountInfo,
  mockAprilFoolContestProblems,
  submitStatus,
  mockContestRankingListItemFactory,
} from './agreedData';

// ここからAPI定義
module.exports = [
  {
    title: 'Latest Contest',
    description:
      '指定ページに対応するコンテストを最大10件返します。APIで与えられるJSONでコンテストは開催日順に与えられます。開催日が新しいものほどが先頭に並びます。トップページで使われます。',
    request: {
      path: '/api/contests/latest',
      query: {
        contest_page: '{:number}',
      },
      values: {
        number: 0,
      },
      method: 'GET',
    },
    response: {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        withCredentials: true,
      },
      body: [mockContestFactory({ id: 'test00', name: 'テストコンテスト 00' })],
    },
  },

  {
    title: 'Contest Info',
    description: '特定コンテストの情報を返します。',
    request: {
      path: '/api/contests/{:contest_title}',
      values: {
        contest_title: 'april2021',
      },
    },
    response: {
      body: mockAprilFoolContest,
    },
  },

  {
    title: 'Problems',
    description: 'get store information',
    request: {
      path: '/api/contests/{:contest_id}/problems',
      value: {
        contest_id: 'april2021',
      },
    },
    response: {
      body: mockAprilFoolContestProblems,
    },
  },

  {
    title: 'Ranking in a Contest',
    description: 'hoge',
    request: {
      path: '/api/contests/{:contest_id}/ranking',
      query: { page: ':number' },
      value: {
        number: null,
      },
    },
    response: {
      body: {
        rankingList: Array(20)
          .fill()
          .map((_, no) =>
            mockContestRankingListItemFactory({ ranking: no + 1 })
          ),
        acPerSubmit: [
          { first: 222, second: 240 },
          { first: 159, second: 200 },
          { first: 130, second: 190 },
          { first: 150, second: 162 },
          { first: 142, second: 154 },
          { first: 79, second: 140 },
          { first: 38, second: 100 },
          { first: 21, second: 32 },
          { first: 0, second: 24 },
          { first: 1, second: 18 },
        ],
        partAccountNum: 40,
        requestAccountRank: null,
      },
    },
  },

  {
    title: 'Submission: Failed',
    description: '回答が与えられると、正解かどうか返します',
    request: {
      path: '/api/contests/submissions',
      method: 'POST',
      headers: {
        contestId: 'april2021',
        indexOfContest: '0',
        statement: 'aa',
      },
    },
    response: {
      body: submitStatus,
    },
  },
  {
    title: 'Account Info',
    description: 'アカウントの情報を返します。',
    request: {
      path: 'api/account/{:account}',
      method: 'GET',
    },
    response: {
      body: { mockAccountInfo },
    },
  },
];

// api/submissions
/**   {
    title: 'api/',
    description: '',
    request: {},
    response: {},
  },
  {
    request: {},
    response: {},
  },
  {
    request: {},
    response: {},
  }, */
