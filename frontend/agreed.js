// https://github.com/recruit-tech/agreed/blob/master/README.md
// https://github.com/recruit-tech/agreed/blob/d70523013fc024ad1ba4862d36d714805a4d9f55/packages/core/README.md

/**  How to Use?
 *
 *  {
 *  title: '',
 *  description: '',
 *  request: {
      path:'/api/hoge/{:variable}',    //{:hoge}でhogeという変数を宣言します。
      query:{
        anyQuery:'{:queryValue}'      // 変数でもstringとして与える
      },
      values:{
        variable:'responseと対応するデータ',
        queryValue:'responseと対応するデータ'
      } 
    },

    response: {
      body:{
        data1:'Shitforces',
        data2:'https://github.com/ShopOne/Shitforces'
      }
    },
  },

// 実際にはresponse側でもrequest側で宣言した変数を使うことで、クエリに応じたresponseを返すことができる。 value:{msg:{:requestedData}}

  */
const mockContestFactory = (object = {}) => ({
  id: 'test01',
  name: 'テストコンテスト 01',
  statement: 'フロントエンド動作確認用のテストコンテストです。',
  unixStartTime: 1609545600000,
  startTime: '2021-01-02T00:00:00.000+00:00',
  startTimeAMPM: '2021/01/02 09:00:00 AM',
  unixEndTime: 1609547400000,
  endTime: '2021-01-02T00:30:00.000+00:00',
  endTimeAMPM: '2021/01/02 09:30:00 AM',
  penalty: 0,
  ratedBound: 0,
  contestType: 'ATCODER',
  ratingCalculated: false,
  ...object,
});

const mockAprilFoolContest = {
  unixStartTime: 1617274800000,
  unixEndTime: 1617276600000,
  startTimeAMPM: '2021/04/01 08:00:00 PM',
  endTimeAMPM: '2021/04/01 08:30:00 PM',
  id: 'april2021',
  name: 'くそなぞなぞ April Fool Contest 2021',
  statement:
    'Writer: shop_one\n\nくそなぞなぞのエイプリルフールコンテストです。\n普段よりクソだったりカスな問題が出てきます。 平たく言うとTwitter向き問題です。\nひらがなでの正解が用意されていますが、一部表記ゆれが許される場合があります。\nペナルティはありません。\n100-200-300-400-500-600-600',
  startTime: '2021-04-01T11:00:00.000+00:00',
  endTime: '2021-04-01T11:30:00.000+00:00',
  penalty: 0,
  ratedBound: 0,
  contestType: 'ATCODER',
  ratingCalculated: false,
  contestCreators: [
    {
      accountName: 'shop_one',
      contestId: 'april2021',
      position: 'COORDINATOR',
    },
  ],
};

const mockAccountInfo = {
  name: 'noyan',
  rating: 0,
  partNum: 0,
  auth: 'GENERAL',
};
const mockAprilFoolContestProblems = [
  {
    contestId: 'april2021',
    point: 100,
    statement: 'なんも入ってない色な〜んだ？',
    indexOfContest: 0,
    id: 260,
  },
  {
    contestId: 'april2021',
    point: 200,
    statement: '負け家具な〜んだ？',
    indexOfContest: 1,
    id: 261,
  },
  {
    contestId: 'april2021',
    point: 300,
    statement: 'カチカチ工具な〜んだ？',
    indexOfContest: 2,
    id: 262,
  },
  {
    contestId: 'april2021',
    point: 400,
    statement: 'るるるるるるるるるるるるるるカフェな〜んだ？',
    indexOfContest: 3,
    id: 263,
  },
  {
    contestId: 'april2021',
    point: 500,
    statement:
      '|米　　　|\n|米米　　|\n|米米米　|\n|米米米米|\n|   (ごみ)   |\n ーーーー \n\uD83D\uDE2D「俺の米…」\nな〜んだ？',
    indexOfContest: 4,
    id: 264,
  },
  {
    contestId: 'april2021',
    point: 600,
    statement: '貴重なんだけど、世界をバラバラにしてしまう人な〜んだ？',
    indexOfContest: 5,
    id: 265,
  },
  {
    contestId: 'april2021',
    point: 600,
    statement: '日本で呼び名が変わると酸っぱくなる果物な〜んだ？',
    indexOfContest: 6,
    id: 266,
  },
];

const submitStatus = {
  submitTimeAMPM: '2021/04/22 04:09:18 PM',
  contestId: 'april2021',
  indexOfContest: 0,
  accountName: 'noyan',
  statement: 'a',
  submitTime: '2021-04-22T07:09:18.993+00:00',
  result: 'WRONG_ANSWER',
};

const mockContestRankingListItemFactory = (object = {}) => ({
  accountName: 'なぞなぞ界の tourist',
  score: 2,
  penalty: 0,
  acceptList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ranking: 1,
  ...object,
});

const mockRateRanking = {
  accounts: [
    { name: 'anagohirame', rating: 2010, partNum: 7, auth: 'GENERAL' },
    { name: 'cumin', rating: 1934, partNum: 8, auth: 'GENERAL' },
    { name: 'leaf1415', rating: 1894, partNum: 7, auth: 'GENERAL' },
    { name: 'nikuroll', rating: 1857, partNum: 6, auth: 'GENERAL' },
    { name: 'Ti11192916', rating: 1810, partNum: 5, auth: 'GENERAL' },
    { name: 'Motsu_xe', rating: 1784, partNum: 7, auth: 'GENERAL' },
    { name: 'east1016', rating: 1737, partNum: 7, auth: 'GENERAL' },
    { name: 'fuppy', rating: 1715, partNum: 11, auth: 'GENERAL' },
    { name: 'tenjo', rating: 1694, partNum: 7, auth: 'GENERAL' },
    { name: 'miiverse_udon', rating: 1686, partNum: 5, auth: 'GENERAL' },
    { name: 'hamukichi_nbr', rating: 1676, partNum: 12, auth: 'GENERAL' },
    { name: 'nrvft', rating: 1580, partNum: 11, auth: 'GENERAL' },
    { name: 'koboshi', rating: 1557, partNum: 11, auth: 'GENERAL' },
    { name: 'zer0star', rating: 1542, partNum: 10, auth: 'GENERAL' },
    { name: 'gouwanowan', rating: 1504, partNum: 10, auth: 'GENERAL' },
    { name: 'takeo1116', rating: 1495, partNum: 4, auth: 'GENERAL' },
    { name: 'olphe', rating: 1492, partNum: 10, auth: 'GENERAL' },
    { name: 'tantal', rating: 1453, partNum: 12, auth: 'GENERAL' },
    { name: 'kit84', rating: 1445, partNum: 11, auth: 'GENERAL' },
    { name: 'emthrm', rating: 1413, partNum: 10, auth: 'GENERAL' },
  ],
  validAccountNum: 196,
};

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
      values: {
        contest_id: 'april2021',
      },
    },
    response: {
      body: mockAprilFoolContestProblems,
    },
  },

  {
    title: 'Ranking in a Contest',
    description: 'http://localhost:8080/api/contests/april2021/ranking?page=0',
    request: {
      path: '/api/contests/{:contest_id}/ranking',
      query: { page: '{:number}' },
      values: {
        contest_id: 'april2021',
        number: 0,
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
  {
    title: 'ユーザーレートRanking',
    description: '',
    request: {
      path: '/api/ranking',
      query: {
        page: '{:queryValue}',
      },
      values: {
        queryValue: '0',
      },
    },

    response: {
      body: mockRateRanking,
    },
  },
];
