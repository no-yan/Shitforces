export const mockContestFactory = (object = {}) => ({
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

export const mockAprilFoolContest = {
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

export const mockAccountInfo = {
  name: 'noyan',
  rating: 0,
  partNum: 0,
  auth: 'GENERAL',
};
export const mockAprilFoolContestProblems = [
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

export const submitStatus = {
  submitTimeAMPM: '2021/04/22 04:09:18 PM',
  contestId: 'april2021',
  indexOfContest: 0,
  accountName: 'noyan',
  statement: 'a',
  submitTime: '2021-04-22T07:09:18.993+00:00',
  result: 'WRONG_ANSWER',
};

export const mockContestRankingListItemFactory = (object = {}) => ({
  accountName: 'なぞなぞ界の tourist',
  score: 2,
  penalty: 0,
  acceptList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ranking: 1,
  ...object,
});
