import Mock from 'mockjs';

Mock.mock('/statistics/visitor-count/:id', 'get', () => {
  const obj = {
    code: 10000,
    message: '成功',
  };
  return obj;
});

export default Mock
